// import Board from "@/components/Board";
import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuBar from "@/components/MenuBar";
import Reservation from "@/components/Reservation";
// import StyleGuide from "@/components/StyleGuide";
import Map from "@/components/Map";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      <Header />
      <Hero />
      <MenuBar />
      <Reservation />
      <About />
      <Map />
      <Footer />
      {/* <StyleGuide /> */}
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
