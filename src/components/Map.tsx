"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

const DynamicMapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false } // Disable SSR for this component
);

type MarkerData = {
  position: LatLngExpression;
  title: string;
  subtitle: string;
  image: string;
};

const markers: MarkerData[] = [
  {
    position: [34.052235, -118.243683],
    title: "Location 1",
    subtitle: "Lorem ipsum dolor sit amet, consecutor adipsicising elit",
    image: "/map",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet, consecutor adipsicising elit",
    image: "/map",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet, consecutor adipsicising elit",
    image: "/map",
  },
];

const customIcon = new Icon({
  iconUrl: "/pin-solid.svg",
  iconSize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px )",
  });

  return (
    <section>
      <DynamicMapContainer
        center={[34.052235, -118.243683]}
        zoom={10}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* markers */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={customIcon}
          ></Marker>
        ))}
      </DynamicMapContainer>
    </section>
  );
};

export default Map;
