import { useState } from 'react';
import { Share, Text, View } from 'react-native';
import Button from '../../components/common/Button';
import { useCoupleContext } from '../../contexts/CoupleContext';

export default function CreateCoupleScreen({ navigation }) {
  const { setCouple } = useCoupleContext();
  const [code, setCode] = useState('');
  const generate = () => setCode(Math.random().toString(36).substring(2, 8).toUpperCase());
  return <View className="flex-1 p-6 bg-paper-50 justify-center">
    <Text className="text-8xl text-center">💑</Text>
    <Text className="text-3xl font-bold text-center text-ink-900">Create Your Space</Text>
    {!code ? <Button onPress={generate}>Generate Pairing Code</Button> : <>
      <View className="bg-clay-100 rounded-xl p-6 my-4"><Text className="text-3xl text-center font-bold tracking-widest">{code}</Text></View>
      <Button onPress={() => Share.share({ message: `Join me on Us with code: ${code}` })}>Share Code</Button>
      <Button variant="secondary" onPress={() => setCouple({ id: code, pairing_code: code })}>Simulate Paired</Button>
      <Button variant="ghost" onPress={() => navigation.navigate('JoinCouple')}>I have a code instead</Button>
    </>}
  </View>;
}
