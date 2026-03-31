import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AuthProvider } from './src/contexts/AuthContext';
import { CoupleProvider } from './src/contexts/CoupleContext';
import AppNavigator from './src/navigation/AppNavigator';

const theme = { ...DefaultTheme, colors: { ...DefaultTheme.colors, background: '#FAF9F6' } };

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <CoupleProvider>
            <NavigationContainer theme={theme}>
              <StatusBar style="dark" />
              <AppNavigator />
            </NavigationContainer>
          </CoupleProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
