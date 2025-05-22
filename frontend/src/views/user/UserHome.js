import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});