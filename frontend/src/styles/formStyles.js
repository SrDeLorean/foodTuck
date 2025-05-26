//src/styles/formStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const formStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
    maxWidth: 600,
    alignSelf: 'center',
    width: windowWidth > 600 ? 600 : '100%',  // Limita ancho maximo para pantallas grandes
  },

  formTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
  },

  formButtonContainer: {
    marginTop: 24,
  },
});
