import { Ionicons } from '@expo/vector-icons';
import { FlatList, Pressable, Text, View } from 'react-native';
import products from '@/store/productsStore';
import { useCart } from '@/store/cart.store';

const formatPrice = (price: number) => `$${price.toFixed(2)}`;

const CartScreen = () => {
  const { items, removeItem } = useCart();
  const cartProducts = items.flatMap((cartItem) => {
    const product = products.find((item) => item.id === cartItem.productId);
    return product ? [{ ...product, quantity: cartItem.quantity }] : [];
  });
  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <View className="flex-1 px-5">
      <FlatList
        data={cartProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Ionicons name="cart-outline" size={48} color="#6366f1" />
            <Text className="mt-3 text-lg font-work-black">
              Tu carrito está vacío
            </Text>
            <Text className="mt-1 text-center">
              Agrega productos desde su pantalla de detalle.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View className="mb-3 flex-row items-center justify-between rounded-lg border border-gray-200 p-4">
            <View className="mr-4 flex-1">
              <Text className="font-work-black">{item.title}</Text>
              <Text>Precio: {formatPrice(item.price)}</Text>
              {item.quantity > 1 && (
                <Text>Cantidad: {item.quantity}</Text>
              )}
              {item.quantity > 1 && (
                <Text>
                  Subtotal: {formatPrice(item.price * item.quantity)}
                </Text>
              )}
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Eliminar ${item.title} del carrito`}
              className="items-center p-2"
              onPress={() => removeItem(item.id)}
            >
              <Ionicons name="trash-outline" size={22} color="#dc2626" />
              <Text className="mt-1 text-red-600">Eliminar</Text>
            </Pressable>
          </View>
        )}
        ListFooterComponent={
          cartProducts.length > 0 ? (
            <View className="border-t border-gray-200 py-4">
              <Text className="text-right font-work-black text-xl">
                Total: {formatPrice(total)}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default CartScreen;
