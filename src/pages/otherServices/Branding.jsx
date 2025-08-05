import HeroSection from "../../components/HeroSection";
import Brandingimg from "../../assets/Lottieimage/Business Analytics.json";
import ServiceSection from "../../components/ServiceSection";
export default function Branding() {
  return (
    <section>
           <HeroSection text1="Build a Brand That Speaks for Itself," text2="we shape brands that connect, inspire, and stand out." img={Brandingimg}/>
           <ServiceSection/>

       </section>
  )
}
