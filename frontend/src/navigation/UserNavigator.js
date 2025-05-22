// src/navigation/UserNavigator.js
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';

import UserHome from '../views/user/UserHome';
import UserProfile from '../views/user/UserProfile';
import CustomDrawerContent from './CustomDrawerContent';
import { AuthContext } from '../context/AuthContext';

const Drawer = createDrawerNavigator();

export default function UserNavigator() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="UserHome"
        drawerContent={(props) => (
          <CustomDrawerContent {...props} isLoggedIn={true} logout={logout} />
        )}
        screenOptions={{
          headerShown: true,
        }}
      >
        <Drawer.Screen name="UserHome" component={UserHome} options={{ title: 'Inicio Usuario' }} />
        <Drawer.Screen name="UserProfile" component={UserProfile} options={{ title: 'Perfil Usuario' }} />
      </Drawer.Navigator>
      {/* Assuming you have a Footer component */}
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});