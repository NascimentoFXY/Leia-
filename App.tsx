import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AuthRoutes from './src/routes/authRoute';
import MainRoutes from './src/routes/mainRoute';
import AuthProvider, { useAuth } from './src/context/auth';
import * as Font from "expo-font"
import { useEffect, useState } from 'react';
import { colors } from './src/config/theme/colors';
function Routes() {
  const { isAuthenticated } = useAuth()!;

  return isAuthenticated === false ? <AuthRoutes /> : <MainRoutes />;
}

const getFonts = () => Font.loadAsync({
  'high-cruiser': require('./assets/fonts/highcruiser.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await getFonts();
      setFontLoaded(true);
    };

    loadFonts(); // <- aqui estava faltando
  }, []);

  if (!fontLoaded) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.secondary}}>
        <ActivityIndicator animating={true} size={90} color={colors.primary}/>
      </View>
    ); // ou pode colocar um splash / loading
  }

  if (fontLoaded) {
    return (
      <AuthProvider>
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </AuthProvider>
    );
  }

}

