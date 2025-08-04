import HeroSection from "../../components/HeroSection";
import GSTResistationimg from "../../assets/Lottieimage/certification Verfied.json";
import ServiceSection from "../../components/ServiceSection";
export default function GSTResistation() {
  return (
    <section>
    <HeroSection text1="Powerful, Scalable & User-Friendly Mobile Apps," text2="Apps That Perform, Scale, and Inspire" img={GSTResistationimg} size="small"/>
    <ServiceSection/>
  </section>
  )
}
