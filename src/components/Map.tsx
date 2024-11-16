import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { WildlifeSighting } from '../types';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  sightings: WildlifeSighting[];
}

export function Map({ sightings }: MapProps) {
  const center = sightings.length > 0
    ? [sightings[0].location.lat, sightings[0].location.lng]
    : [0, 0];

  return (
    <MapContainer
      center={[center[0], center[1]]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      className="rounded-lg shadow"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {sightings.map((sighting) => (
        <Marker
          key={sighting.id}
          position={[sighting.location.lat, sighting.location.lng]}
        >
          <Popup>
            <div>
              <h3 className="font-semibold">{sighting.species}</h3>
              <p className="text-sm">{sighting.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}