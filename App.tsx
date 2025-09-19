import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/main';
import Splash from './src/pages/splash';
import AuthRoutes from './src/routes/authRoute';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <View style={{flex: 1}}>
  
  
      <AuthRoutes/>
    </View>
  );
}
