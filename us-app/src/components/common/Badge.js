import { Text, View } from 'react-native';
const styles = { default: 'bg-mist-100 text-ink-700', primary: 'bg-clay-100 text-clay-700', success: 'bg-bamboo-100 text-bamboo-700', warning: 'bg-persimmon-100 text-persimmon-700' };
export default function Badge({ children, variant='default' }) { return <View className="px-2 py-1 rounded-full self-start"><Text className={`text-xs ${styles[variant]}`}>{children}</Text></View>; }
