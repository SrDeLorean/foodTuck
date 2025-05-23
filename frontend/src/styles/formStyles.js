import { StyleSheet } from 'react-native';
import { responsiveWidth, responsiveHeight } from './responsive';

export const formStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(12),
    backgroundColor: '#f8f9fa',
  },
  formGroup: {
    marginBottom: responsiveHeight(16),
  },
  buttonContainer: {
    marginTop: responsiveHeight(20),
    alignItems: 'center',
  },
});
