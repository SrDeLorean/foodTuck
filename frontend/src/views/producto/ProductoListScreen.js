// src/views/producto/ProductoListScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { getProducts } from '../../services/productoService';
import { tableStyles } from '../../styles/tableStyles';
import DataTable from '../../components/DataTable';

export default function ProductoListScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carga inicial y recarga
  async function fetchProducts() {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudieron cargar los productos 😢',
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderEmpty = () => (
    <View style={tableStyles.emptyContainer}>
      <Text style={tableStyles.emptyText}>No se encontraron productos.</Text>
      <TouchableOpacity
        style={tableStyles.addButton}
        onPress={() => navigation.navigate('ProductoCreate')}
      >
        <Text style={tableStyles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={tableStyles.emptyContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={{ marginTop: 12 }}>Cargando productos...</Text>
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

      <DataTable
        columns={[
          { key: 'id', title: 'ID', sortable: true, headerStyle: tableStyles.idColumn, cellStyle: tableStyles.idCell },
          { key: 'name', title: 'Nombre', sortable: true, headerStyle: tableStyles.nameColumn, cellStyle: tableStyles.nameCell },
          { key: 'price', title: 'Precio', sortable: true, headerStyle: tableStyles.priceColumn, cellStyle: tableStyles.priceCell, format: val => `$${val}` },
        ]}
        data={products}
        onRowPress={item => navigation.navigate('ProductoDetail', { productId: item.id })}
        onRefresh={fetchProducts}
        emptyComponent={renderEmpty}
      />

      <Toast />
    </View>
  );
}