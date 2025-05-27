//src/styles/components/checkboxStyles.js

import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';

export default StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    maxWidth: metrics.maxWidth,
    width: '100%',
  },
  checkbox: {
    marginRight: 8,
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
