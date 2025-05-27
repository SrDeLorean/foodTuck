import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GuestHome from '../../views/guest/GuestHome';
import ProductoList from '../../views/producto/ProductoListScreen';
import LoginScreen from '../../views/auth/LoginScreen';
import RegisterScreen from '../../views/auth/RegisterScreen';
import RecoverPasswordScreen from '../../views/auth/RecoverPasswordScreen';

import CustomDrawerContent from '../CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function GuestNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="GuestHome"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="GuestHome"
        component={GuestHome}
        options={{ title: 'Inicio' }}
      />

      <Drawer.Screen
        name="ProductoList"
        component={ProductoList}
        options={{ title: 'Productos' }}
      />

      {/* Login y Register ocultos del drawer, pero accesibles */}
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
      <Drawer.Screen
        name="Register"
        component={RegisterScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />

      <Drawer.Screen
        name="RecoverPasswordScreen"
        component={RecoverPasswordScreen}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Drawer.Navigator>

    
  );
}