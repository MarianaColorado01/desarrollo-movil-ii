import { View, Text, Image } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useRegistro } from '../../hooks/useRegistros';
import { imagenesPorId } from '../../data/registros';
import BotonAccion from '../../components/BotonAccion';
import { Colors } from '../../constants/Colors';

export default function Detalle() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { obtenerPorId } = useRegistro();
  const registro = obtenerPorId(id);

  if (!registro) {
    return <View className="flex-1 p-5 gap-4" style={{ backgroundColor: Colors.fondo }}>
      <Text className="text-xl font-bold" style={{ color: Colors.texto }}>Evento no encontrado</Text>
      <BotonAccion titulo="Regresar" onPress={() => router.back()} />
    </View>;
  }

  return <View className="flex-1 p-5 gap-4" style={{ backgroundColor: Colors.fondo }}>
    <Stack.Screen options={{ title: registro.nombre }} />
    <Image source={imagenesPorId[registro.id]} className="w-full h-56 rounded-2xl" resizeMode="cover" />
    <View className="rounded-2xl p-5" style={{ backgroundColor: Colors.tarjeta }}>
      <Text className="text-2xl font-bold mb-2" style={{ color: Colors.texto }}>{registro.nombre}</Text>
      <Text className="text-base mb-2" style={{ color: Colors.textosuave }}>{registro.descripcion}</Text>
      <Text className="text-xs uppercase font-semibold mb-4" style={{ color: Colors.textosuave }}>Categoría: {registro.categoria}</Text>
      <View className="flex-row justify-between">
        <View>
          <Text className="text-xs uppercase" style={{ color: Colors.textosuave }}>Latitud</Text>
          <Text className="text-base font-semibold" style={{ color: Colors.texto }}>{registro.latitud}</Text>
        </View>
        <View>
          <Text className="text-xs uppercase" style={{ color: Colors.textosuave }}>Longitud</Text>
          <Text className="text-base font-semibold" style={{ color: Colors.texto }}>{registro.longitud}</Text>
        </View>
      </View>
    </View>
    <BotonAccion titulo="Regresar al catálogo" onPress={() => router.back()} />
  </View>;
}
