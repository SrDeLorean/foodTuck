import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { formStyles } from '../../styles/formStyles';
import { inputStyles } from '../../styles/inputStyles';

function validateProduct({ name, price }) {
  const errors = {};
  if (!name.trim()) errors.name = 'El nombre es obligatorio.';
  if (!price.trim() || isNaN(price)) errors.price = 'Precio inválido.';
  return errors;
}

function ErrorMessage({ message }) {
  return (
    <Text style={message ? formStyles.errorText : formStyles.errorPlaceholder}>
      {message || ' '}
    </Text>
  );
}

export default function ProductForm({ onSubmit, initialValues = {} }) {
  const [name, setName] = useState(initialValues.name || '');
  const [price, setPrice] = useState(initialValues.price ? String(initialValues.price) : '');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setName(initialValues.name || '');
    setPrice(initialValues.price ? String(initialValues.price) : '');
  }, [initialValues]);

  const handlePress = () => {
    const validationErrors = validateProduct({ name, price });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({ name: name.trim(), price: parseFloat(price) });
    }
  };

  return (
    <View style={formStyles.form}>
      <Text style={formStyles.label}>Nombre</Text>
      <TextInput
        style={[inputStyles.input, errors.name && inputStyles.inputError]}
        placeholder="Nombre del producto"
        value={name}
        onChangeText={setName}
      />
      <ErrorMessage message={errors.name} />

      <Text style={formStyles.label}>Precio</Text>
      <TextInput
        style={[inputStyles.input, errors.price && inputStyles.inputError]}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <ErrorMessage message={errors.price} />

      <TouchableOpacity style={formStyles.button} onPress={handlePress}>
        <Text style={formStyles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
