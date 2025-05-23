import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { formInputStyles } from '../../styles/formInputStyles';
import { formStyles } from '../../styles/formStyles';
import { buttonStyles } from '../../styles/buttonStyles';
import { getProductById, updateProduct } from '../../services/productoService';

export default function ProductoEditScreen() {
  const navigation = useNavigation();
  const { productId } = useRoute().params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(productId);
        setName(product.name);
        setDescription(product.description);
        setPrice(String(product.price));
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: 'No se pudo cargar el producto.',
        });
        navigation.goBack();
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdate = async () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Todos los campos son obligatorios.',
      });
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'El precio debe ser un número positivo.',
      });
      return;
    }

    setSaving(true);
    try {
      await updateProduct(productId, { name, description, price: Number(price) });
      Toast.show({
        type: 'success',
        text1: 'Éxito',
        text2: 'Producto actualizado correctamente.',
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Error al actualizar el producto.',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={formStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Cargando producto...</Text>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={formStyles.container}
    >
      <View style={{ width: '100%', maxWidth: 600 }}>
        {/* Nombre */}
        <View style={formInputStyles.container}>
          <Text style={formInputStyles.label}>Nombre producto</Text>
          <TextInput
            style={formInputStyles.input}
            placeholder="Ingrese nombre"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Descripción */}
        <View style={formInputStyles.container}>
          <Text style={formInputStyles.label}>Descripción</Text>
          <TextInput
            style={formInputStyles.input}
            placeholder="Ingrese descripción"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Precio */}
        <View style={formInputStyles.container}>
          <Text style={formInputStyles.label}>Precio</Text>
          <TextInput
            style={formInputStyles.input}
            placeholder="Ingrese precio"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        </View>

        {/* Botón Guardar */}
        <TouchableOpacity
          style={[buttonStyles.button, buttonStyles.primary, { marginTop: 20 }]}
          onPress={handleUpdate}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={buttonStyles.buttonText}>Guardar Cambios</Text>
          )}
        </TouchableOpacity>
      </View>

      <Toast />
    </KeyboardAvoidingView>
  );
}
