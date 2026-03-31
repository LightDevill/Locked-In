import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function TasksScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Our Tasks" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Our Tasks screen</Text></View>
  </View>;
}
