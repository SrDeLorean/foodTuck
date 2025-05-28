// src/styles/components/inputStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';
import spacing from '../base/spacing';
import borders from '../base/borders';

export default StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: borders.width.thin,
    borderColor: colors.borderLight,
    borderRadius: borders.radius.base,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.white,
    width: '100%',
    maxWidth: metrics.maxWidth,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: metrics.inputHeight,
    fontSize: fonts.sizes.base,
    color: colors.textDark,
    fontFamily: fonts.families.regular,
    paddingVertical: spacing.sm,
  },
  eyeToggle: {
    paddingHorizontal: spacing.sm,
  },
  showPasswordText: {
    color: colors.primaryGreen,
    paddingHorizontal: spacing.sm,
    fontWeight: fonts.weights.semiBold,
    fontFamily: fonts.families.semiBold,
  },
  inputError: {
    borderColor: colors.error,
    backgroundColor: '#fff5f5',
  },
});
