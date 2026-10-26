import { Tabs } from 'expo-router';

export default function AppTabs() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="map-simple/index" options={{ title: 'Mapa' }} />
    </Tabs>
  );
}
