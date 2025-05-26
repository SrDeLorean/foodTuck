// src/components/CardScrollView.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

export default function CardScrollView({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0', // Fondo gris
    padding: 12,
  },
  card: {
    backgroundColor: '#fff', // Carta blanca
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4, // Para Android
  },
});