import { FlatList, Image, View } from 'react-native';
export default function PhotoGrid({ items=[] }) { return <FlatList data={items} keyExtractor={(i)=>i.id} numColumns={2} renderItem={({item}) => <View className="w-1/2 p-1"><Image source={{ uri: item.photos?.[0] }} className="h-40 rounded-lg" /></View>} />; }
