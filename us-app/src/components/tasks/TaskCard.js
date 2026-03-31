import { Text, View } from 'react-native';
import Card from '../common/Card';
export default function TaskCard({ task }) { return <Card className="mb-3"><Text className="text-lg font-semibold text-ink-900">{task.title}</Text><Text className="text-ink-700">{task.description}</Text></Card>; }
