//src/styles/components/checkboxStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';
import spacing from '../base/spacing';

export default StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
    maxWidth: metrics.maxWidth,
    width: '100%',
  },
  checkbox: {
    marginRight: spacing.sm,
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
});