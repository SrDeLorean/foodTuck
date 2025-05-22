// src/navigation/AdminNavigator.js
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AdminHome from '../views/admin/AdminHome';
import AdminProfile from '../views/admin/AdminProfile';
import Footer from '../components/Footer';
import CustomDrawerContent from './CustomDrawerContent';
import { AuthContext } from '../context/AuthContext';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export default function AdminNavigator() {
  const { logout } = useContext(AuthContext);

  return (
    <Drawer.Navigator
      initialRouteName="AdminHome"

      drawerContent={(props) => (
        <CustomDrawerContent {...props} isLoggedIn={true} logout={logout} />
      )}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="AdminHome" component={AdminHome} options={{ title: 'Inicio Admin' }} />
      <Drawer.Screen name="AdminProfile" component={AdminProfile} options={{ title: 'Perfil Admin' }} />
    </Drawer.Navigator>
  );
}