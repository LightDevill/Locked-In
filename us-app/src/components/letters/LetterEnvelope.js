import { Pressable, Text, View } from 'react-native';
export default function LetterEnvelope({ onOpen }) { return <Pressable onPress={onOpen}><View className="bg-paper-100 rounded-xl p-8 items-center"><Text className="text-6xl">💌</Text><Text>Tap to open</Text></View></Pressable>; }
