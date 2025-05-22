import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getProductById, updateProduct } from '../../services/productoService'; // Assuming these functions exist

export default function ProductoEditScreen() {
  const route = useRoute();
  const { productId } = route.params; // Get product ID from route params

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true); // Loading for initial fetch and for saving
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductById(productId); // Fetch product details
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price.toString()); // Convert price to string for TextInput
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los detalles del producto.');
        setLoading(false);
        console.error(err);
      }
    };

    fetchProductDetails();
  }, [productId]); // Rerun effect if productId changes

  const handleUpdateProduct = async () => {
    setLoading(true); // Set loading for the update operation
    setError(null); // Clear previous errors
    try {
      const updatedProductData = {
        name,
        description,
        price: parseFloat(price), // Convert price back to number
      };
      await updateProduct(productId, updatedProductData); // Call update service
      setLoading(false);
      navigation.navigate('ProductoList'); // Navigate back after successful update
    } catch (err) {
      setError('Error al actualizar el producto.');
      setLoading(false);
      console.error(err);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando datos del producto...</Text>
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
    <View style={styles.formContainer}>
      <Text style={styles.title}>Editar Producto</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del Producto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleUpdateProduct}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top', // Align text to the top on Android
  },
  button: {
    backgroundColor: '#007bff', // Example primary color
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
