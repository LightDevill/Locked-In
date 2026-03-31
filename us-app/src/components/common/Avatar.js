import { Image, Text, View } from 'react-native';
const sizeMap = { sm: 32, md: 48, lg: 64, xl: 96 };
export default function Avatar({ name='U', imageUrl, size='md' }) { const n=sizeMap[size]; const initials=name.split(' ').map(p=>p[0]).join('').slice(0,2).toUpperCase(); return imageUrl ? <Image source={{ uri: imageUrl }} style={{ width:n,height:n,borderRadius:n/2 }} /> : <View style={{ width:n,height:n,borderRadius:n/2 }} className="bg-clay-300 items-center justify-center"><Text className="text-ink-900 font-semibold">{initials}</Text></View>; }
