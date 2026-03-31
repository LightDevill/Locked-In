import { Text } from 'react-native';
import Card from '../common/Card';
export default function ThoughtCard({ thought }) { return <Card className="mb-3"><Text className="text-ink-900">{thought.content}</Text></Card>; }
