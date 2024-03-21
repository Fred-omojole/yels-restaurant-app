/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import NAV from "./Nav";
import navMobile from "./NavMobile";
import { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import NavMobile from "./NavMobile";
// import { useEffect } from "react";
const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scroll detection
      setActive(window.scrollY > 100);
    };
    //event listener (add)
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? " bg-black py-4 " : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src="/Logo.svg" width={75} height={30} alt="" />
          </Link>
          {/* navbar */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          />
          {/* button */}
          <ScrollLink to="reservation" smooth={true}>
            <Button className="rounded" variant="orange" size="sm">
              {" "}
              Book a table
            </Button>
          </ScrollLink>
          {/* navMobile */}
          <NavMobile containerStyles="xl:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
