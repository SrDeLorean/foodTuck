//src/styles/buttonStyles.js
import { StyleSheet } from 'react-native';

export const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    minWidth: 120,
  },

  primary: {
    backgroundColor: '#007bff',
  },

  secondary: {
    backgroundColor: '#6c757d',
  },

  info: {
    backgroundColor: '#17a2b8',
  },

  danger: {
    backgroundColor: '#dc3545',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
