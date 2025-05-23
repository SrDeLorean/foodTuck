import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function FormInput({ value, onChangeText, placeholder, multiline = false, keyboardType = 'default', style = {} }) {
  return (
    <TextInput
      style={[styles.input, multiline && styles.multiline, style]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  multiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});