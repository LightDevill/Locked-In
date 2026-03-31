import { ActivityIndicator, Text, View } from 'react-native';
export default function Loading({ message='Loading...', fullScreen }) { return <View className={`${fullScreen ? 'flex-1' : ''} items-center justify-center p-6`}><ActivityIndicator color="#C17767" /><Text className="mt-2 text-ink-700">{message}</Text></View>; }
