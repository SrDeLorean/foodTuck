//src/styles/components/commonStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';
import spacing from '../base/spacing';

export default StyleSheet.create({
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: colors.textDark,
  },
  buttonPrimary: {
    backgroundColor: colors.primaryGreen,
    borderRadius: metrics.borderRadius,
    paddingVertical: metrics.buttonVerticalPadding,
    alignItems: 'center',
  },
  buttonPrimaryText: {
    color: colors.white,
    fontSize: fonts.sizes.medium,
    fontWeight: fonts.weights.bold,
  },
});