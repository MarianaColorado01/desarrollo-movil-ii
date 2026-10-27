import { Pressable, Text } from 'react-native';
import { Colors } from '../constants/Colors';

type Props = { titulo: string; onPress: () => void };
export default function BotonAccion({ titulo, onPress }: Props) {
 // Botón reutilizable: cambia de color mientras se mantiene presionado.
 return <Pressable
    onPress={onPress}
    className='w-full rounded-xl py-4 items-center'
    style = {({pressed}) => ({
        backgroundColor: pressed ? Colors.botonpresionado : Colors.boton,
    })}
    >
        <Text className='text-base font-bold' style={{color: Colors.texto}}>
            {titulo}
        </Text>
        </Pressable>;
}
