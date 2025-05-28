// src/components/CardScrollView.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import colors from '../styles/base/colors';
import spacing from '../styles/base/spacing';
import metrics from '../styles/base/metrics';
import borders from '../styles/base/borders';
import shadows from '../styles/base/shadows';

export default function CardScrollView({ children }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: colors.backgroundLight,
    padding: metrics.basePadding,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: borders.radius.base,
    padding: spacing.lg,
    ...shadows.light,
  },
});