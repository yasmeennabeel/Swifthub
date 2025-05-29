import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import OptSection from "./components/OptSection/OptSection";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <OptSection></OptSection>

      <Footer></Footer>
    </>
  );
}
