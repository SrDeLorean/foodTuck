import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/authStyles';

export default function RecoverPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const { recoverPassword } = useContext(AuthContext);

  const handleSendLink = async () => {
    if (!email) {
      alert('Por favor, ingresa tu correo electrónico');
      return;
    }

    try {
      await recoverPassword(email);
      alert('Se ha enviado un enlace para recuperar la contraseña a tu correo.');
      navigation.navigate('LoginScreen');
    } catch (e) {
      alert(e.message || 'Error al enviar enlace');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <Text style={styles.header}>Recuperar Contraseña</Text>
      <Text style={styles.instructions}>
        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.primaryButton} onPress={handleSendLink}>
        <Text style={styles.primaryButtonText}>Enviar Enlace</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
