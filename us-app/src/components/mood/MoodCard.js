import { Text } from 'react-native';
import Card from '../common/Card';
export default function MoodCard({ mood }) { return <Card><Text className="text-2xl">{mood.emoji}</Text><Text>{mood.feeling}</Text></Card>; }
