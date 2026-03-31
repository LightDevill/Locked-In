import { Text, TextInput, View } from 'react-native';
export default function Input({ label, error, maxLength, ...props }) {
  return <View className="mb-3">
    {label ? <Text className="mb-1 text-ink-800">{label}</Text> : null}
    <TextInput className={`bg-paper-100 border rounded-lg px-3 py-3 ${error ? 'border-persimmon-500' : 'border-mist-200'}`} maxLength={maxLength} {...props} />
    {maxLength ? <Text className="text-xs text-ink-600 mt-1">{(props.value || '').length}/{maxLength}</Text> : null}
    {error ? <Text className="text-xs text-persimmon-500 mt-1">{error}</Text> : null}
  </View>;
}
