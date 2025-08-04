import HeroSection from "../../components/HeroSection";
import startupimg from "../../assets/Lottieimage/Startup Formation.json"
import ServiceSection from "../../components/ServiceSection";
export default function StartupResistation() {
  return (
    <section>
        <HeroSection text1="Empower " text2="Your Startup Journey" img={startupimg}/>
        <ServiceSection/>
    </section>
  )
}
