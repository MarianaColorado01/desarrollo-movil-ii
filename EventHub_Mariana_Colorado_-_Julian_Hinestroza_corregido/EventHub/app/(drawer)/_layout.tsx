import { Drawer } from 'expo-router/drawer';
import { Colors } from '../../constants/Colors';
export default function DrawerLayout() {
  return <Drawer screenOptions={{
    headerStyle: { backgroundColor: Colors.tarjeta },
    headerTintColor: Colors.texto,
    drawerActiveBackgroundColor: Colors.boton,
    drawerActiveTintColor: Colors.texto,
    drawerStyle: { backgroundColor: Colors.fondo },
  }}>
    <Drawer.Screen name="(tabs)" options={{ title: 'EventHub', drawerLabel: 'Catálogo de eventos' }} />
    <Drawer.Screen name="informacion" options={{ title: 'Acerca de EventHub', drawerLabel: 'Acerca de EventHub' }} />
  </Drawer>;
}
