import { View } from 'react-native';
import Input from '../common/Input';
export default function ThoughtInput({ value, onChangeText }) { return <View><Input value={value} onChangeText={onChangeText} placeholder="Share a thought..." multiline maxLength={500} /></View>; }
