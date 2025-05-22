// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { AuthContext } from '../context/AuthContext';

import AdminNavigator from './AdminNavigator';
import UserNavigator from './UserNavigator';
import GuestNavigator from './GuestNavigator';
import FoodTruckNavigator from './FoodTruckNavigator';
import ManagerNavigator from './ManagerNavigator';

import ProductoCreateScreen from '../views/producto/ProductoCreateScreen';




export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user && <GuestNavigator />}
      {user && user.role === 'admin' && <AdminNavigator />}
      {user && user.role === 'user' && <UserNavigator />}
      {user && user.role === 'foodtruck' && <FoodTruckNavigator />}
      {user && user.role === 'manager' && <ManagerNavigator />}
      <Stack.Screen name="ProductoCreateScreen" component={ProductoCreateScreen} />
    </NavigationContainer>
  );
}