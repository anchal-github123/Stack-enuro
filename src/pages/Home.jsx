import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import ServiceSection from "../components/ServiceSection";
import HeroSection from "../components/HeroSection";
import HeroImage from "../assets/Lottieimage/Simple coding.json";
export default function Home() {
  return (
    <> 
    <section>
    {/* 1st section */}
    <HeroSection text1="Grow Smarter " text2="with Expert Tech, Design & Legal Services" img={HeroImage}></HeroSection>
 
{/* 2nd section */}
   <div className="container bg-sec grid lg:grid-cols-2 gap-5">
   <div className="flex flex-col justify-center p-5">
   <p className="text-3xl">Drive Business Growth</p>
    <p>We help businesses scale smartly through tailored tech solutions, market insights, and reliable digital strategies.</p>
    <div><Button name="Get Started" styleType="primary"></Button></div>
   </div>
   <div className="flex items-center justify-center">
   {/* <ContactForm></ContactForm> */}
    </div>
 </div>
   {/* 3rd section */}
   <ServiceSection></ServiceSection>
  
</section>
</>
  )
}
