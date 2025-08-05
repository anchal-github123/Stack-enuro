import HeroSection from "../../components/HeroSection";
import GSTResistationimg from "../../assets/Lottieimage/certification Verfied.json";
import ServiceSection from "../../components/ServiceSection";
export default function GSTResistation() {
  return (
    <section>
    <HeroSection text1="Simplified" text2="GST Registration With Expert Support" img={GSTResistationimg} size="small"/>
    <ServiceSection/>
  </section>
  )
}
