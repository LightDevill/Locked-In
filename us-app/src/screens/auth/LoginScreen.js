import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { useAuthContext } from '../../contexts/AuthContext';
import { validateEmail } from '../../utils/validators';

export default function LoginScreen({ navigation }) {
  const { login } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const valid = validateEmail(email) && password.length >= 6;

  const onLogin = async () => {
    setLoading(true); setError('');
    try { await login(email, password); } catch (e) { setError(e.message || 'Unable to login'); } finally { setLoading(false); }
  };

  return <View className="flex-1 justify-center p-6 bg-paper-50">
    <Text className="text-6xl text-center">❤️</Text>
    <Text className="text-4xl font-bold text-center text-ink-900 mt-2">Welcome Back</Text>
    <Text className="text-center text-ink-700 mb-6">Login to continue</Text>
    <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
    <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
    {!!error && <Text className="text-persimmon-500 mb-3">{error}</Text>}
    <Button onPress={onLogin} loading={loading} disabled={!valid}>Login</Button>
    <Pressable onPress={() => navigation.navigate('Signup')} className="mt-4"><Text className="text-center text-clay-600">Create account</Text></Pressable>
    <Text className="text-center text-ink-600 mt-8 opacity-40">愛は永遠に続く</Text>
  </View>;
}
