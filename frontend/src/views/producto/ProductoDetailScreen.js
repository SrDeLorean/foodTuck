import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getProductById, deleteProduct } from '../../services/productoService';
import { formStyles } from '../../styles/formStyles';
import { buttonStyles } from '../../styles/buttonStyles';

export default function ProductoDetailScreen() {
  const { productId } = useRoute().params;
  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getProductById(productId);
        setProduct(data);
      } catch (err) {
        setError('Error al cargar los detalles del producto.');
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [productId]);

  const handleDelete = async () => {
    Alert.alert(
      'Confirmar eliminación',
      '¿Estás seguro de que deseas eliminar este producto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteProduct(productId);
              navigation.navigate('ProductoList'); // Volver a lista tras eliminar
            } catch (err) {
              setError('Error al eliminar el producto.');
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={formStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Cargando detalles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={formStyles.container}>
        <Text style={formStyles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={formStyles.container}>
      {product ? (
        <>
          <View style={formStyles.card}>
            <Text style={formStyles.title}>{product.name}</Text>
            <Text style={formStyles.label}>{product.description}</Text>
            <Text style={[formStyles.label, { color: '#007bff', fontWeight: 'bold' }]}>
              Precio: ${product.price}
            </Text>
          </View>

          <TouchableOpacity
            style={[buttonStyles.button, buttonStyles.primary]}
            onPress={() => navigation.navigate('ProductoEdit', { productId })}
          >
            <Text style={buttonStyles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[buttonStyles.button, buttonStyles.danger]}
            onPress={handleDelete}
          >
            <Text style={buttonStyles.buttonText}>Eliminar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>No se encontraron detalles del producto.</Text>
      )}
    </View>
  );
}
