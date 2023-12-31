// ImageUploadField.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUploadField = ({ onImageSelect, image }) => {
  const handleImageUpload = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      if (response.uri) {
        onImageSelect(response);
      }
    });
  };

  return (
    <TouchableOpacity onPress={handleImageUpload}>
      <View>
        <Text>Upload Image</Text>
        {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      </View>
    </TouchableOpacity>
  );
};

export default ImageUploadField;
