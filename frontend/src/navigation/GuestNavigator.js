import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GuestHome from '../views/guest/GuestHome';
import LoginScreen from '../views/auth/LoginScreen';
import RegisterScreen from '../views/auth/RegisterScreen';

import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export default function GuestNavigator() {
  return (
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
  );
}
