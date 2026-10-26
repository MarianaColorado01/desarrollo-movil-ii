import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function MapsApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapas con Expo SDK 57</Text>
      <Text style={styles.info}>OpenStreetMap + Leaflet, sin Google Cloud</Text>
      <Link href="/map-simple" style={styles.link}>
       1. Ver mapa de coordenadas y marcadores
      </Link>
      <Link href="/loading" style={styles.link}>
        2. Mapa GPS e interactivo
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, gap: 24 },
  title: { fontSize: 27, fontWeight: 'bold' },
  info: { fontSize: 16 },
  link: {
    padding: 17,
    backgroundColor: '#173f73',
    color: 'white',
    borderRadius: 12,
    overflow: 'hidden',
  },
});
