import { View, Text } from 'react-native';
import { Colors } from '../../../constants/Colors';

export default function Guardados() {
  // Sesión 1: pantalla mínima. Aquí se mostrarán los eventos que el usuario marque como guardados.
  return (
    <View className="flex-1 px-5 pt-5" style={{ backgroundColor: Colors.fondo }}>
      <Text className="text-xl font-bold mb-4" style={{ color: Colors.texto }}>
        Eventos guardados
      </Text>
      <View className="rounded-2xl p-5" style={{ backgroundColor: Colors.tarjeta }}>
        <Text className="text-base font-semibold mb-2" style={{ color: Colors.texto }}>
          Aún no tienes eventos guardados
        </Text>
        <Text className="text-base" style={{ color: Colors.textosuave }}>
          En esta sección aparecerán los eventos que quieras tener a la mano. Por ahora puedes explorar el catálogo y abrir la ficha de cada evento.
        </Text>
      </View>
    </View>
  );
}
