import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { formInputStyles } from '../../styles/formInputStyles';
import { formStyles } from '../../styles/formStyles';
import { buttonStyles } from '../../styles/buttonStyles';
import { createProduct } from '../../services/productoService';

export default function ProductoCreateScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
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

    setLoading(true);
    try {
      await createProduct({ name, description, price: Number(price) });
      Toast.show({
        type: 'success',
        text1: 'Éxito',
        text2: 'Producto creado correctamente.',
      });
      navigation.navigate('ProductoList');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Error al crear el producto.',
      });
    } finally {
      setLoading(false);
    }
  };

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

        {/* Botón Crear */}
        <TouchableOpacity
          style={[buttonStyles.button, buttonStyles.primary, { marginTop: 20 }]}
          onPress={handleCreate}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={buttonStyles.buttonText}>Crear Producto</Text>
          )}
        </TouchableOpacity>
      </View>

      <Toast />
    </KeyboardAvoidingView>
  );
}
