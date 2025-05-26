//src/styles/formInputStyles.js
import { StyleSheet } from 'react-native';

export const formInputStyles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },

  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#333',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#444',
  },

  errorText: {
    color: '#dc3545',
    marginTop: 4,
    fontSize: 13,
  },
});
