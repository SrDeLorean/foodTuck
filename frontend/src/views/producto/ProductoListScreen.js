// src/screens/productos/ProductoListScreen.js
import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { getProducts } from '../../services/productoService';
import DataTable from '../../components/DataTable';
import { tableStyles } from '../../styles/components/tableStyles';
import CardScrollView from '../../components/CardScrollView';
import { useFetch } from '../../hooks/useFetch';

export default function ProductoListScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef();

  const { data: products, loading, refetch } = useFetch(getProducts);
  const [filterText, setFilterText] = React.useState('');

  const filteredProducts = (products ?? []).filter((p) =>
    p.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const onTableAction = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  const emptyComponent = (
    <View style={tableStyles.emptyContainer}>
      <Text style={tableStyles.emptyText}>No se encontraron productos.</Text>
      <TouchableOpacity
        style={tableStyles.addButton}
        onPress={() => navigation.navigate('ProductoCreate')}
        accessibilityLabel="Agregar nuevo producto"
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
    <CardScrollView>

      <TouchableOpacity
        style={tableStyles.addButton}
        onPress={() => navigation.navigate('ProductoCreate')}
        accessibilityLabel="Agregar nuevo producto"
      >
        <Text style={tableStyles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>

      <DataTable
        columns={[
          {
            key: 'id',
            title: 'ID',
            sortable: true,
            headerStyle: tableStyles.idColumn,
            cellStyle: tableStyles.idCell,
          },
          {
            key: 'name',
            title: 'Nombre',
            sortable: true,
            headerStyle: tableStyles.nameColumn,
            cellStyle: tableStyles.nameCell,
          },
          {
            key: 'price',
            title: 'Precio',
            sortable: true,
            headerStyle: tableStyles.priceColumn,
            cellStyle: tableStyles.priceCell,
            format: (val) => `$${val}`,
          },
        ]}
        data={filteredProducts}
        onRowPress={(item) =>
          navigation.navigate('ProductoDetail', { productId: item.id })
        }
        onRefresh={refetch}
        emptyComponent={emptyComponent}
        flatListRef={flatListRef}
        filterPlaceholder="Filtrar productos..."
        onSort={onTableAction}
      />

      <Toast />
    </CardScrollView>
  );
}
