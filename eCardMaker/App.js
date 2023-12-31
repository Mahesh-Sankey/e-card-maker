import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainPage } from './src/components/screens/MainPage.js';
import { MuttonPage } from './src/components/screens/MuttonPage.js';
import { CreateTemplate } from './src/components/screens/CreateTemplate.js';
import { VegPage } from './src/components/screens/VegPage.js';
import { ChickenPage } from './src/components/screens/ChickenPage.js';
import { FishPage } from './src/components/screens/FishPage.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        //--this style is for all headers
        screenOptions={{
          title: 'Overview', //--header title text
          headerStyle: {
            backgroundColor: 'orange', //--header background color
          },
          headerTitleStyle: {
            fontSize: 20, //--header title text font size
          },
          headerTintColor: 'yellow', //--header title text color
        }}>
        <Stack.Screen //--this style is for specific header
          name="MainPage"
          component={MainPage}
          options={{
            headerLeft: () => <></>,
            // headerRight: () => <HeaderFile />, //button
            title: 'e-Card Home', //--header title text
            headerStyle: {
              backgroundColor: '#ff4500', //--header background color
            },
            headerTitleStyle: {
              fontSize: 20, //--header title text font size
            },
            headerTintColor: 'black', //--header title text color
          }}
        />
        <Stack.Screen name="CreateTemplatePage" component={CreateTemplate} />
        <Stack.Screen name="MuttonPage" component={MuttonPage} />
        <Stack.Screen name="EditVegPage" component={VegPage} />
        <Stack.Screen name="ChickenPage" component={ChickenPage} />
        <Stack.Screen name="FishPage" component={FishPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
