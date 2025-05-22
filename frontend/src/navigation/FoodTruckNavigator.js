import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';

import CustomDrawerContent from './CustomDrawerContent';
import Footer from '../components/Footer';
import FoodTruckHome from '../views/foodtruck/FoodTruckHome';

const Drawer = createDrawerNavigator();
export default function FoodTruckNavigator() {
  return (
    <View style={styles.container}>
      <Drawer.Navigator initialRouteName="FoodTruckHome" drawerContent={(props) => <CustomDrawerContent {...props} foodtruck={true} />}>
        <Drawer.Screen name="FoodTruckHome" component={FoodTruckHomePlaceholder} options={{ title: 'Inicio FoodTruck' }} />
      </Drawer.Navigator>
 <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
