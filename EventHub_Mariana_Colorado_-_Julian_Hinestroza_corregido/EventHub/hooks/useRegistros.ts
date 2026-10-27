// Custom hook que entrega los registros y permite buscar uno por su id.
import { registros }from "../data/registros";

export function useRegistro() {
    const obtenerPorId = (id: string) => registros.find((registro) => registro.id === id);

    return {
        registros,
        obtenerPorId
    }
}



export default useRegistro;
