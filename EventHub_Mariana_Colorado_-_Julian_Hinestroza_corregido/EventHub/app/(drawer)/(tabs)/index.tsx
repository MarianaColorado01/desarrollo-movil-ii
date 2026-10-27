import { View, Text, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { useRegistro } from '../../../hooks/useRegistros';
import RegistroCard from '../../../components/RegistroCard';
import { imagenesPorId } from '../../../data/registros';
import { Colors } from '../../../constants/Colors';

export default function Catalogo() {
  const router = useRouter();
  const { registros } = useRegistro();

  const irADetalle = (id: string) => {
    router.push({
      pathname: '/detalle/[id]',
      params: { id }
    })
  }

  return <View className="flex-1 px-5 pt-5" style={{ backgroundColor: Colors.fondo }}>
    <Text className="text-xl font-bold mb-4" style={{ color: Colors.texto }}>EventHub: Agenda de eventos</Text>
    <FlatList
      data={registros}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 16, paddingBottom: 20 }}
      renderItem={({ item }) => (
        <RegistroCard
          nombre={item.nombre}
          descripcion={item.descripcion}
          categoria={item.categoria}
          imagen={imagenesPorId[item.id]}
          onPress={() => irADetalle(item.id)}
        />
      )}
    />
  </View>;
}
