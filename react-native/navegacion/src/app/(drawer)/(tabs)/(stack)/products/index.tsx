import {View, Text, FlatList, Pressable} from 'react-native';
import products from '@/store/productsStore';
import {Href, Link, router} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {useCart} from '@/store/cart.store';

const ProductsScreen = () => {
    const {items} = useCart();
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <View className='flex flex-1 px-4'>
            <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Abrir carrito, ${itemCount} productos`}
                className="mt-4 flex-row items-center justify-center gap-2 rounded-md bg-indigo-600 p-3"
                onPress={() => router.push('/(drawer)/(tabs)/(stack)/cart' as Href)}
            >
                <Ionicons name="cart-outline" size={22} color="white" />
                <Text className="font-work-black text-white">
                    Ver carrito ({itemCount})
                </Text>
            </Pressable>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View className='mt-10'>
                        <Text className='text-2xl font-work-black'>{item.title}</Text>
                        <Text className=''>{item.description}</Text>

                        <View className='flex flex-row justify-between mt-2'>
                            <Text className='font-work-black'>{item.price}</Text>
                            <Link
                                href={{ pathname: '/products/[id]', params: { id: item.id } } as Href}
                                className='text-primary'
                            >
                                Ver detalles
                            </Link>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductsScreen;
