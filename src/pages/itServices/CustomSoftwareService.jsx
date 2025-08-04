import CustomSoftwareServiceimg from "../../assets/Lottieimage/Website maintenance, website problems, 404.json"
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
export default function CustomSoftwareService() {
  return (
   <section>
    <HeroSection text1="Solving " text2="Your Unique Challenges with Tailored Technology" img={CustomSoftwareServiceimg}/>
    <ServiceSection/>
   </section>
  )
}
