// ACTIVIDAD 2: tarjeta reutilizable (todo llega por props).
import { View, Text } from 'react-native';
import { Colors } from '../constants/Colors';

interface LugarCardProps {
  nombre: string;
  descripcion: string;
  latitud: number;
  longitud: number;
}

export default function LugarCard({ nombre, descripcion, latitud, longitud }: LugarCardProps) {
  return (
    <View
      className="w-full rounded-2xl p-5 shadow"
      style={{ backgroundColor: Colors.tarjeta }}
    >
      <Text className="text-2xl font-bold mb-2" style={{ color: Colors.texto }}>
        {nombre}
      </Text>
      <Text className="text-base mb-4" style={{ color: Colors.textoSuave }}>
        {descripcion}
      </Text>
      <View className="flex-row justify-between">
        <View>
          <Text className="text-xs uppercase" style={{ color: Colors.textoSuave }}>Latitud</Text>
          <Text className="text-base font-semibold" style={{ color: Colors.texto }}>{latitud}</Text>
        </View>
        <View>
          <Text className="text-xs uppercase" style={{ color: Colors.textoSuave }}>Longitud</Text>
          <Text className="text-base font-semibold" style={{ color: Colors.texto }}>{longitud}</Text>
        </View>
      </View>
    </View>
  );
}
