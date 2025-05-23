// src/styles/responsive.js
import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 667;

const MAX_WEB_WIDTH = 700;  // ajustado para tabla

export function responsiveWidth(size) {
  let baseWidth = SCREEN_WIDTH;
  if (Platform.OS === 'web' && SCREEN_WIDTH > MAX_WEB_WIDTH) {
    baseWidth = MAX_WEB_WIDTH;
  }
  return Math.round((baseWidth / guidelineBaseWidth) * size);
}

export function responsiveHeight(size) {
  return Math.round((SCREEN_HEIGHT / guidelineBaseHeight) * size);
}

export function responsiveFontSize(size) {
  if (Platform.OS === 'web') {
    return size * 1; // tamaño base, sin reducir para web
  }
  const scale = SCREEN_WIDTH / guidelineBaseWidth;
  const newSize = size * scale;
  return Platform.OS === 'ios' ? Math.round(newSize) : Math.round(newSize) - 2;
}
