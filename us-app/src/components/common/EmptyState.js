import { Text, View } from 'react-native';
import Button from './Button';
export default function EmptyState({ emoji, title, message, action }) { return <View className="items-center justify-center py-10 px-6"><Text className="text-6xl">{emoji}</Text><Text className="text-xl font-bold mt-3 text-ink-900">{title}</Text><Text className="text-ink-700 text-center mt-1">{message}</Text>{action ? <Button onPress={action.onPress}>{action.label}</Button> : null}</View>; }
