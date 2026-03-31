import { Text } from 'react-native';
import Card from '../common/Card';
export default function MemoryCard({ memory }) { return <Card><Text className="text-ink-900">{memory.caption}</Text></Card>; }
