// src/navigation/stacks/ProductoStackNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductoListScreen from '../../views/producto/ProductoListScreen';
import ProductoDetailScreen from '../../views/producto/ProductoDetailScreen';
import ProductoCreateScreen from '../../views/producto/ProductoCreateScreen';
import ProductoEditScreen from '../../views/producto/ProductoEditScreen';

const Stack = createNativeStackNavigator();

export default function ProductoStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="ProductoList">
      <Stack.Screen 
        name="ProductoList" 
        component={ProductoListScreen} 
        options={{ title: 'Lista de Productos' }} 
      />
      <Stack.Screen 
        name="ProductoDetail" 
        component={ProductoDetailScreen} 
        options={{ title: 'Detalles del Producto' }} 
      />
      <Stack.Screen 
        name="ProductoCreate" 
        component={ProductoCreateScreen} 
        options={{ title: 'Crear Producto' }} 
      />
      <Stack.Screen 
        name="ProductoEdit" 
        component={ProductoEditScreen} 
        options={{ title: 'Editar Producto' }} 
      />
    </Stack.Navigator>
  );
}