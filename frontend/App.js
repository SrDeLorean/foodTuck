//App.js
import React from 'react';
import { AuthProvider } from './src/context/AuthContext'; // Ajusta la ruta si es necesario
import AppNavigator from './src/navigation/AppNavigator'; // Tu navegador principal
import Toast from 'react-native-toast-message';

    export default function App() {
      return (
        <AuthProvider>
          <AppNavigator />
          <Toast />
        </AuthProvider>
        
      );
    }