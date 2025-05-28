// src/styles/components/cardStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import borders from '../base/borders';
import shadows from '../base/shadows';
import spacing from '../base/spacing';
import fonts from '../base/fonts';

const cardStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: borders.radius.base,
    padding: spacing.md,
    marginVertical: spacing.sm,
    shadowColor: shadows.light.shadowColor,
    shadowOpacity: shadows.light.shadowOpacity,
    shadowRadius: shadows.light.shadowRadius,
    elevation: shadows.light.elevation,
    borderWidth: borders.width.thin,
    borderColor: colors.borderLight,
  },
  cardTitle: {
    fontSize: fonts.sizes.large,
    fontFamily: fonts.families.semiBold,
    color: colors.textDark,
    marginBottom: spacing.sm,
  },
  cardSubtitle: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.families.regular,
    color: colors.textMedium,
    marginBottom: spacing.sm,
  },
  cardContent: {
    fontSize: fonts.sizes.base,
    fontFamily: fonts.families.regular,
    color: colors.textLight,
  },
  cardButton: {
    marginTop: spacing.md,
    backgroundColor: colors.primaryGreen,
    paddingVertical: spacing.sm,
    borderRadius: borders.radius.base,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: shadows.light.shadowColor,
    shadowOpacity: shadows.light.shadowOpacity,
    shadowRadius: shadows.light.shadowRadius,
    elevation: shadows.light.elevation,
  },
  cardButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.families.semiBold,
  },
});

export default cardStyles;