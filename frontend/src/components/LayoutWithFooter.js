import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function LayoutWithFooter({ children }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Mi App - Todos los derechos reservados</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  footer: {
    height: 50,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#555',
    fontSize: 12,
  },
});