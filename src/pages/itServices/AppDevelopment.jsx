import HeroSection from "../../components/HeroSection";
import AppDevimg from "../../assets/Lottieimage/App Development.json";
import ServiceSection from "../../components/ServiceSection";
export default function AppDevelopment() {
  return (
    <section>
        <HeroSection text1="Powerful, Scalable & User-Friendly Mobile Apps," text2="Apps That Perform, Scale, and Inspire" img={AppDevimg}/>
         <ServiceSection/>
    </section>
  )
}
