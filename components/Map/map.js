import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const yellowOption = { color: 'yellow' };
    const redOption = { color: 'red' };

    const polyline = [
        [49.264929, -123.079008], // VCC Clark
        [49.262864, -123.069841], // Commercial-Broadway
        [49.258737, -123.045442], // RenFrew
        [49.260313, -123.033716], // Rupert
        [49.264735, -123.014321], // Gilmore
        [49.266217, -123.001338], // Brentwood-Town Centre
        [49.264890, -122.982295], // Holdom
        [49.259669, -122.964235], // Sperling-Burnaby Lake
        [49.254495, -122.938975], // Lake City Way
        [49.253400, -122.918700], // Production Way University
        [49.248326, -122.897229], // Lougheed Town Centre
        [49.261096, -122.889601], // Burquitlam
        [49.277835, -122.846699], // Moody Centre
        [49.277077, -122.827795], // Inlet Centre
        [49.274507, -122.800309], // Coqutialm Central
        [49.280123, -122.794049], // Lincoln
        [49.285636, -122.791962], // Lafarge Lake
    ];

    return (
        <MapContainer className={style.map} center={polyline[7]} zoom={11} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={polyline[0]}>
                <Popup>
                    VCC Clark
                </Popup>
            </Marker>
            <Marker position={polyline[1]}>
                <Popup>
                    Commercial-Broadway
                </Popup>
            </Marker>
            <Marker position={polyline[2]}>
                <Popup>
                    RenFrew
                </Popup>
            </Marker>
            <Marker position={polyline[3]}>
                <Popup>
                    Rupert
                </Popup>
            </Marker>
            <Marker position={polyline[4]}>
                <Popup>
                    Gilmore
                </Popup>
            </Marker>
            <Marker position={polyline[5]}>
                <Popup>
                    Brentwood-TOwn Centre
                </Popup>
            </Marker>
            <Marker position={polyline[6]}>
                <Popup>
                    Holdom
                </Popup>
            </Marker>
            <Marker position={polyline[7]}>
                <Popup>
                    Sperling-Burnaby Lake
                </Popup>
            </Marker>
            <Marker position={polyline[8]}>
                <Popup>
                    Lake City Way
                </Popup>

            </Marker>
            <Marker position={polyline[9]}>
                <Popup>
                    Production Way University
                </Popup>
            </Marker>
            <Marker position={polyline[10]}>
                <Popup>
                    Lougheed Town Centre
                </Popup>
            </Marker>
            <Marker position={polyline[11]}>
                <Popup>
                    Burquitlam
                </Popup>
            </Marker>
            <Marker position={polyline[12]}>
                <Popup>
                    Moody Centre
                </Popup>
            </Marker>
            <Marker position={polyline[13]}>
                <Popup>
                    Inlet Centre
                </Popup>
            </Marker>
            <Marker position={polyline[14]}>
                <Popup>
                    Coquitlam Central
                </Popup>
            </Marker>
            <Marker position={polyline[15]}>
                <Popup>
                    Lincoln 
                </Popup>
            </Marker>
            
            <Marker position={polyline[16]}>
                <Popup>
                    Lafarge Lake Douglas
                </Popup>
            </Marker>
            




            <CircleMarker center={polyline[0]} pathOptions={redOption} radius={10}></CircleMarker>
            <CircleMarker center={polyline[16]} pathOptions={redOption} radius={10}></CircleMarker>
            <Polyline pathOptions={yellowOption} positions={polyline} />
        </MapContainer>
    )

}