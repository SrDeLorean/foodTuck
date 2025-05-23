import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from './responsive';

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(20),
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: responsiveWidth(120),
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: responsiveFontSize(16),
  },
  primary: {
    backgroundColor: '#007bff',
  },
  secondary: {
    backgroundColor: '#6c757d',
  },
  success: {
    backgroundColor: '#28a745',
  },
  danger: {
    backgroundColor: '#dc3545',
  },
  warning: {
    backgroundColor: '#ffc107',
  },
  info: {
    backgroundColor: '#17a2b8',
  },
});
