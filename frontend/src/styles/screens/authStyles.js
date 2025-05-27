// src/styles/screens/authStyles.js
import { StyleSheet } from 'react-native';
import layoutStyles from '../components/layoutStyles';
import textStyles from '../components/textStyles';
import buttonStyles from '../components/buttonStyles';
import inputStyles from '../components/inputStyles';

// Opcional: si quieres combinar algunos estilos, puedes exportar todo como un solo objeto
export default {
  ...layoutStyles,
  ...textStyles,
  ...buttonStyles,
  ...inputStyles,
};