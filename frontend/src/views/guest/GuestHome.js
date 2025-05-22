// src/views/guest/GuestHome.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function GuestHome() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/2013164437/es/vector/plantilla-de-dise%C3%B1o-de-logotipo-de-festival-de-camiones-de-comida.jpg?s=612x612&w=0&k=20&c=KcTkh6mBNnk2x90qFdzi5IVCm_yaTChmBs7CGyghxhM=' }} // Placeholder image URL
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Encuentra tu próximo antojo!</Text>
      <Text style={styles.subtitle}>Descubre y localiza los mejores foodtrucks cerca de ti.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5f5f5' }, // Added a light background
  image: { width: '100%', height: 200, marginBottom: 20 }, // Style for the image
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#333' }, // Larger and darker title
  subtitle: { fontSize: 18, textAlign: 'center', color: '#666' }, // Slightly larger and darker subtitle
});
