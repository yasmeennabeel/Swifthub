import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import OptSection from "./components/OptSection/OptSection";
import BusSection from "./components/BusSection/BusSection";
import LogiSection from "./components/LogiSection/LogiSection";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import TestimonialCarousel from "./components/Carousel/Carousel";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <OptSection></OptSection>
      <TrustedBy></TrustedBy>
      <BusSection></BusSection>
      <LogiSection></LogiSection>
      <TrustedBy align="center" />
      <TestimonialCarousel></TestimonialCarousel>
      <Footer></Footer>
    </>
  );
}
