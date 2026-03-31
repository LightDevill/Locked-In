import { Pressable, View } from 'react-native';
import { shadows } from '../../theme/shadows';
export default function Card({ children, pressable, onPress, className='' }) {
  const Body = pressable ? Pressable : View;
  return <Body onPress={onPress} className={`bg-paper-50 border border-mist-200 rounded-xl p-4 ${className}`} style={shadows.paper}>{children}</Body>;
}
