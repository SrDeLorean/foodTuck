import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createProduct } from '../../services/productoService'; // Assuming createProduct exists

export default function ProductoCreateScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(''); // Price can be a string initially

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigation = useNavigation();

  const handleCreateProduct = async () => {
    if (!name || !price) {
      Alert.alert('Error', 'Nombre y precio son obligatorios.');
      return;
    }

    setLoading(true);
    setError(null); // Clear previous errors

    try {
      // Convert price to a number before sending
      const productData = {
        name,
        description,
        price: parseFloat(price),
      };
      await createProduct(productData); // Call the service function
      Alert.alert('Éxito', 'Producto creado correctamente.');
      navigation.navigate('ProductoList'); // Navigate back to the product list
    } catch (err) {
      setError('Error al crear el producto.');
      console.error(err);
      Alert.alert('Error', 'Hubo un problema al crear el producto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Producto</Text>

      <View style={styles.formCard}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Nombre del Producto:</Text>
        </View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#888" // Placeholder color

        placeholder="Nombre del Producto"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción"
        placeholderTextColor="#888" // Placeholder color

        value={description}
        onChangeText={setDescription}
        multiline
      />

      <View style={styles.formGroup}>
          <Text style={styles.label}>Precio:</Text>
        </View>
      <TextInput
        placeholderTextColor="#888" // Placeholder color
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric" // Use numeric keyboard for price
      />

      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity
        style={styles.createButton}
        onPress={handleCreateProduct}
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Crear Producto</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

// Updated styles for Product Creation Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  descriptionInput: {
    height: 100, // Larger height for description
    textAlignVertical: 'top', // Align text to the top on Android
  },
  createButton: {
    backgroundColor: '#007bff', // Blue color for create button
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Optional: uppercase text
  },
  errorText: {
    color: 'red',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  },
});
