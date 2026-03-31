import { Text, View } from 'react-native';
import Header from '../../components/common/Header';

export default function JoinCoupleScreen({ navigation }) {
  return <View className="flex-1 bg-paper-50">
    <Header title="Join Your Space" navigation={navigation} />
    <View className="p-4"><Text className="text-ink-800">Join Your Space screen</Text></View>
  </View>;
}
