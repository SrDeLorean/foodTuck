// src/views/producto/ProductoEditScreen.js
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ActivityIndicator, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import ProductForm from './ProductForm';
import { formStyles } from '../../styles/components/formStyles';
import { getProductById, updateProduct } from '../../services/productoService';
import CardScrollView from '../../components/CardScrollView';

export default function ProductoEditScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { productId } = route.params;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProductById(productId);
      setProduct(data);
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo cargar el producto 😓',
      });
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      await updateProduct(productId, updatedProduct);
      Toast.show({
        type: 'success',
        text1: 'Producto actualizado',
        text2: `${updatedProduct.name} fue modificado exitosamente 🎉`,
      });
      navigation.goBack();
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo actualizar el producto 😓',
      });
    }
  };

  if (loading) {
    return (
      <View style={formStyles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <CardScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ProductForm onSubmit={handleUpdate} initialData={product} />
      </KeyboardAvoidingView>
      <Toast />
    </CardScrollView>
  );
}
