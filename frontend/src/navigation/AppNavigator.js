// src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';

import AdminNavigator from './AdminNavigator';
import UserNavigator from './UserNavigator';
import GuestNavigator from './GuestNavigator';

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!user && <GuestNavigator />}
      {user && user.role === 'admin' && <AdminNavigator />}
      {user && user.role === 'user' && <UserNavigator />}
    </NavigationContainer>
  );
}