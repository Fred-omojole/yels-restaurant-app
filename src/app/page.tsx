// import Board from "@/components/Board";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import Reservation from "@/components/Reservation";
// import StyleGuide from "@/components/StyleGuide";

import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <MenuBar />
      <Reservation />

      {/* <StyleGuide /> */}
      <div className="h-[4000px]"></div>
    </main>
  );
}
