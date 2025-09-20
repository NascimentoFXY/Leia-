import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../pages/Intro';
import OptionsSelection from '../pages/optionsSelection';
import Login from '../pages/login';
import Main from '../pages/main';
// import Register from '../pages/Register';

// Páginas ou telas


const Stack = createNativeStackNavigator();

export default function MainRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
