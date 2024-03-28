"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
// variants={fadeIn("center", 0.2)}
// initial="hidden"
// whileInView={"show"}
// viewport={{ once: false, amount: 0.2 }}

// interface MarkerData {
//   position: LatLngTuple;
//   title: string;
//   subtitle: string;
// }

// import { useEffect, useState } from "react";

const markers = [
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
  iconsize: [40, 40],
});

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px )",
  });
  // const isMobile = useMediaQuery({
  //   query: "(max-width: 768px )",
  // });
  // console.log(isMobile);

  // const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return null; // Return null during server-side rendering
  // }

  // Import Leaflet components only when running on the client-side
  // const { MapContainer, TileLayer } = require("react-leaflet");
  // const { Icon } = require("leaflet");

  return (
    <section>
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={10}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
      </MapContainer>
    </section>
  );
};

export default Map;
