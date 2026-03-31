import * as ImageManipulator from 'expo-image-manipulator';
export async function compressImage(uri) { const out = await ImageManipulator.manipulateAsync(uri, [{ resize: { width: 1200 } }], { compress: 0.75, format: ImageManipulator.SaveFormat.JPEG, base64: false }); return out.uri; }
