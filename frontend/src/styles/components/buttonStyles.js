//src/styles/components/buttons.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import metrics from '../base/metrics';
import fonts from '../base/fonts';
import spacing from '../base/spacing';

export default StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primaryGreen,
    borderRadius: metrics.borderRadius,
    paddingVertical: spacing.md, // reemplaza metrics.buttonVerticalPadding si quieres
    alignItems: 'center',
    marginBottom: spacing.lg,     // reemplaza 20
    width: '100%',
    maxWidth: metrics.maxWidth,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.medium,
    fontWeight: fonts.weights.bold,
  },
  googleButton: {
    flexDirection: 'row',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: metrics.borderRadius,
    paddingVertical: spacing.sm, // reemplaza 12
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: metrics.maxWidth,
    backgroundColor: colors.white,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  googleButtonText: {
    marginLeft: 10,
    fontSize: fonts.sizes.base,
    color: colors.googleRed,
  },
});
