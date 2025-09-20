import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from '../pages/Intro';
import OptionsSelection from '../pages/optionsSelection';
import Login from '../pages/login';
// import Register from '../pages/Register';

// Páginas ou telas


const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Intro' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OptionsSelection" component={OptionsSelection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
