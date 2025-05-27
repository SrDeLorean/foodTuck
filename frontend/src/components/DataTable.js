import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
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
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(defaultItemsPerPage);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = data.slice(
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
    if (isNarrowScreen) {
      const buttons = [];

      buttons.push(renderPageButton(1));

      if (currentPage > 3) {
        buttons.push(
          <Text key="start-dots" style={tableStyles.paginationDots}>
            ...
          </Text>
        );
      }

      if (currentPage !== 1 && currentPage !== totalPages) {
        buttons.push(renderPageButton(currentPage));
      }

      if (currentPage < totalPages - 2) {
        buttons.push(
          <Text key="end-dots" style={tableStyles.paginationDots}>
            ...
          </Text>
        );
      }

      if (totalPages > 1) {
        buttons.push(renderPageButton(totalPages));
      }

      return buttons;
    }

    if (totalPages <= 7) {
      return [...Array(totalPages)].map((_, i) => renderPageButton(i + 1));
    }

    const buttons = [];
    const addPageButton = (page) => buttons.push(renderPageButton(page));

    addPageButton(1);

    if (currentPage > 4) {
      buttons.push(
        <Text key="start-dots" style={tableStyles.paginationDots}>
          ...
        </Text>
      );
    }

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      addPageButton(i);
    }

    if (currentPage < totalPages - 3) {
      buttons.push(
        <Text key="end-dots" style={tableStyles.paginationDots}>
          ...
        </Text>
      );
    }

    addPageButton(totalPages);

    return buttons;
  };

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

  const handleSort = (colKey) => {
    if (!onSort) return;
    onSort(colKey);
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

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.horizontalScroll}
      >
        <View style={[styles.tableWrapper, { minWidth: screenWidth }]}>
          {renderHeader()}
          <FlatList
            ref={flatListRef}
            data={paginatedData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            refreshControl={refreshControl}
            keyboardShouldPersistTaps="handled"
            style={styles.flatList}
          />
        </View>
      </ScrollView>

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

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
  },
  horizontalScroll: {
    flexGrow: 0,
  },
  tableWrapper: {
    flex: 1,
  },
  flatList: {
    flexGrow: 0,
  },
});
