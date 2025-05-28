// src/styles/components/layoutStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import metrics from '../base/metrics';
import fonts from '../base/fonts';
import spacing from '../base/spacing';

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScroll: {
    flexGrow: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
    marginTop: spacing.lg,
  },
  logo: {
    width: metrics.logoSize,
    height: metrics.logoSize,
    marginBottom: spacing.sm,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    maxWidth: metrics.maxWidth,
    width: '100%',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    maxWidth: metrics.maxWidth,
    marginVertical: metrics.separatorMarginVertical,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.borderLight,
  },
  separatorText: {
    marginHorizontal: spacing.base,
    fontSize: fonts.sizes.base,
    color: colors.textMedium,
    fontWeight: fonts.weights.bold,
  },
  checkbox: {
    marginRight: spacing.sm,
  },
});
