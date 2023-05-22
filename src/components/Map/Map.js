import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import React from 'react'
// import markerIcon from '../images/location.png'

export default function Map() {
    const position = [51.505, -0.09]

    return (
        <MapContainer center={[52.505, -0.09]} zoom={5} scrollWheelZoom={true} style={{ height: '400px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
            />
            <Marker position={position} draggable={true}>
                <Popup>
                    feel free to drag to any location of your chioces
                </Popup>
            </Marker>
        </MapContainer>
    )
}
