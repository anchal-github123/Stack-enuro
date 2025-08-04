import HeroSection from "../../components/HeroSection";
import WebDevimg from "../../assets/Lottieimage/contact us (1).json"
import ServiceSection from "../../components/ServiceSection";
export default function WebDevelopment() {
  return (
<section>
  {/* 1st section */}
  <HeroSection text1="Build Smart, Scalable & Stunning Websites," text2="Grow your business online today." img={WebDevimg}/>
    <ServiceSection/>
</section>

  )
}
