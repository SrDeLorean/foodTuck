import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Picker } from '@react-native-picker/picker';
import { tableStyles } from '../styles/tableStyles';

export default function DataTable({
  columns,
  data,
  onRowPress,
  onSort,
  sortColumn,
  sortDirection,
  flatListRef,
  renderEmpty,
  refreshControl,
}) {
  // Estado para guardar ancho de pantalla y actualizar al cambiar tamaño o rotar
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setScreenWidth(window.width);
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  const isNarrowScreen = screenWidth < 600; // Umbral para considerar pantalla estrecha

  const defaultItemsPerPage = isNarrowScreen ? 5 : 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Data paginada según página e ítems por página
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cambiar página, evita fuera de rango y hace scroll al principio
  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  // Cambiar cantidad de ítems por página y resetear página actual
  const changeItemsPerPage = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1);
    flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
  };

  // Renderizar botones de paginación según ancho pantalla
  const renderPaginationButtons = () => {
    if (isNarrowScreen) {
      const buttons = [];

      buttons.push(renderPageButton(1));

      if (currentPage > 3) {
        buttons.push(
          <Text key="start-dots" style={tableStyles.paginationDots}>...</Text>
        );
      }

      if (currentPage !== 1 && currentPage !== totalPages) {
        buttons.push(renderPageButton(currentPage));
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <Text key="end-dots" style={tableStyles.paginationDots}>...</Text>
        );
      }

      if (totalPages > 1) {
        buttons.push(renderPageButton(totalPages));
      }

      return buttons;
    }

    // Comportamiento normal para pantallas anchas
    if (totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => renderPageButton(i + 1));
    }

    const buttons = [];
    const addPageButton = (page) => buttons.push(renderPageButton(page));

    addPageButton(1);

    if (currentPage > 4) {
      buttons.push(
        <Text key="start-dots" style={tableStyles.paginationDots}>...</Text>
      );
    }

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      addPageButton(i);
    }

    if (currentPage < totalPages - 3) {
      buttons.push(
        <Text key="end-dots" style={tableStyles.paginationDots}>...</Text>
      );
    }

    addPageButton(totalPages);

    return buttons;
  };

  // Botón individual de página con estilos activos/inactivos
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

  // Manejar ordenación de columnas
  const handleSort = (colKey) => {
    if (!onSort) return;
    onSort(colKey);
  };

  // Renderizar encabezado con posibilidad de ordenar columnas
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

  // Renderizar fila animada, con evento al presionar
  const renderItem = ({ item, index }) => (
    <Animatable.View animation="fadeInUp" delay={index * 50}>
      <TouchableOpacity
        style={tableStyles.tableRow}
        onPress={() => onRowPress && onRowPress(item)}
        activeOpacity={0.7}
      >
        {columns.map((col) => (
          <Text
            key={col.key}
            style={[tableStyles.tableCell, col.cellStyle]}
          >
            {col.format ? col.format(item[col.key]) : item[col.key]}
          </Text>
        ))}
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
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

      {/* Paginación y Picker */}
      <View style={tableStyles.paginationContainer}>
        {/* Botones de paginación */}
        <View style={tableStyles.pagesWrapper}>
          <TouchableOpacity
            style={[
              tableStyles.paginationButton,
              currentPage === 1 && tableStyles.paginationButtonDisabled,
            ]}
            onPress={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <Text style={tableStyles.paginationButtonText}>‹</Text>
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
            <Text style={tableStyles.paginationButtonText}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Selector de ítems por página */}
        <View style={tableStyles.itemsPerPageWrapper}>
          <Text style={tableStyles.itemsPerPageLabel}>Items por página:</Text>
          <View style={tableStyles.itemsPerPagePickerWrapper}>
            <Picker
              selectedValue={itemsPerPage}
              style={tableStyles.itemsPerPagePicker}
              onValueChange={(value) => changeItemsPerPage(value)}
              dropdownIconColor="#000"
            >
              {[5, 10, 15, 25, 50, 100].map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </View>
  );
}
