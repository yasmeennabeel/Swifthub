import Header from "./ui/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./ui/Footer/Footer";
import OptSection from "./components/OptSection/OptSection";
import BusSection from "./components/BusSection/BusSection";
import LogiSection from "./components/LogiSection/LogiSection";
import TrustedBy from "./ui/TrustedBy/TrustedBy";
import TestimonialCarousel from "./ui/Carousel/Carousel";
import LatestSection from "./components/LatestSection/LatestSection";
import Quote from "./ui/Quote/Quote";
import Numbers from "./ui/Numbers/Numbers";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <OptSection></OptSection>
      <TrustedBy></TrustedBy>
      <BusSection></BusSection>
      <LogiSection></LogiSection>
      <Numbers></Numbers>
      <TrustedBy align="center" />
      <TestimonialCarousel></TestimonialCarousel>
      <LatestSection></LatestSection>
      <Quote></Quote>
      <Footer></Footer>
    </>
  );
}
