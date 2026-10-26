import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import { useLugar } from '../hooks/useLugar';
import LugarCard from '../components/LugarCard';
import BotonPersonalizado from '../components/BotonPersonalizado';
import { Colors } from '../constants/Colors';

export default function Inicio() {
  const router = useRouter();
  const { nombre, descripcion, latitud, longitud } = useLugar();

  const irAlMapa = () => {
    try {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    } catch {}
    router.push({
      pathname: '/mapa',
      params: { nombre, latitud: String(latitud), longitud: String(longitud) },
    });
  };

  return (
    <View
      className="flex-1 items-center justify-center px-6 gap-6"
      style={{ backgroundColor: Colors.fondo }}
    >
      <Text className="text-3xl font-bold" style={{ color: Colors.texto }}>
        Mi Lugar Especial
      </Text>

      <Image
        source={require('../assets/images/lugar.jpg')}
        className="w-full h-48 rounded-2xl"
        resizeMode="cover"
      />

      <LugarCard
        nombre={nombre}
        descripcion={descripcion}
        latitud={latitud}
        longitud={longitud}
      />
      <BotonPersonalizado texto="Ver ubicación en el mapa" onPress={irAlMapa} />
    </View>
  );
}