// src/views/producto/ProductoListScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { getProducts } from '../../services/productoService';
import { useFilterSort } from '../../hooks/useFilterSort';
import { tableStyles } from '../../styles/tableStyles';

export default function ProductoListScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    filterText,
    setFilterText,
    sortColumn,
    setSortColumn,
    sortDirection,
    setSortDirection,
    filteredAndSortedData,
  } = useFilterSort(products);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError('Error al cargar productos.');
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No se pudieron cargar los productos.',
        });
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  if (loading) {
    return (
      <View style={tableStyles.emptyContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={tableStyles.emptyContainer}>
        <Text style={tableStyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={tableStyles.tableContainer}>
      <TouchableOpacity
        style={tableStyles.addButton}
        onPress={() => navigation.navigate('ProductoCreate')}
      >
        <Text style={tableStyles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>

      <TextInput
        style={tableStyles.searchInput}
        placeholder="Filtrar productos..."
        value={filterText}
        onChangeText={setFilterText}
        clearButtonMode="while-editing"
      />

      <View style={tableStyles.tableHeader}>
        <TouchableOpacity
          style={[tableStyles.columnHeader, tableStyles.idColumn]}
          onPress={() => handleSort('id')}
        >
          <Text style={tableStyles.columnHeaderText}>
            ID {sortColumn === 'id' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tableStyles.columnHeader, tableStyles.nameColumn]}
          onPress={() => handleSort('name')}
        >
          <Text style={tableStyles.columnHeaderText}>
            Nombre {sortColumn === 'name' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tableStyles.columnHeader, tableStyles.priceColumn]}
          onPress={() => handleSort('price')}
        >
          <Text style={tableStyles.columnHeaderText}>
            Precio {sortColumn === 'price' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredAndSortedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tableStyles.tableRow}
            onPress={() => navigation.navigate('ProductoDetail', { productId: item.id })}
          >
            <Text style={[tableStyles.tableCell, tableStyles.idCell]}>{item.id}</Text>
            <Text style={[tableStyles.tableCell, tableStyles.nameCell]}>{item.name}</Text>
            <Text style={[tableStyles.tableCell, tableStyles.priceCell]}>${item.price}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={tableStyles.emptyContainer}>
            <Text style={tableStyles.emptyText}>No se encontraron productos.</Text>
          </View>
        }
      />
      <Toast />
    </View>
  );
}
