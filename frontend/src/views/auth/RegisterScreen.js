import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Alert, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Checkbox from 'expo-checkbox'; // Assuming you have expo-checkbox installed or use a similar library

export default function RegisterScreen() {
  const [fullName, setFullName] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { register } = useContext(AuthContext);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }
    if (!agreeTerms) {
      Alert.alert('Error', 'Debe aceptar los Términos y Condiciones.');
      return;
    }
    // Basic validation - add more as needed
    if (!fullName || !rut || !email || !password) {
        Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
        return;
    }

    try {
      // You'll need to update your register function in AuthContext to handle all new fields
      await register({ fullName, rut, email, password, phone });
      Alert.alert('Éxito', 'Registro exitoso.');
    } catch (e) {
      Alert.alert('Error', e.message || 'Error al registrarse');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Únete a la Aventura</Text>
      <Text style={styles.subtitle}>Descubre sabores sobre ruedas</Text>

      {/* Nombre Completo */}
      <View style={styles.inputContainer}>
        {/* Placeholder for Full Name Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Nombre Completo"
          value={fullName}
          onChangeText={setFullName}
          style={styles.inputWithIcon}
        />
      </View>

      {/* RUT */}
      <View style={styles.inputContainer}>
        {/* Placeholder for RUT Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="RUT"
          value={rut}
          onChangeText={setRut}
          style={styles.inputWithIcon}
          keyboardType="numbers-and-punctuation" // Adjust keyboard type
        />
      </View>

      {/* Correo Electrónico */}
      <View style={styles.inputContainer}>
        {/* Placeholder for Email Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Correo Electrónico"
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.inputWithIcon}
        />
      </View>

      {/* Contraseña */}
      <View style={styles.inputContainer}>
        {/* Placeholder for Password Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputWithIcon}
        />
      </View>

      {/* Confirmar Contraseña */}
      <View style={styles.inputContainer}>
        {/* Placeholder for Confirm Password Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.inputWithIcon}
        />
      </View>

      {/* Teléfono (opcional) */}
      <View style={styles.inputContainer}>
        {/* Placeholder for Phone Icon */}
        <View style={styles.iconPlaceholder} />
        <TextInput
          placeholder="Teléfono (opcional)"
          value={phone}
          onChangeText={setPhone}
          style={styles.inputWithIcon}
          keyboardType="phone-pad" // Adjust keyboard type
        />
      </View>

      {/* Términos y Condiciones Checkbox */}
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={agreeTerms}
          onValueChange={setAgreeTerms}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>
          Acepto los{' '}
          <Text
            style={styles.termsLink}
            onPress={() => {
              // Lógica para abrir el enlace a los Términos y Condiciones
              console.log('Abrir Términos y Condiciones');
            }}
          >
            Términos y Condiciones
          </Text>{' '}
          y{' '}
          <Text
            style={styles.termsLink}
            onPress={() => {
              // Lógica para abrir el enlace a la Política de Privacidad
              console.log('Abrir Política de Privacidad');
            }}
          >
            Política de Privacidad
          </Text>
        </Text>
      </View>

      {/* Botón Registrarse */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={handleRegister}
      >
        <Text style={styles.primaryButtonText}>Registrarse</Text>
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

      {/* Texto "¿Ya tienes cuenta?" */}
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.loginLinkText}>¿Ya tienes cuenta?</Text>
      </TouchableOpacity>

 

    </ScrollView>
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