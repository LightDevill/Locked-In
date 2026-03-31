import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function OnboardingScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Welcome to Us" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Welcome to Us screen</Text></View>
  </View>;
}
