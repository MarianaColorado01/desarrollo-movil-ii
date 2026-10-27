import { View, Text, Image } from 'react-native';
import { Colors } from '../constants/Colors';
import BotonAccion from './BotonAccion';

interface RegistroCardProps{
    nombre: string;
    descripcion: string;
    categoria: string;
    imagen: number;
    onPress: () => void;
}

export default function RegistroCard({nombre, descripcion, categoria, imagen, onPress}: RegistroCardProps) {
  return (
    <View
      className="w-full rounded-2xl p-5 shadow"
      style={{ backgroundColor: Colors.tarjeta }}
    >
      <Image
        source={imagen}
        className="w-full h-40 rounded-xl mb-4"
        resizeMode="cover"
      />
      <Text className="text-2xl font-bold mb-2" style={{ color: Colors.texto }}>
        {nombre}
      </Text>
      <Text className="text-base mb-2" style={{ color: Colors.textosuave }}>
        {descripcion}
      </Text>
      <Text className="text-xs uppercase font-semibold mb-4" style={{ color: Colors.textosuave }}>
        Categoría: {categoria}
      </Text>
      <BotonAccion titulo="Ver ficha del evento" onPress={onPress} />
    </View>
  );
}
