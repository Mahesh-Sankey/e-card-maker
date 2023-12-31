// FileUploadComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FileUploadComponent = ({ onFileSelect }) => {
  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // Pass the selected file to the parent component
      onFileSelect(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User canceled the picker
      } else {
        throw err;
      }
    }
  };

  return (
    <TouchableOpacity onPress={handleFileUpload}>
      <View>
        <Text>Upload File</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FileUploadComponent;