import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import BotonAccion from '../components/BotonAccion';
import { Colors } from '../constants/Colors';

export default function Inicio() {
    const router = useRouter();

    const irACatalogo = () => {
        router.replace('/(drawer)/(tabs)')
    }


    return (
        <View
        className="flex-1 items-center justify-center px-6 gap-6"
        style={{ backgroundColor: Colors.fondo }}
        >
        <Text className="text-3xl font-bold" style={{ color: Colors.texto }}>
            EventHub
        </Text>

        <Image
            source={require('../assets/images/registro_1.png')}
            className="w-full h-48 rounded-2xl"
            resizeMode="cover"
        />

        <BotonAccion titulo="Ver catálogo de eventos" onPress={irACatalogo} />
        
        </View>
        
        
  );
}
