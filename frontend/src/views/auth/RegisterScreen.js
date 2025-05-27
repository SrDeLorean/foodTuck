import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, ScrollView, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/authStyles';

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    if (!fullName || !rut || !email || !password) {
      Alert.alert('Error', 'Por favor, complete todos los campos obligatorios.');
      return;
    }

    try {
      await register({ fullName, rut, email, password, phone });
      Alert.alert('Éxito', 'Registro exitoso.');
    } catch (e) {
      Alert.alert('Error', e.message || 'Error al registrarse');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <Text style={styles.header}>Crear Cuenta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nombre Completo"
          value={fullName}
          onChangeText={setFullName}
          style={styles.input}
          autoCapitalize="words"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="RUT"
          value={rut}
          onChangeText={setRut}
          style={styles.input}
          keyboardType="numbers-and-punctuation"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeToggle}>
          <Text style={styles.eyeText}>{showPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeToggle}>
          <Text style={styles.eyeText}>{showConfirmPassword ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Teléfono (opcional)"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={agreeTerms}
          onValueChange={setAgreeTerms}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxText}>
          Acepto los{' '}
          <Text style={styles.link} onPress={() => console.log('Abrir Términos y Condiciones')}>
            Términos y Condiciones
          </Text>{' '}
          y{' '}
          <Text style={styles.link} onPress={() => console.log('Abrir Política de Privacidad')}>
            Política de Privacidad
          </Text>
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleRegister}>
        <Text style={styles.primaryButtonText}>Registrarse</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>O</Text>
        <View style={styles.separatorLine} />
      </View>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => console.log('Registro con Google')}
      >
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Registrarse con Google</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>¿Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.loginLink}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
