import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Mi Lugar Especial' }} />
      <Stack.Screen name="mapa" options={{ title: 'Mapa' }} />
    </Stack>
  );
}
