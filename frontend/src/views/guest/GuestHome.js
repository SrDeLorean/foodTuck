import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import buttons from '../../styles/components/buttonStyles'; // estilos botones
import colors from '../../styles/base/colors'; // colores base
import textStyles from '../../styles/components/textStyles'; // estilos textos

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: colors.white,
    }}>
      <Image
        source={require('../../assets/foodtruck-logo.png')}
        style={{ width: 150, height: 150, marginBottom: 30 }}
        resizeMode="contain"
      />
      <Text style={textStyles.largeSlogan}>
        Descubre sabores sobre ruedas
      </Text>

      <TouchableOpacity
        style={buttons.primaryButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={buttons.primaryButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttons.secondaryButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={buttons.secondaryButtonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={buttons.googleButton}
        onPress={() => {/* lógica para login con Google */}}
      >
        <Image
          source={require('../../assets/google-icon.png')}
          style={buttons.googleIcon}
        />
        <Text style={buttons.googleButtonText}>Continuar con Google</Text>
      </TouchableOpacity>
    </View>
  );
}
