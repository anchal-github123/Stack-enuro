import Lottie from "lottie-react";
import Button from "./Button";
function HeroSection({text1,text2,img,size}) {
  return (
       <div className='grid place-items-center gap-5 lg:grid-cols-2 container'>
    <div className="mt-5 flex flex-col gap-5 lg:mt-0">
      <h1 className="text-3xl font-heading font-semibold lg:text-4xl">
        <span className="text-primary">{text1}</span>{text2}</h1>
      <div className="flex items-center justify-center gap-3 lg:justify-start">
      <Button name="Contact Us" styleType="outline"/>
      <Button name="Explore More" styleType="primary"/>
    </div>
    </div>
    <div className="w-full flex justify-center items-center">
    {size=="small" ?  <Lottie 
    animationData={img} 
    loop={true} 
    className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96"
  />: <Lottie 
    animationData={img} 
    loop={true} 
    className=""
  />}
 
</div>
  
   </div>
  )
}

export default HeroSection
