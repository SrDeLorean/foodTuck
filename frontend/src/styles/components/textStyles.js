// src/styles/components/textStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import spacing from '../base/spacing';

export default StyleSheet.create({
  header: {
    fontSize: fonts.sizes.large,
    fontWeight: fonts.weights.bold,
    marginBottom: spacing.xl,
    color: colors.textDark,
    alignSelf: 'center',
  },
  title: {
    fontSize: fonts.sizes.large,
    fontWeight: fonts.weights.bold,
    marginBottom: spacing.xxl,
    alignSelf: 'center',
    color: colors.textDark,
  },
  slogan: {
    fontSize: fonts.sizes.base,
    color: colors.textDark,
    fontWeight: fonts.weights.semiBold,
    textAlign: 'center',
  },
  largeSlogan: {
    fontSize: fonts.sizes.large,
    color: colors.textPrimary,
    fontWeight: fonts.weights.semiBold,
    textAlign: 'center',
    marginBottom: 40,
  },
  showPasswordText: {
    color: colors.primaryBlue,
    paddingHorizontal: spacing.sm,
    fontWeight: fonts.weights.semiBold,
  },
  eyeText: {
    color: colors.primaryBlue,
    fontWeight: fonts.weights.semiBold,
  },
  textButton: {
    color: colors.primaryBlue,
    textAlign: 'right',
    marginBottom: spacing.lg,
  },
  text: {
    fontSize: fonts.sizes.base,
    color: colors.textLight,
  },
  registerLink: {
    fontWeight: fonts.weights.bold,
    color: colors.primaryBlue,
  },
  loginText: {
    fontSize: fonts.sizes.base,
    color: colors.textMedium,
  },
  loginLink: {
    fontSize: fonts.sizes.base,
    color: colors.primaryBlue,
    textDecorationLine: 'underline',
  },
  checkboxText: {
    flex: 1,
    fontSize: fonts.sizes.small,
    color: colors.textMedium,
  },
  link: {
    color: colors.primaryBlue,
    textDecorationLine: 'underline',
  },
  instructions: {
    fontSize: fonts.sizes.base,
    color: colors.textMedium,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },
});
