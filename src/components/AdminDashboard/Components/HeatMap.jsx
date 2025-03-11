import { useState, useEffect, useRef } from 'react'
import MapGL, { Source, Layer } from 'react-map-gl'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZGllZ29pcmliZSIsImEiOiJjbTdpbHVxdTgwdXg4MmpvaGU2aHp1bHE0In0.KTKQwZDn8zsEflNmMOI6fw' // 🔹 Reemplaza con tu API Key de Mapbox

const data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { intensity: 1000 },
      geometry: { type: 'Point', coordinates: [-102.5528, 23.6345] } // CDMX
    },
    {
      type: 'Feature',
      properties: { intensity: 700 },
      geometry: { type: 'Point', coordinates: [1.8883, 46.6034] } // París
    },
    {
      type: 'Feature',
      properties: { intensity: 500 },
      geometry: { type: 'Point', coordinates: [138.2529, 36.2048] } // Tokio
    }
  ]
}

const HeatMap = () => {
  const mapRef = useRef(null)
  const [viewport] = useState({
    latitude: 23.6345,
    longitude: -102.5528,
    zoom: 3.15,
    projection: 'globe'
  })

  useEffect(() => {
    if (!mapRef.current) return

    mapRef.current.on('style.load', () => {
      const map = mapRef.current.getMap()

      // 🔹 Establecer el fondo del espacio en negro
      map.setPaintProperty('background', 'background-color', '#000000')
    })
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <MapGL
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11" // 🔹 Cambia estilos aquí
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ height: '450px', overflow: 'hidden' }}
      >
        {/* 🔹 Capa de puntos de calor */}
        <Source id="heatmap" type="geojson" data={data}>
          <Layer
            id="heatmap-layer"
            type="heatmap"
            paint={{
              'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'intensity'],
                0,
                0,
                1000,
                1
              ],
              'heatmap-intensity': 1.2, // 🔹 Hace que el heatmap sea más visible
              'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                50, // 🔹 Puntos más grandes en zoom bajo
                5,
                120 // 🔹 Puntos aún más grandes en zoom alto
              ],
              'heatmap-opacity': 0.8,
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(255, 255, 255, 0)',
                0.2,
                'rgb(255, 204, 204)',
                0.4,
                'rgb(255, 153, 153)',
                0.6,
                'rgb(255, 77, 77)',
                0.8,
                'rgb(179, 0, 0)'
              ]
            }}
          />
        </Source>
      </MapGL>
    </div>
  )
}

export default HeatMap
