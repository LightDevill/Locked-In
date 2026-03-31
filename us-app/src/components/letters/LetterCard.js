import { Text } from 'react-native';
import Card from '../common/Card';
export default function LetterCard({ letter }) { return <Card className="mb-3"><Text className="text-ink-900 font-semibold">{letter.subject || 'Untitled'}</Text></Card>; }
