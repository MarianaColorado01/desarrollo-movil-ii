import { Ionicons } from "@expo/vector-icons";
import { Href, router, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useCart } from "@/store/cart.store";

const TabsLayout = () => {
    const { items } = useCart();
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'indigo',
                headerRight: () => (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityLabel={`Abrir carrito, ${itemCount} productos`}
                        className="mr-4 min-h-11 min-w-11 items-center justify-center"
                        hitSlop={10}
                        onPress={() => router.push('/(drawer)/(tabs)/(stack)/cart' as Href)}
                    >
                        <Ionicons name="cart-outline" size={25} color="#111827" />
                    </Pressable>
                ),
            }}
        >
            <Tabs.Screen
                name="(stack)"
                options={{
                    title:'Stack',
                    headerShown:false,
                    tabBarIcon:({color})=>(
                        <Ionicons size={28} name="person-add-outline" color={color}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="home/index"
                options={{
                    title:'Home',
                    tabBarIcon:({color})=>(
                        <Ionicons size={28} name="home-outline" color={color}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="favorites/index"
                options={{
                    title:'Favoritos',
                    tabBarIcon:({color})=>(
                        <Ionicons size={28} name="star-outline" color={color}/>
                    ),
                }}
            />

        </Tabs>
    );
};

export default TabsLayout;
