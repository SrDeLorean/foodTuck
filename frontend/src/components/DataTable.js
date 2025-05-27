import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker';
import { tableStyles } from '../styles/tableStyles';

export default function DataTable({
  columns,
  data,
  onRowPress,
  flatListRef,
  renderEmpty,
  refreshControl,
}) {
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
      setScreenHeight(window.height);
    });
    return () => {
      subscription?.remove();
    };
  }, []);

  const isNarrowScreen = screenWidth < 600;
  const defaultItemsPerPage = isNarrowScreen ? 5 : 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [searchText, setSearchText] = useState('');
  const [searchColumn, setSearchColumn] = useState('all');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [lastSortedAt, setLastSortedAt] = useState(null);

  const handleSort = (colKey) => {
    if (sortColumn === colKey) {
      const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newDirection);
    } else {
      setSortColumn(colKey);
      setSortDirection('asc');
    }
    setLastSortedAt(new Date());
  };

  const filteredData = data
    .filter((item) => {
      if (!searchText) return true;
      if (searchColumn === 'all') {
        return columns.some((col) =>
          item[col.key]?.toString().toLowerCase().includes(searchText.toLowerCase())
        );
      } else {
        return item[searchColumn]?.toString().toLowerCase().includes(searchText.toLowerCase());
      }
    })
    .sort((a, b) => {
      if (!sortColumn) return 0;
      const valA = a[sortColumn];
      const valB = b[sortColumn];
      if (typeof valA === 'number' && typeof valB === 'number') {
        return sortDirection === 'asc' ? valA - valB : valB - valA;
      }
      const strA = valA?.toString().toLowerCase();
      const strB = valB?.toString().toLowerCase();
      if (strA < strB) return sortDirection === 'asc' ? -1 : 1;
      if (strA > strB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const changeItemsPerPage = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1);
    flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const renderPageButton = (page) => {
      const isActive = page === currentPage;
      return (
        <TouchableOpacity
          key={page}
          style={[
            tableStyles.paginationPageNumber,
            isActive && tableStyles.paginationPageNumberActive,
          ]}
          onPress={() => changePage(page)}
        >
          <Text
            style={[
              tableStyles.paginationPageNumberText,
              isActive && tableStyles.paginationPageNumberTextActive,
            ]}
          >
            {page}
          </Text>
        </TouchableOpacity>
      );
    };

    if (isNarrowScreen) {
      buttons.push(renderPageButton(1));
      if (currentPage > 3) {
        buttons.push(<Text key="start-dots" style={tableStyles.paginationDots}>...</Text>);
      }
      if (currentPage !== 1 && currentPage !== totalPages) {
        buttons.push(renderPageButton(currentPage));
      }
      if (currentPage < totalPages - 2) {
        buttons.push(<Text key="end-dots" style={tableStyles.paginationDots}>...</Text>);
      }
      if (totalPages > 1) {
        buttons.push(renderPageButton(totalPages));
      }
    } else {
      const addPageButton = (page) => buttons.push(renderPageButton(page));
      addPageButton(1);
      if (currentPage > 4) {
        buttons.push(<Text key="start-dots" style={tableStyles.paginationDots}>...</Text>);
      }
      const startPage = Math.max(2, currentPage - 2);
      const endPage = Math.min(totalPages - 1, currentPage + 2);
      for (let i = startPage; i <= endPage; i++) {
        addPageButton(i);
      }
      if (currentPage < totalPages - 3) {
        buttons.push(<Text key="end-dots" style={tableStyles.paginationDots}>...</Text>);
      }
      addPageButton(totalPages);
    }

    return buttons;
  };

  const renderHeader = () => (
    <View style={tableStyles.tableHeader}>
      {columns.map((col) => (
        <TouchableOpacity
          key={col.key}
          onPress={() => col.sortable && handleSort(col.key)}
          style={[tableStyles.columnHeader, col.headerStyle]}
          activeOpacity={col.sortable ? 0.7 : 1}
        >
          <Text style={tableStyles.columnHeaderText}>
            {col.title}{' '}
            {sortColumn === col.key ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderItem = ({ item, index }) => (
    <Animatable.View animation="fadeInUp" delay={index * 50}>
      <TouchableOpacity
        style={tableStyles.tableRow}
        onPress={() => onRowPress && onRowPress(item)}
        activeOpacity={0.7}
      >
        {columns.map((col) => (
          <Text key={col.key} style={[tableStyles.tableCell, col.cellStyle]}>
            {col.format ? col.format(item[col.key]) : item[col.key]}
          </Text>
        ))}
      </TouchableOpacity>
    </Animatable.View>
  );

  // Estimación del ancho total de la tabla sumando anchos fijos o flexibles
  // Para simplificar, usamos valores fijos para columnas (puedes ajustar según tus estilos)
  // Ejemplo: si usas flex, suma un valor promedio por columna (por ejemplo 100)
  // Aquí asumimos 100 por columna como estimado, o usa col.width si lo defines
  const tableWidthEstimate = columns.reduce((acc, col) => {
    if (col.width) return acc + col.width;
    return acc + 100; // valor por defecto estimado
  }, 0);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {tableWidthEstimate > screenWidth ? (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ minWidth: tableWidthEstimate }}>
            {renderHeader()}
            <FlatList
              ref={flatListRef}
              data={paginatedData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              ListEmptyComponent={renderEmpty}
              refreshControl={refreshControl}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        </ScrollView>
      ) : (
        <View>
          {renderHeader()}
          <FlatList
            ref={flatListRef}
            data={paginatedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            refreshControl={refreshControl}
            keyboardShouldPersistTaps="handled"
          />
        </View>
      )}

      {lastSortedAt && (
        <Text style={{ textAlign: 'center', marginTop: 8, color: '#666' }}>
          Última ordenación: {lastSortedAt.toLocaleString()}
        </Text>
      )}

      <View style={tableStyles.paginationContainer}>
        <View style={tableStyles.pagesWrapper}>
          <TouchableOpacity
            style={[
              tableStyles.paginationButton,
              currentPage === 1 && tableStyles.paginationButtonDisabled,
            ]}
            onPress={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Text style={tableStyles.paginationButtonText}>{'‹'}</Text>
          </TouchableOpacity>

          {renderPaginationButtons()}

          <TouchableOpacity
            style={[
              tableStyles.paginationButton,
              currentPage === totalPages && tableStyles.paginationButtonDisabled,
            ]}
            onPress={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <Text style={tableStyles.paginationButtonText}>{'›'}</Text>
          </TouchableOpacity>
        </View>

        <View style={tableStyles.itemsPerPageWrapper}>
          <Text style={tableStyles.itemsPerPageLabel}>Items por página:</Text>
          <Picker
            selectedValue={itemsPerPage}
            style={tableStyles.picker}
            onValueChange={(value) => changeItemsPerPage(value)}
            mode="dropdown"
          >
            {[5, 10, 15, 20, 25, 50].map((num) => (
              <Picker.Item key={num} label={num.toString()} value={num} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 12,
  },
  filterContainer: {
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});
