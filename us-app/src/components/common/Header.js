import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
export default function Header({ title, subtitle, showBack, rightComponent, navigation }) {
 const insets = useSafeAreaInsets();
 return <View style={{ paddingTop: insets.top }} className="bg-paper-100 px-4 pb-3 border-b border-mist-100">
   <View className="flex-row items-center justify-between">
     {showBack ? <Pressable onPress={() => navigation?.goBack()}><Text className="text-ink-800">← Back</Text></Pressable> : <View />}
     {rightComponent || <View />}
   </View>
   <Text className="text-3xl font-bold text-ink-900 mt-2">{title}</Text>
   {subtitle ? <Text className="text-ink-700">{subtitle}</Text> : null}
 </View>;
}
