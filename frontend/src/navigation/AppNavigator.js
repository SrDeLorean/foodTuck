//src/navigation/AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from '../context/AuthContext';

import AdminNavigator from './drawers/AdminNavigator';
import UserNavigator from './drawers/UserNavigator';
import GuestNavigator from './drawers/GuestNavigator';
import FoodTruckNavigator from './drawers/FoodTruckNavigator';
import ManagerNavigator from './drawers/ManagerNavigator';

import LayoutWithFooter from '../components/LayoutWithFooter';

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  let NavigatorComponent;

  if (!user) NavigatorComponent = GuestNavigator;
  else if (user.role === 'admin') NavigatorComponent = AdminNavigator;
  else if (user.role === 'user') NavigatorComponent = UserNavigator;
  else if (user.role === 'foodtruck') NavigatorComponent = FoodTruckNavigator;
  else if (user.role === 'manager') NavigatorComponent = ManagerNavigator;
  else NavigatorComponent = GuestNavigator;

  return (
    <NavigationContainer>
      <LayoutWithFooter>
        <NavigatorComponent />
      </LayoutWithFooter>
    </NavigationContainer>
  );
}