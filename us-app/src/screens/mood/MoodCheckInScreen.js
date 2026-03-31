import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function MoodCheckInScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Mood Check-in" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Mood Check-in screen</Text></View>
  </View>;
}
