//src/styles/components/buttonStyles.js
import colors from '../base/colors';
import fonts from '../base/fonts';
import metrics from '../base/metrics';

const buttonStyles = {
  primaryButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.families.semiBold,
  },
  secondaryButton: {
    backgroundColor: colors.white,
    borderColor: colors.primaryGreen,
    borderWidth: 1,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  secondaryButtonText: {
    color: colors.primaryGreen,
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.families.semiBold,
  },
  googleButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  googleButtonText: {
    color: colors.textPrimary,
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.families.semiBold,
    marginLeft: 8,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },

  // --- Nuevos estilos agregados ---

  disabledButton: {
    backgroundColor: colors.grayLight,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  disabledButtonText: {
    color: colors.grayDark,
    fontSize: fonts.sizes.medium,
    fontFamily: fonts.families.semiBold,
  },

  shadowButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, // para Android
  },

  roundedButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius * 2, // más redondeado
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  smallButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding / 2,
    paddingHorizontal: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  smallButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.small,
    fontFamily: fonts.families.semiBold,
  },

  largeButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding * 1.5,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  largeButtonText: {
    color: colors.white,
    fontSize: fonts.sizes.large,
    fontFamily: fonts.families.semiBold,
  },

  loadingButton: {
    backgroundColor: colors.primaryGreen,
    paddingVertical: metrics.buttonVerticalPadding,
    borderRadius: metrics.borderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    marginBottom: 12,
  },
};

export default buttonStyles;