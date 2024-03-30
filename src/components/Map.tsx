/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Link from "next/link";

import { FaYoutube } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
    <>
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

      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="bg-footer bg-cover bg-no-repeat pt-16 text-white mt-2"
      >
        <div className="container mx-auto">
          {/* logo */}
          <div className="flex flex-col justify-between xl:flex-row">
            <div className="w-[300px] mb-8 xl:mb-0">
              <Link href="/">
                <Image src="/logo.svg" width={90} height={36} alt="image" />
              </Link>
            </div>
            {/* grid Items  */}
            <div className=" flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
              {/* blog */}
              <div>
                <h4 className="font-semibold mb-5">Blog</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      Sit pellentesque neque egestas quis dolor, sit{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Tempor, volutpat nulla sed posuere orci ac diam integer
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Ultrices consectetur orci ultrices viverra mauris laoreet
                      tincidunt at
                    </Link>
                  </li>
                </ul>
              </div>
              {/* item */}
              <div>
                {" "}
                <h4 className="font-semibold mb-5">New Item</h4>
                <ul className="flex flex-col gap-y-6 text-sm">
                  <li>
                    <Link href="/">
                      Sit pellentesque neque egestas quis dolor, sit{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      Arcu et tincidunt dictum nunc ut nisi, dolor euismod
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Tempor, volutpat nulla sed posuere orci ac diam integer
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      Ultrices consectetur orci ultrices viverra mauris laoreet
                      tincidunt at
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social */}
              <div>
                {" "}
                <h4 className="font-semibold  mb-5">Socials</h4>
                <ul className="flex  gap-x-6 text-sm">
                  <li>
                    <Link href="/">
                      <FaYoutube fontSize={35} />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaFacebook fontSize={35} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <FaInstagramSquare fontSize={35} />
                    </Link>
                  </li>

                  <li>
                    <Link href="/">
                      <FaXTwitter fontSize={35} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* copyright text */}
          <div className=" py-4 border-t border-white/10">
            <p className="text-white/60 text-center text-sm">
              {" "}
              Copyright &copy; W'Food 2023
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Map;
