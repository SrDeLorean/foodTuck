// src/styles/components/layoutStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import metrics from '../base/metrics';
import fonts from '../base/fonts';

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
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: metrics.logoSize,
    height: metrics.logoSize,
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: metrics.maxWidth,
    width: '100%',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 25,
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
    marginHorizontal: 10,
    fontSize: fonts.sizes.base,
    color: colors.textMedium,
    fontWeight: fonts.weights.bold,
  },
  checkbox: {
    marginRight: 8,
  },
});
