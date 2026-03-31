import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function ThoughtsScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Thoughts" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Thoughts screen</Text></View>
  </View>;
}
