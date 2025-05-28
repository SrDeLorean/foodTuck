//src/styles/components/formStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import metrics from '../base/metrics';
import spacing from '../base/spacing';
import fonts from '../base/fonts';
import borders from '../base/borders';
import shadows from '../base/shadows';

export const formStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: metrics.basePadding * 1.1, // un poco menos
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: borders.radius.lg,
    padding: spacing.sm, // un poco menos padding para que respire
    ...shadows.medium,
    marginVertical: spacing.sm,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    borderBottomWidth: borders.width.thin,
    borderBottomColor: colors.borderLight,
    paddingBottom: spacing.xs,
  },
  detailLabel: {
    fontWeight: fonts.weights.semiBold,
    fontSize: fonts.sizes.base + 1,
    color: colors.textDark,
    fontFamily: fonts.families.semiBold,
    letterSpacing: fonts.letterSpacings.normal,
    flexShrink: 1,
  },
  detailValue: {
    fontSize: fonts.sizes.base + 2,
    color: colors.textMedium,
    fontFamily: fonts.families.regular,
    flexShrink: 1,
    textAlign: 'right',
  },
  button: {
    marginTop: spacing.md,  // un poco menos para que quede más compacto
    backgroundColor: colors.primaryGreen,
    paddingVertical: spacing.sm + 2, // compacto pero cómodo
    paddingHorizontal: spacing.lg, // para que no sea tan ancho visualmente
    borderRadius: borders.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primaryGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: colors.white,
    fontWeight: fonts.weights.bold,
    fontSize: fonts.sizes.medium + 1,
    fontFamily: fonts.families.bold,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  errorText: {
    color: colors.error,
    marginTop: spacing.xs,
    fontSize: fonts.sizes.small,
    fontFamily: fonts.families.regular,
    fontStyle: 'italic',
  },
});
