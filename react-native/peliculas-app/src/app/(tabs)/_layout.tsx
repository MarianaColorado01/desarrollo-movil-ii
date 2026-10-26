import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout(){
    return(
        <Tabs
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:'#a855f7',
                tabBarInactiveTintColor: '#71717a',
                tabBarStyle:{backgroundColor: '#09090b', borderTopColor: '#27272a'},
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title:'Inicio',
                    tabBarIcon:({color, size}) => <Ionicons name="home" color={color} size={size}/>,
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title:'Buscar',
                    tabBarIcon:({color, size}) => <Ionicons name="search" color={color} size={size}/>,
                }}
            />
            <Tabs.Screen
                name='favorites'
                options={{
                    title:'Favoritos',
                    tabBarIcon:({color, size}) => <Ionicons name="heart" color={color} size={size}/>,
                }}
            />

        </Tabs>
    );
}