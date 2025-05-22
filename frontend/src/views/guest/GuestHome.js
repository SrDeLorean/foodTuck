// src/views/guest/GuestHome.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GuestHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Explora la app. Inicia sesión o regístrate desde el menú.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', color: '#555' },
});
