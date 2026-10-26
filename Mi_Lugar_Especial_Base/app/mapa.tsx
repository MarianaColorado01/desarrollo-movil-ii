// ACTIVIDADES 4 y 5: recibe parámetros y los dibuja en Leaflet dentro de un WebView.
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import { Colors } from '../constants/Colors';

function crearHtml(nombre: string, lat: number, lng: number) {
  // JSON.stringify protege el texto (comillas, etc.) al meterlo en el script.
  const nombreJs = JSON.stringify(nombre).replace(/</g, '\\u003c');
  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>html, body, #map { height: 100%; margin: 0; padding: 0; }</style>
</head>
<body>
  <div id="map"></div>
  <script>
    var map = L.map('map').setView([${lat}, ${lng}], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([${lat}, ${lng}]).addTo(map).bindPopup(${nombreJs}).openPopup();
  </script>
</body>
</html>`;
}

export default function Mapa() {
  const { nombre, latitud, longitud } = useLocalSearchParams<{
    nombre?: string;
    latitud?: string;
    longitud?: string;
  }>();

  const lat = Number(latitud);
  const lng = Number(longitud);
  const valido =
    !!nombre &&
    latitud !== undefined && longitud !== undefined &&
    latitud !== '' && longitud !== '' &&
    Number.isFinite(lat) && Number.isFinite(lng) &&
    Math.abs(lat) <= 90 && Math.abs(lng) <= 180;

  if (!valido) {
    return (
      <View className="flex-1 items-center justify-center px-6" style={{ backgroundColor: Colors.fondo }}>
        <Text className="text-lg text-center" style={{ color: Colors.texto }}>
          No se recibieron coordenadas válidas para mostrar el mapa.
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="px-4 py-3" style={{ backgroundColor: Colors.fondo }}>
        <Text className="text-xl font-bold" style={{ color: Colors.texto }}>{nombre}</Text>
      </View>
      <WebView
        originWhitelist={['*']}
        source={{ html: crearHtml(nombre!, lat, lng), baseUrl: 'https://localhost/' }}
        javaScriptEnabled
        style={{ flex: 1 }}
      />
    </View>
  );
}
