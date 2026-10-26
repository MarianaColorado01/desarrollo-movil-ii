// ACTIVIDAD 2: botón reutilizable con Pressable.
import { Pressable, Text } from 'react-native';
import { Colors } from '../constants/Colors';

interface BotonPersonalizadoProps {
  texto: string;
  onPress: () => void;
}

export default function BotonPersonalizado({ texto, onPress }: BotonPersonalizadoProps) {
  return (
    <Pressable
      onPress={onPress}
      className="w-full rounded-xl py-4 items-center"
      style={({ pressed }) => ({
        backgroundColor: pressed ? Colors.botonPresionado : Colors.boton,
        opacity: pressed ? 0.9 : 1,
        transform: [{ scale: pressed ? 0.98 : 1 }],
      })}
    >
      <Text className="text-base font-bold" style={{ color: Colors.textoBoton }}>
        {texto}
      </Text>
    </Pressable>
  );
}
