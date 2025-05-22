import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, StyleSheet } from 'react-native';
import GuestHome from '../views/guest/GuestHome';
import LoginScreen from '../views/auth/LoginScreen';
import RegisterScreen from '../views/auth/RegisterScreen';
import ProductoListScreen from '../views/producto/ProductoListScreen';
import ProductoDetailScreen from '../views/producto/ProductoDetailScreen';
import ProductoCreateScreen from '../views/producto/ProductoCreateScreen';
import ProductoEditScreen from '../views/producto/ProductoEditScreen';

import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();
import Footer from '../components/Footer';

export default function GuestNavigator() {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="GuestHome"
        drawerContent={(props) => <CustomDrawerContent {...props} guest={true} />}
      >
        <Drawer.Screen
          name="GuestHome"
          component={GuestHome}
          options={{ title: 'Inicio' }}
        />

        <Drawer.Screen
          name="ProductoList"
          component={ProductoListScreen}
          options={{ title: 'Productos' }}
        />
        <Drawer.Screen
          name="ProductoDetail"
          component={ProductoDetailScreen}
          options={{ drawerLabel: () => null, title: 'Detalle Producto' }}
        />
        <Drawer.Screen
          name="ProductoCreate"
          component={ProductoCreateScreen}
          options={{ drawerLabel: () => null, title: 'Crear Producto' }}
        />
        <Drawer.Screen
          name="ProductoEdit"
          component={ProductoEditScreen}
          options={{ title: 'Productos' }}
        />
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{ drawerLabel: () => null, title: 'Login' }} // No aparece en el menú
        />
        <Drawer.Screen
          name="Register"
          component={RegisterScreen}
          options={{ drawerLabel: () => null, title: 'Register' }} // No aparece en el menú
        />
      </Drawer.Navigator>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
