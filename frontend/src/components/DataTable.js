import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, RefreshControl } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { tableStyles } from '../styles/tableStyles';

export default function DataTable({
  columns,
  data,
  onRowPress,
  onRefresh,
  emptyComponent,
  filterPlaceholder = "Filtrar...",
  flatListRef,
}) {
  // Estados internos
  const [filterText, setFilterText] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [refreshing, setRefreshing] = useState(false);

  const filterTextLower = filterText.toLowerCase();

  // Filtrado y ordenamiento memoizado
  const filteredAndSortedData = useMemo(() => {
    let filtered = data;

    if (filterText.trim() !== '') {
      filtered = data.filter(item =>
        columns.some(col => {
          const value = item[col.key];
          if (value === undefined || value === null) return false;
          return value.toString().toLowerCase().includes(filterTextLower);
        })
      );
    }

    if (!sortColumn) return filtered;

    return filtered.slice().sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      } else {
        return sortDirection === 'asc'
          ? aVal.toString().localeCompare(bVal.toString())
          : bVal.toString().localeCompare(aVal.toString());
      }
    });
  }, [data, filterTextLower, sortColumn, sortDirection, columns]);

  // Controla el orden al tocar headers
  const handleSort = (colKey) => {
    if (sortColumn === colKey) {
      // Cambia dirección
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortColumn(colKey);
      setSortDirection('asc');
    }
  };

  // Controla refresco, setea refreshing automáticamente mientras onRefresh async se ejecuta
  const handleRefresh = async () => {
    if (!onRefresh) return;
    setRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View>
      {/* Input filtro */}
      <TextInput
        style={tableStyles.searchInput}
        placeholder={filterPlaceholder}
        value={filterText}
        onChangeText={setFilterText}
        clearButtonMode="while-editing"
      />

      {/* Headers */}
      <View style={tableStyles.tableHeader}>
        {columns.map(col => (
          <TouchableOpacity
            key={col.key}
            onPress={() => col.sortable && handleSort(col.key)}
            style={[tableStyles.columnHeader, col.headerStyle]}
          >
            <Text style={tableStyles.columnHeaderText}>
              {col.title} {sortColumn === col.key ? (sortDirection === 'asc' ? '▲' : '▼') : ''}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Tabla con FlatList */}
      <FlatList
        ref={flatListRef}
        data={filteredAndSortedData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => (
          <Animatable.View animation="fadeInUp" delay={index * 100}>
            <TouchableOpacity
              style={tableStyles.tableRow}
              onPress={() => onRowPress && onRowPress(item)}
            >
              {columns.map(col => (
                <Text key={col.key} style={[tableStyles.tableCell, col.cellStyle]}>
                  {col.format ? col.format(item[col.key]) : item[col.key]}
                </Text>
              ))}
            </TouchableOpacity>
          </Animatable.View>
        )}
        ListEmptyComponent={emptyComponent}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          ) : null
        }
      />
    </View>
  );
}
