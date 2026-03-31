import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function MemoryDetailScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Memory Detail" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Memory Detail screen</Text></View>
  </View>;
}
