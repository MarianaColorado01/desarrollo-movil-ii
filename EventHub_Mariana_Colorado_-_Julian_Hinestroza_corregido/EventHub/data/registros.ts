// Datos iniciales entregados por el docente. Son ficticios y sirven para practicar.
export interface Registro { id: string; nombre: string; descripcion: string; latitud: number; longitud: number; categoria: string };
export const registros: Registro[] = [
  {
    "id": "1",
    "nombre": "Concierto Local",
    "descripcion": "Música y artistas invitados",
    "latitud": 4.8131,
    "longitud": -75.6959,
    "categoria": "Música"
  },
  {
    "id": "2",
    "nombre": "Feria de Ideas",
    "descripcion": "Emprendimiento y tecnología",
    "latitud": 4.8215,
    "longitud": -75.6805,
    "categoria": "Feria"
  },
  {
    "id": "3",
    "nombre": "Encuentro Deportivo",
    "descripcion": "Torneo recreativo",
    "latitud": 4.8061,
    "longitud": -75.6911,
    "categoria": "Deporte"
  },
  {
    "id": "4",
    "nombre": "Festival Cultural",
    "descripcion": "Arte y presentaciones",
    "latitud": 4.8301,
    "longitud": -75.6914,
    "categoria": "Cultura"
  }
];

// Recursos locales proporcionados. Usa imagenesPorId[registro.id] en <Image source={...} />.
export const imagenesPorId: Record<string, number> = {
  '1': require('../assets/images/registro_1.png'),
  '2': require('../assets/images/registro_2.png'),
  '3': require('../assets/images/registro_3.png'),
  '4': require('../assets/images/registro_4.png'),
};
