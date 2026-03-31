import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function SignupScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Create Account" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Create Account screen</Text></View>
  </View>;
}
