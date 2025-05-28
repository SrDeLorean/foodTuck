//src/styles/components/tableStyles.js
import { StyleSheet } from 'react-native';
import colors from '../base/colors';
import fonts from '../base/fonts';
import spacing from '../base/spacing';
import borders from '../base/borders';
import shadows from '../base/shadows';

export const tableStyles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.white,
  },
  addButton: {
    backgroundColor: colors.primaryBlue,
    paddingVertical: spacing.md,
    borderRadius: borders.radius.base,
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.medium,
  },
  addButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.large,
    fontWeight: fonts.weights.semiBold,
  },
  searchInput: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borders.radius.base,
    fontSize: fonts.sizes.medium,
    marginBottom: spacing.md,
    borderWidth: borders.width.thin,
    borderColor: colors.borderLight,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBlue,
    paddingVertical: spacing.sm,
    borderRadius: borders.radius.base,
    marginBottom: spacing.sm,
  },
  columnHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderText: {
    color: colors.white,
    fontWeight: fonts.weights.bold,
    fontSize: fonts.sizes.small,
  },
  idColumn: {
    flex: 0.7,
  },
  nameColumn: {
    flex: 2.5,
    alignItems: 'flex-start',
    paddingLeft: spacing.md,
  },
  priceColumn: {
    flex: 1,
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: borders.radius.base,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginVertical: spacing.xs,
    alignItems: 'center',
    ...shadows.soft,
  },
  tableCell: {
    color: colors.textDark,
    fontSize: fonts.sizes.medium,
  },
  idCell: {
    flex: 0.7,
    textAlign: 'center',
  },
  nameCell: {
    flex: 2.5,
    paddingLeft: spacing.md,
    textAlign: 'left',
  },
  priceCell: {
    flex: 1,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  emptyText: {
    fontSize: fonts.sizes.medium,
    color: colors.textMedium,
    marginBottom: spacing.md,
  },
  errorText: {
    fontSize: fonts.sizes.medium,
    color: colors.error,
  },
  paginationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
    paddingHorizontal: spacing.sm,
  },
  pagesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paginationButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginHorizontal: spacing.xs,
    backgroundColor: colors.primaryBlue,
    borderRadius: borders.radius.sm,
  },
  paginationButtonDisabled: {
    backgroundColor: '#a0c4ff',
  },
  paginationButtonText: {
    color: colors.white,
    fontWeight: fonts.weights.bold,
    fontSize: fonts.sizes.large,
  },
  paginationPageNumber: {
    marginHorizontal: spacing.xs,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.md,
    borderRadius: borders.radius.sm,
    backgroundColor: '#eee',
  },
  paginationPageNumberActive: {
    backgroundColor: colors.primaryBlue,
  },
  paginationPageNumberText: {
    color: colors.textDark,
    fontWeight: fonts.weights.semiBold,
  },
  paginationPageNumberTextActive: {
    color: colors.white,
  },
  paginationDots: {
    marginHorizontal: spacing.sm,
    fontSize: fonts.sizes.large,
    fontWeight: fonts.weights.bold,
    color: colors.textMedium,
  },
  paginationFecha: {
    marginLeft: 'auto',
    fontSize: fonts.sizes.small,
    fontWeight: fonts.weights.semiBold,
    color: colors.textMedium,
  },
  itemsPerPageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
    justifyContent: 'center',
    gap: 4, // si usas react-native >= 0.71
  },
  itemsPerPageLabel: {
    fontSize: fonts.sizes.small,
    color: colors.textDark,
    marginRight: spacing.xs,
  },
  picker: {
    height: 32,
    width: 100,
    color: colors.textDark,
    backgroundColor: '#f5f5f5',
    borderRadius: borders.radius.sm,
  },
});