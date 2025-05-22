import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getProductById, deleteProduct } from '../../services/productoService'; // Assuming getProductById and deleteProduct exist

export default function ProductoDetailScreen() {
  const route = useRoute();
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(productId); // Call the service function with the product ID
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los detalles del producto.'); // Set error message
        setLoading(false);
        console.error(err); // Log the error for debugging
      }
    };

    fetchProductDetails();

    // Cleanup function (optional but good practice)
    return () => {
      // Any cleanup code if needed (e.g., cancel pending requests)
    };
  }, [productId]); // Rerun effect if productId changes

  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
      navigation.navigate('ProductoList'); // Navigate back to the list after successful deletion
    } catch (err) {
      setError('Error al eliminar el producto.');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando detalles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {product ? (<>
        <View style={styles.detailsContainer}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productPrice}>Precio: ${product.price}</Text>
          {/* Add more product details here as needed */}
        </View>

        {/* Buttons for Edit and Delete */}
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('ProductoEdit', { productId: product.id })}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </>) : (
        <Text>No se encontraron detalles del producto.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    elevation: 2, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff', // Example price color
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#007bff', // Example color for edit
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Example color for delete (red)
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
