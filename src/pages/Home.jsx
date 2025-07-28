import Lottie from "lottie-react";
import HeroImage from "../assets/Lottieimage/Simple coding.json";
import Button from "../components/Button";
export default function Home() {
  return (
    <>
    <div className='grid items-center gap-5  lg:grid-cols-2 container'>
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-heading font-semibold lg:text-4xl">
        <span className="text-primary">Grow Smarter </span>with Expert Tech, Design & Legal Services
      </h1>
      <div className="flex items-center justify-center  gap-3 lg:justify-start">
      <Button name="Contact Us" styleType="outline"/>
      <Button name="Explore More" styleType="primary"/>
    </div>
     
    </div>
    <div className="">
     <Lottie animationData={HeroImage} loop={true} /></div>
   </div>

   <div className="container bg-gray-100">
   <div>
    <img></img>
    <p>Drive Business Growth</p>
    <p>Leverage our expertise to scale your business with innovative solutions and strategic insights.s</p>
   <Button name="Get Started" styleType="primary"></Button>

   </div>


   </div>
   <div>
    
   </div>


</>
  )
}
