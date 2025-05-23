import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from './responsive';

export const formInputStyles = StyleSheet.create({
  input: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: responsiveWidth(12),
    paddingVertical: responsiveHeight(10),
    borderRadius: 8,
    fontSize: responsiveFontSize(14),
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginVertical: responsiveHeight(6),
  },
  label: {
    fontSize: responsiveFontSize(14),
    fontWeight: '600',
    marginBottom: responsiveHeight(4),
    color: '#495057',
  },
  errorText: {
    color: '#dc3545',
    fontSize: responsiveFontSize(12),
    marginTop: responsiveHeight(2),
  },
});
