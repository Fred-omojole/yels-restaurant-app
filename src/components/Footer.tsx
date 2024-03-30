"use client ";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-footer bg-cover text-white bg-no-repeat pt-16">
      <div className="container mx-auto">
        <div className="w-[300px] mb-8 xl:mb-0">
          <Link href="/">
            <Image src="/logo.svg" width={90} height={36} alt="image" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
