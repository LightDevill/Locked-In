import { ActivityIndicator, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import CreateCoupleScreen from '../screens/pairing/CreateCoupleScreen';
import JoinCoupleScreen from '../screens/pairing/JoinCoupleScreen';
import ThoughtsScreen from '../screens/thoughts/ThoughtsScreen';
import LettersScreen from '../screens/letters/LettersScreen';
import MissYouScreen from '../screens/missyou/MissYouScreen';
import { useAuthContext } from '../contexts/AuthContext';
import { useCoupleContext } from '../contexts/CoupleContext';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { user, loading } = useAuthContext();
  const { couple } = useCoupleContext();
  if (loading) return <View className="flex-1 items-center justify-center"><ActivityIndicator color="#C17767" /></View>;

  return <Stack.Navigator screenOptions={{ headerShown: false }}>
    {!user ? <Stack.Screen name="Auth" component={AuthNavigator} /> : !couple ? <>
      <Stack.Screen name="CreateCouple" component={CreateCoupleScreen} />
      <Stack.Screen name="JoinCouple" component={JoinCoupleScreen} />
    </> : <>
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="Thoughts" component={ThoughtsScreen} />
      <Stack.Screen name="Letters" component={LettersScreen} />
      <Stack.Screen name="MissYou" component={MissYouScreen} />
    </>}
  </Stack.Navigator>;
}
