import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
    } catch (e) {
      Alert.alert('Error', e.message || 'Error al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de Nuevo</Text>
      <Text style={styles.subtitle}>Descubre sabores sobre ruedas</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Email"
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
          style={styles.inputWithIcon}
        />
      </View>
      {/* Password Input */}
      <View style={styles.inputContainer}>
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputWithIcon}
        />

      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity
        onPress={() => {}}
      >
        <Text style={styles.termsLink}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      
      {/* Primary Login Button */}
      <TouchableOpacity 
        style={styles.primaryButton}
        onPress={handleLogin}>

        <Text style={styles.primaryButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

           {/* Botón Registrarse con Google */}
           <TouchableOpacity
        style={styles.googleButton}
        onPress={() => {
          // Lógica para registrarse con Google
          console.log('Botón "Regístrate con Google" presionado');
        }}
      >
        <View style={styles.iconPlaceholder} />{/* Placeholder para el ícono */}
        <Text style={styles.googleButtonText}>Regístrate con Google</Text>
      </TouchableOpacity>

      {/* Link to Register */}
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text style={styles.registerLinkText}>¿No tienes cuenta?</Text>
      </TouchableOpacity>

    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Allow the container to grow
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center', // Center content horizontally
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5, // Reduced bottom margin to be closer to subtitle
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555', // Softer color for subtitle
    marginBottom: 20, // Margin below subtitle
    textAlign: 'center', // Center the subtitle text
  },
  // Estilos para campos de entrada con íconos
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 350, // Limit max width for form elements
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
    marginRight: 10,
    // Placeholder background for visual verification
    // backgroundColor: 'lightblue',
  },
  inputWithIcon: {
    flex: 1,
    height: 45, // Slightly taller input
    paddingVertical: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#333',
  },
  // Estilos para el checkbox de Términos y Condiciones
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    maxWidth: 350,
    paddingHorizontal: 5, // Add some horizontal padding
  },
  checkbox: {
    marginRight: 8,
  },
  checkboxLabel: {
    flex: 1, // Allow the text to wrap
    fontSize: 14,
    color: '#555',
  },
  termsLink: {
    color: '#007bff', // Color azul para enlaces
    textDecorationLine: 'underline', // Subrayar
  },
  // Estilos para el botón primario "Registrarse"
  primaryButton: {
    backgroundColor: '#28a745', // Color verde primario
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10, // Space above the button
    width: '100%',
    maxWidth: 350,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Estilos para el texto "¿Ya tienes cuenta?"
  loginLinkText: { // Renamed from loginPrompt for clarity as it's now a link
    marginTop: 20, // Space above the text
    fontSize: 16,
    color: '#007bff', // Blue color for link
    textAlign: 'center',
  },
  // Estilos para el botón "Registrarse con Google" (similar a Login)
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    width: '100%',
    maxWidth: 350,
  },
  googleButtonText: {
    color: '#5f6368',
    fontSize: 16,
    marginLeft: 10,
  },
  registerLinkText: { // Style for the "Don't have an account?" link
    marginTop: 20,
    fontSize: 16,
    color: '#007bff', // Blue color for link
    textAlign: 'center',
  },

  // Note: styles.input and styles.buttonContainer from original code are kept but not used in the new JSX structure
  input: { // This style is likely unused now
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    borderColor: '#cccccc', // Lighter grey border
    borderRadius: 5, // More rounded corners
    paddingVertical: 10, // Add vertical padding
    width: '100%', // Make input take full width
    maxWidth: 300, // Limit max width, but the new inputContainer has its own max width
  },
  buttonContainer: {
    marginTop: 20, // Add top margin to the button
    width: '100%', // Make button container take full width
    maxWidth: 300, // Limit max width
  },
});

