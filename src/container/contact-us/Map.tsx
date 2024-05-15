"use client";
import { useEffect, useRef, useState } from "react";
import L from "leaflet";

const LeafletMap = () => {
	const mapElementRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!mapElementRef.current) return;
		const map = L.map(mapElementRef.current, {
			scrollWheelZoom: false,
			zoomControl: false,
		}).setView([40.75225, -73.9883], 18);

		L.tileLayer("http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</a>',
		}).addTo(map);

		L.tileLayer("https://mapwarper.net/mosaics/tile/1194/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</a>',
		}).addTo(map);

		L.tileLayer(
			"https://maps.nyc.gov/xyz/1.0.0/carto/label-lt/{z}/{x}/{y}.png8",
			{
				maxZoom: 19,
				attribution:
					'&copy; <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">City of New York CC BY 4.0</a>',
			}
		).addTo(map);

		const BVSicon = L.icon({
			iconUrl: "/img/filled_logo.png",
			iconSize: [38, 45], // size of the icon
			iconAnchor: [15, 0], // point of the icon which will correspond to marker's location
			popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
		});

		const marker = L.marker([40.75225, -73.9883], { icon: BVSicon }).addTo(map);
		marker.bindPopup("130 West 37 Street, New York, NY").openPopup();

		return () => {
			map.remove();
		};
	}, []);

	return (
		<div
			id="map"
			ref={mapElementRef}
			style={{
				height: "65vh",
				marginBottom: "3%",
				width: "100vw",
			}}
		/>
	);
};

export default LeafletMap;
