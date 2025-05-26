// src/views/producto/ProductoCreateScreen.js
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ProductForm from './ProductForm';
import { formStyles } from '../../styles/formStyles';
import { createProduct } from '../../services/productoService';
import CardScrollView from '../../components/CardScrollView';

export default function ProductoCreateScreen() {
  const navigation = useNavigation();

  const handleCreate = async (product) => {
    try {
      await createProduct(product);
      Toast.show({
        type: 'success',
        text1: 'Producto creado',
        text2: `${product.name} fue agregado exitosamente 🎉`,
      });
      navigation.goBack();
    } catch {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'No se pudo crear el producto 😓',
      });
    }
  };

  return (
    <CardScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ProductForm onSubmit={handleCreate} />
      </KeyboardAvoidingView>
      <Toast />
    </CardScrollView>
  );
}
