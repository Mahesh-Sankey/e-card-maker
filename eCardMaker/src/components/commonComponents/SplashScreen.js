// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay (e.g., fetching data, loading resources, etc.)
    const delay = setTimeout(() => {
      // Navigate to the next screen (MainPage)
      navigation.replace('MainPage');
    }, 2500); // Adjust the duration as needed

    // Cleanup the timeout on component unmount
    return () => clearTimeout(delay);
  }, [navigation]);

  
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* Add your splash screen content */}
      <Image source={require('../asset/spashscreen.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;