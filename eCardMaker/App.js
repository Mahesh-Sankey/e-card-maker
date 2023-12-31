import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/components/screens/MainPage.js';
import { MuttonPage } from './src/components/screens/MuttonPage.js';
import { CreateTemplate } from './src/components/screens/CreateTemplate.js';
import { VegPage } from './src/components/screens/VegPage.js';
import { ChickenPage } from './src/components/screens/ChickenPage.js';
import { FishPage } from './src/components/screens/FishPage.js';
import SplashScreen from './src/components/commonComponents/SplashScreen.js';

const Stack = createNativeStackNavigator();

const CustomMainPageHeader = () => {
  return (
    <ImageBackground
      source={require('./src/components/asset/headerTexture.jpg')} // Replace with the path to your image
      style={styles.headerContainer}
      imageStyle={styles.backgroundImage}>
      <Text style={styles.headerText}>Hello, Welcome in kitchen..!</Text>
    </ImageBackground>
  );
};

const App = () => {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer>
        <Stack.Navigator

          initialRouteName="SplashScreen"

          screenOptions={{
            title: 'Overview',
            headerShown: true,
            headerStyle: {
              backgroundColor: '#51abcb',
            },
            headerTitleStyle: {
              fontSize: 18,
            },
            headerTintColor: 'black',
          }}>

          <Stack.Screen options={{
            title: '',
            headerShown: false,
          }} name="SplashScreen" component={SplashScreen} />

          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              headerLeft: () => <></>,
              title: '',
              headerTransparent: false, // Make the header transparent
              header: () => <CustomMainPageHeader />,
            }}
          />
          <Stack.Screen name="CreateTemplatePage" component={CreateTemplate} />
          <Stack.Screen name="MuttonPage" component={MuttonPage} />
          <Stack.Screen name="EditVegPage" component={VegPage} />
          <Stack.Screen name="ChickenPage" component={ChickenPage} />
          <Stack.Screen name="FishPage" component={FishPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    padding: 12,
    elevation: 7,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    overflow: 'hidden', // Clip the corners of the background image
  },
  backgroundImage: {
    resizeMode: 'cover', // Cover the entire background
    flex: 1,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

export default App;
