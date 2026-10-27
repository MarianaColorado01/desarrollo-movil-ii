import { Tabs } from 'expo-router';
import { Colors } from '../../../constants/Colors';
export default function TabsLayout() {
  // El Drawer ya muestra el encabezado; las pestañas solo muestran la barra inferior.
  return <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.botonpresionado,
    tabBarInactiveTintColor: Colors.textosuave,
    tabBarStyle: { backgroundColor: Colors.tarjeta },
  }}>
    <Tabs.Screen name="index" options={{ title: 'Catálogo de eventos' }} />
    <Tabs.Screen name="guardados" options={{ title: 'Eventos guardados' }} />
  </Tabs>;
}
