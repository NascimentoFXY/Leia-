import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AuthRoutes from './src/routes/authRoute';
import MainRoutes from './src/routes/mainRoute';
import AuthProvider, {useAuth} from './src/context/auth';

function Routes() {
  const { isAuthenticated } = useAuth()!;

  return isAuthenticated === false ? <AuthRoutes /> : <MainRoutes />;
}

export default function App() {
  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </AuthProvider>
  );
}
