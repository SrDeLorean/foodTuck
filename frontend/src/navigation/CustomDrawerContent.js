// src/navigation/CustomDrawerContent.js
import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function CustomDrawerContent(props) {
  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
        <DrawerItemList {...props} />
        <View style={styles.bottom}>
          {!user ? (
            <>
              <DrawerItem
                label="Iniciar Sesión"
                onPress={() => navigation.navigate('Login')}
              />
              <DrawerItem
                label="Registrarse"
                onPress={() => navigation.navigate('Register')}
              />
            </>
          ) : (
            <DrawerItem label="Cerrar Sesión" onPress={logout} />
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
