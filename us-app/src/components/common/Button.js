import { ActivityIndicator, Pressable, Text } from 'react-native';
import * as Haptics from 'expo-haptics';

const variantStyle = { primary: 'bg-clay-500', secondary: 'bg-bamboo-500', outline: 'border border-clay-500', ghost: '' };
const sizeStyle = { sm: 'py-2 px-3', md: 'py-3 px-4', lg: 'py-4 px-6' };

export default function Button({ children, onPress, variant = 'primary', size = 'md', disabled, loading }) {
  return <Pressable
    android_ripple={{ color: '#ffffff33' }}
    onPress={async () => { await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); onPress?.(); }}
    disabled={disabled || loading}
    className={`rounded-lg ${variantStyle[variant]} ${sizeStyle[size]} items-center justify-center ${disabled ? 'opacity-50' : ''}`}
  >
    {loading ? <ActivityIndicator color="#fff" /> : <Text className="text-paper-50 font-semibold">{children}</Text>}
  </Pressable>;
}
