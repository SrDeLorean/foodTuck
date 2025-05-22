import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';

import CustomDrawerContent from './CustomDrawerContent';
import Footer from '../components/Footer';
import ManagerHome from '../views/manager/ManagerHome';

const Drawer = createDrawerNavigator();

export default function ManagerNavigator() {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        initialRouteName="ManagerHome"
        drawerContent={(props) => <CustomDrawerContent {...props} manager={true} />}
      >
        <Drawer.Screen name="ManagerHome" component={ManagerHome} options={{ title: 'Inicio Manager' }} />
      </Drawer.Navigator>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
