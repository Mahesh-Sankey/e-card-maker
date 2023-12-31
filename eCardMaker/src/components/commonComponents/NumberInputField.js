// NumberInputField.js
import React from 'react';
import { Input } from 'react-native-elements';

const NumberInputField = ({ label, value, onChangeText, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      keyboardType="numeric"
      label={label}
    />
  );
};

export default NumberInputField;