import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function MoodScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Mood Jar" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Mood Jar screen</Text></View>
  </View>;
}
