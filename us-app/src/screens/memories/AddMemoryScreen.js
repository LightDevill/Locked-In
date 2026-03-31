import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function AddMemoryScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Add Memory" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Add Memory screen</Text></View>
  </View>;
}
