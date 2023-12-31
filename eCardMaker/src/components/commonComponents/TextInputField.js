// TextInputField.js
import React from 'react';
import { Input } from 'react-native-elements';

const TextInputField = ({ label, value, onChangeText, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      label={label}
    />
  );
};

export default TextInputField;