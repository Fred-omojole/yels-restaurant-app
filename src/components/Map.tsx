"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import "leaflet/dist/leaflet.css";

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
    image: "/map/1.png",
  },
  {
    position: [33.9748, -118.3356],
    title: "Location 2",
    subtitle: "Lorem ipsum dolor sit amet, consecutor adipsicising elit",
    image: "/map/2.png",
  },
  {
    position: [34.0211, -118.3965],
    title: "Location 3",
    subtitle: "Lorem ipsum dolor sit amet, consecutor adipsicising elit",
    image: "/map/3.png",
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
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="relative "
      id="contact"
    >
      <MapContainer
        center={[34.052235, -118.243683]}
        zoom={isMobile ? 10 : 12}
        className={`${isMobile ? "h-[300px]" : "h-[900px]"} z-10`}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href = "https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={customIcon}>
            <Popup>
              <div className="flex gap-x-[30px]">
                <div className="flex-1">
                  <h3>{marker.title}</h3>
                  <p className="leading-snug">{marker.subtitle}</p>
                </div>
                <div className="flex-1">
                  <Image
                    src={marker.image}
                    alt="image"
                    width={130}
                    height={160}
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </motion.section>
  );
};

export default Map;
