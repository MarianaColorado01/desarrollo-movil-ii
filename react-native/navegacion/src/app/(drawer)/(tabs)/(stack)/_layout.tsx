import { Href, Stack, router, useNavigation, usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useCart } from '@/store/cart.store';

const StackLayout = () => {
  const drawerNavigation = useNavigation('/(drawer)') as any;
  const pathname = usePathname();
  const isStackHome = pathname === '/home';
  const { items } = useCart();
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);

  const onHeaderLeftClick = () => {
    if (isStackHome) {
      drawerNavigation.openDrawer();
      return;
    }

    const destination = pathname === '/cart'
      ? '/(drawer)/(tabs)/(stack)/products'
      : pathname.startsWith('/products/')
        ? '/(drawer)/(tabs)/(stack)/products'
        : '/(drawer)/(tabs)/(stack)/home';

    router.replace(destination as Href);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: { backgroundColor: 'white' },
        headerRight: () => pathname === '/cart' ? null : (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={`Abrir carrito, ${itemCount} productos`}
            className="min-h-11 min-w-11 items-center justify-center"
            hitSlop={10}
            onPress={() => router.push('/(drawer)/(tabs)/(stack)/cart' as Href)}
          >
            <Ionicons name="cart-outline" size={25} color="#111827" />
          </Pressable>
        ),
        headerLeft: () => (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={isStackHome ? 'Abrir menú' : 'Volver'}
            hitSlop={10}
            onPress={onHeaderLeftClick}
          >
            <Ionicons
              name={isStackHome ? 'grid-outline' : 'arrow-back-outline'}
              size={20}
              style={{ marginRight: 20 }}
            />
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name="home/index" options={{ title: 'Inicio' }} />
      <Stack.Screen name="products/index" options={{ title: 'Productos' }} />
      <Stack.Screen name="cart/index" options={{ title: 'Carrito' }} />
      <Stack.Screen name="profile/index" options={{ title: 'Perfil' }} />
      <Stack.Screen name="settings/index" options={{ title: 'Ajustes Pantalla' }} />
    </Stack>
  );
};

export default StackLayout;
