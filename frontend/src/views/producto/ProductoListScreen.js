import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import { getProducts } from '../../services/productoService'; // Assuming getProducts is exported from here
import { useNavigation } from '@react-navigation/native';

export default function ProductoListScreen() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState(''); // Unified filter state
  const [sortColumn, setSortColumn] = useState(null); // State for the column to sort by
  const [sortDirection, setSortDirection] = useState('asc'); // State for the sort direction ('asc' or 'desc')

  useEffect(() => {  
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Call the service function
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos.'); // Set error message
        setLoading(false);
        console.error(err); // Log the error for debugging
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Unified filtering logic
  const filteredProducts = products.filter(product => {
    if (filterText === '') return true; // Return all products if filterText is empty
    const lowerFilterText = filterText.toLowerCase();
    return (
      (product.id && product.id.toString().includes(filterText)) ||
      (product.name && product.name.toLowerCase().includes(lowerFilterText)) ||
 (product.price !== undefined && product.price !== null && product.price.toString().includes(filterText))
    );
  });

  // Sorting logic
  const sortedAndFilteredProducts = [...filteredProducts]; // Create a copy to sort
  if (sortColumn) {
    sortedAndFilteredProducts.sort((a, b) => {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (sortColumn === 'price') { // Numeric sort for price
        const numA = aValue ?? 0;
        const numB = bValue ?? 0;
        return sortDirection === 'asc' ? numA - numB : numB - numA;
      } else { // Lexicographical sort for others (ID, Name)
        const stringA = String(aValue ?? '');
        const stringB = String(bValue ?? '');
        return sortDirection === 'asc' ? stringA.localeCompare(stringB) : stringB.localeCompare(stringA);
      }
    });
  }

  const handleSort = (column) => {
 if (sortColumn === column) {
      // If clicking the same column, toggle direction
 setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If clicking a different column, set that column and ascending direction
 setSortColumn(column);
 setSortDirection('asc');
    }
  }; // <-- Ensure handleSort is closed here



  return (
    <View style={styles.container}>
    <TouchableOpacity
      style={styles.addButton} // Asegúrate de que tu estilo esté aquí
      onPress={() => navigation.navigate('ProductoCreate')} // <--- Esta es la línea importante
    >
 <Text style={styles.addButtonText}>Agregar Producto</Text>
      </TouchableOpacity>
      {/* Table Header */}
      <TextInput
        style={styles.generalFilterInput} // Style for the unified filter input
        placeholder="Filtrar productos..."
        value={filterText}
        onChangeText={setFilterText}
      />
      <View style={styles.tableHeader}>
        <TouchableOpacity style={[styles.columnHeader, styles.idColumn]} onPress={() => handleSort('id')}>
          <Text style={styles.columnHeaderText}>
            ID {sortColumn === 'id' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.columnHeader, styles.nameColumnHeader]} onPress={() => handleSort('name')}>
          <Text style={styles.columnHeaderText}>
            Nombre {sortColumn === 'name' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.columnHeader, styles.priceColumnHeader]} onPress={() => handleSort('price')}>
          <Text style={styles.columnHeaderText}>
            Precio {sortColumn === 'price' ? (sortDirection === 'asc' ? ' ▲' : ' ▼') : ''}
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList // Removed empty filterRow View
        data={sortedAndFilteredProducts} // Use the filtered and sorted data
        renderItem={({ item }) => (
          <ProductTableRow item={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

// Component for individual table rows (optional but helps keep renderItem clean)
function ProductTableRow({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.tableRow}
      onPress={() => navigation.navigate('ProductoDetail', { productId: item.id })}
    >
      <Text style={[styles.tableCell, styles.idColumn]}>{item.id}</Text>
      <Text style={[styles.tableCell, styles.nameColumnCell]}>{item.name}</Text>
      <Text style={[styles.tableCell, styles.priceColumnCell]}>${item.price}</Text>
      {/* Add more table cells here */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Espaciado interior general
    backgroundColor: '#f8f8f8', // Un color de fondo suave
  },
  title: {
    fontSize: 24, // Tamaño de fuente más grande
    fontWeight: 'bold', // Fuente en negrita
    marginBottom: 20, // Espacio debajo del título
    color: '#333', // Color de texto oscuro
    textAlign: 'center', // Centrar el título
  },
  addButton: {
    backgroundColor: '#007bff', // Color azul para el botón
    padding: 12, // Espaciado interior del botón
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centrar contenido horizontalmente
    marginBottom: 20, // Espacio debajo del botón
  },
  addButtonText: {
    color: '#fff', // Texto blanco para el botón
    fontSize: 18, // Tamaño de fuente del texto del botón
    fontWeight: 'bold', // Texto en negrita
  },
  // Estilos de tabla mejorados
  tableHeader: {
    flexDirection: 'row', // Disposición horizontal
    backgroundColor: '#e0e0e0', // Fondo para el encabezado
    paddingVertical: 10, // Espaciado vertical
    paddingHorizontal: 8, // Espaciado horizontal
    borderBottomWidth: 1, // Borde inferior
    borderColor: '#ccc', // Color del borde
  },
  tableRow: {
    flexDirection: 'row', // Disposición horizontal
    paddingVertical: 10, // Espaciado vertical
    paddingHorizontal: 8, // Espaciado horizontal
    borderBottomWidth: 1, // Borde inferior
    borderColor: '#eee', // Color de borde más claro
    backgroundColor: '#fff', // Fondo blanco para las filas
    // Puedes añadir lógica para colores alternos si lo deseas aquí
  },
  tableCell: {
    flex: 1, // Las celdas ocupan espacio equitativo
    justifyContent: 'center', // Centrar contenido verticalmente
  },
  idColumn: {
    width: 50, // Ancho fijo para la columna ID
    justifyContent: 'center',
    alignItems: 'center', // Centrar contenido horizontalmente
  },
  nameColumnCell: {
    flex: 2, // La columna de nombre ocupa más espacio
    justifyContent: 'center',
  },
  priceColumnCell: {
    flex: 1, // La columna de precio ocupa espacio equitativo
    justifyContent: 'center',
    alignItems: 'flex-end', // Alinear precio a la derecha
    paddingRight: 8, // Espaciado a la derecha
  },
  // Puedes añadir más estilos para el texto dentro de las celdas si es necesario
  cellText: {
      fontSize: 16,
      color: '#555',
  },
  headerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
  },
  // Estilos para los botones de acción en la fila (Editar/Eliminar)
  actionButtonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around', // Espacio entre los botones
      flex: 1, // Ocupa espacio en la fila
  },
  actionButton: {
      padding: 5,
      borderRadius: 4,
  },
  editButton: {
      backgroundColor: '#ffc107', // Color amarillo para editar
  },
  deleteButton: {
      backgroundColor: '#dc3545', // Color rojo para eliminar
  },
  actionButtonText: {
      color: '#fff',
      fontSize: 14,
  }
});