import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapContainerProps
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

type Props = MapContainerProps

export { Marker, Popup }

// IMPORT EXAMPLE
// const Map = dynamic(import('@/components/Map'), {
//   ssr: false,
//   loading: function fallback() {
//     return <div>Loading</div>
//   }
// })

function Map({ ...props }: Props) {
  return (
    <MapContainer
      center={[-23.5562483, -46.6632934]}
      zoom={20}
      style={{ height: '100%', width: '100%', zIndex: 0, ...props?.style }}
      {...props}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/solrachix/ckva2880i54bf14ofx2b2p4lk/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_API_key}`}
        // attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
    </MapContainer>
  )
}

export default Map
