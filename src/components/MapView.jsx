'use client'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = () => {
    const center = [-12.0997, -77.03447]
    const zoom = 13

    return (
        <div>
            <MapContainer style={{height: '500px', borderRadius: '10px'}} center={center} zoom={14} >
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <button>hola</button>
            </MapContainer>

        </div>
    );
}

export default MapView;