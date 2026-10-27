import '../global.css';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function RootLayout() {
  return <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="detalle/[id]" options={{ headerShown: true, title: 'Detalle' }} />
    </Stack>
  </GestureHandlerRootView>;
}
