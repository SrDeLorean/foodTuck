// src/views/producto/ProductoDetailScreen.js
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { formStyles } from '../../styles/components/formStyles';
import { getProductById } from '../../services/productoService';
import CardScrollView from '../../components/CardScrollView';
import { useFetchById } from '../../hooks/useFetchById';

export default function ProductoDetailScreen() {
  const navigation = useNavigation();
  const { productId } = useRoute().params;

  const { data: product, loading } = useFetchById(getProductById, productId, () => navigation.goBack());

  if (loading) {
    return (
      <View style={formStyles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <CardScrollView>
      <View style={formStyles.detailContainer}>
        <View style={formStyles.detailRow}>
          <Text style={formStyles.detailLabel}>ID:</Text>
          <Text style={formStyles.detailValue}>{product.id}</Text>
        </View>

        <View style={formStyles.detailRow}>
          <Text style={formStyles.detailLabel}>Nombre:</Text>
          <Text style={formStyles.detailValue}>{product.name}</Text>
        </View>

        <View style={formStyles.detailRow}>
          <Text style={formStyles.detailLabel}>Precio:</Text>
          <Text style={formStyles.detailValue}>${product.price}</Text>
        </View>

        <View style={formStyles.detailRow}>
          <Text style={formStyles.detailLabel}>Creado por:</Text>
          <Text style={formStyles.detailValue}>{product.creadoPor}</Text>
        </View>

        <View style={formStyles.detailRow}>
          <Text style={formStyles.detailLabel}>fecha de creación:</Text>
          <Text style={formStyles.detailValue}>{product.fecha}</Text>
        </View>

        <TouchableOpacity
          style={formStyles.button}
          onPress={() => navigation.navigate('ProductoEdit', { productId })}
        >
          <Text style={formStyles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <Toast />
    </CardScrollView>
  );
}
