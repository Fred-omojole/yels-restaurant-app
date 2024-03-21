"use client";
import { useState } from "react";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: -50,
  },
  {
    icon: <FaEnvelope />,
    path: "Contact",
    name: "contact",
    offset: 0,
  },
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {/* {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.name}
        </Link>
      ))} */}
      <div>
        <RiMenu2Line className="text-3xl text-white transition-all " />
      </div>
    </div>
  );
};

export default NavMobile;
