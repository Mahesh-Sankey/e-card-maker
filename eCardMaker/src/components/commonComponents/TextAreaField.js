// TextAreaField.js
import React from 'react';
import { Input } from 'react-native-elements';

const TextAreaField = ({ label, value, onChangeText, placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      multiline
      numberOfLines={4}
      label={label}
    />
  );
};

export default TextAreaField;