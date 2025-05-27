//src/styles/base/logo.js
import { StyleSheet } from 'react-native';
import metrics from '../base/metrics';

export default StyleSheet.create({
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
});