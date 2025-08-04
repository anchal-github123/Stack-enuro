import CustomSoftwareServiceimg from "../../assets/Lottieimage/Facebook Social Media Illustration.json"
import HeroSection from "../../components/HeroSection";
import ServiceSection from "../../components/ServiceSection";
export default function SocialMediapage() {
  return (
    <section>
       <HeroSection text1="Connect, Engage " text2="& Grow With Social Media" img={CustomSoftwareServiceimg}/>
      <ServiceSection/>
      </section>
  )
}
