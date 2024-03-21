import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = ({ setValue }) => {
  const [locacion, setLocacion] = useState({ lat: 0, lng: 0 });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocacion({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoading(false);
        
      },
      (error) => {
        console.error('Error obteniendo la ubicación:', error);
        setLoading(false);
      }
    );
  }, []);
  useEffect(() => {
    setValue('lat', locacion.lat);
    setValue('lng', locacion.lng); 
  }, [locacion])
  const handleMarkerDragEnd = (e) => {
    const newPosition = e.target.getLatLng();
    setLocacion({
      lat: newPosition.lat,
      lng: newPosition.lng,
    });
  };
  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <MapContainer center={[locacion.lat, locacion.lng]} zoom={15} style={{ width: '100%', height: '300px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[locacion.lat, locacion.lng]} draggable={true} eventHandlers={{ dragend: handleMarkerDragEnd }}>
        <Popup>
          <div>
            Latitud: {locacion.lat}
            <br />
            Longitud: {locacion.lng}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
