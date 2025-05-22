import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FoodTruckHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio FoodTruck</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});
