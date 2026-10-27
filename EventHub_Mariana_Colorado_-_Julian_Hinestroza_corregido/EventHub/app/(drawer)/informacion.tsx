import { View, Text } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function Informacion() {
  return (
    <View className="flex-1 px-5 pt-5 gap-4" style={{ backgroundColor: Colors.fondo }}>
      <Text className="text-xl font-bold" style={{ color: Colors.texto }}>
        Acerca de EventHub
      </Text>
      <View className="rounded-2xl p-5 gap-3" style={{ backgroundColor: Colors.tarjeta }}>
        <Text className="text-base" style={{ color: Colors.texto }}>
          EventHub es una agenda visual de eventos locales culturales, deportivos y comunitarios.
        </Text>
        <Text className="text-base" style={{ color: Colors.textosuave }}>
          Permite descubrir cuatro eventos de ejemplo y consultar la ficha de cada uno. No incluye inscripción ni venta de entradas.
        </Text>
        <Text className="text-xs uppercase font-semibold" style={{ color: Colors.textosuave }}>
          Autores
        </Text>
        <Text className="text-base font-semibold" style={{ color: Colors.texto }}>
          Mariana Colorado
        </Text>
        <Text className="text-base font-semibold" style={{ color: Colors.texto }}>
          Julian Hinestroza
        </Text>
        <Text className="text-xs" style={{ color: Colors.textosuave }}>
          Desarrollo Móvil II · Segundo parcial · Sesión 1
        </Text>
      </View>
    </View>
  );
}
