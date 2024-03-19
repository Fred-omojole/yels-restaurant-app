"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import NAV from "./Nav";
import navMobile from "./NavMobile";
import { useState } from "react";
// import { useEffect } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scroll detection
      setActive(window.scrollY > 100);
    };
    //event
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200">
      Header
    </header>
  );
};

export default Header;
