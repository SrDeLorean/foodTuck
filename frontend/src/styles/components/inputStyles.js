//src/styles/components/inputs.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: metrics.borderRadius,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: colors.white,
    width: '100%',
    maxWidth: metrics.maxWidth,
  },
  input: {
    flex: 1,
    height: metrics.inputHeight,
    fontSize: fonts.sizes.base,
    color: colors.textDark,
  },
  eyeToggle: {
    paddingHorizontal: 8,
  },
  showPasswordText: {
    color: colors.primaryBlue,
    paddingHorizontal: 8,
    fontWeight: fonts.weights.semiBold,
  },
  inputError: {
    borderColor: '#dc3545',
    backgroundColor: '#fff5f5',
  },
});