// frontend/src/components/Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>by Proyecto Mapache - 2025 &lt;3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: '#e0e0e0', // Light gray border at the top
    backgroundColor: '#f9f9f9', // Light background color
    paddingHorizontal: 10, // Add horizontal padding for better spacing

    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },

});

export default Footer;