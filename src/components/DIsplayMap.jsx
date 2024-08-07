/* eslint-disable no-undef */
import { useEffect } from "react";

const DisplayMap = () => {

    useEffect(() => {
        (async () => {
            var map = L.map('map').setView([26.460498, 74.607583], 16.5);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 17,
            }).addTo(map);
            map.attributionControl;
            var myIcon = L.icon({
                iconUrl: '/img/face369.png',
                iconSize: [80],
                iconAnchor: [38, 25],
            });
            var marker = L.marker([26.460498, 74.607583], { icon: myIcon })
                .addTo(map);
            marker.bindPopup("<b>Hey Viewer👋🏻</b><br>Have a nice day").openPopup();
        })();
    })

    return (
        <>
            <div id="map" className="min-h-[29vh] rounded-3xl">
            </div>
        </>
    )
};

export default DisplayMap;
