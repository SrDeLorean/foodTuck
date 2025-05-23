// src/navigation/CustomDrawerContent.js
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AuthContext } from '../context/AuthContext';

export default function CustomDrawerContent(props) {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>
        <DrawerItemList {...props} />
        <View style={styles.bottom}>
          {!user ? (
            <>
              <DrawerItem
                label="Iniciar Sesión"
                onPress={() => props.navigation.navigate('Login')}
              />
              <DrawerItem
                label="Registrarse"
                onPress={() => props.navigation.navigate('Register')}
              />
            </>
          ) : (
            <DrawerItem
              label="Cerrar Sesión"
              onPress={() => {
                logout();
                // No navigation here, el cambio de user en AuthContext redirige automáticamente
              }}
            />
          )}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});