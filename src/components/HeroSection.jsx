import Lottie from "lottie-react";
import Button from "./Button";

function HeroSection({ text1, text2, img, size }) {
  // Determine Lottie class based on "size" prop
  const lottieClass =
    size === "small"
      ? "w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96"
      : "w-full  h-auto";

  return (
    <div className="grid place-items-center gap-5 lg:grid-cols-2 container">
      {/* Left Text Section */}
      <div className="mt-5 flex flex-col gap-5 lg:mt-0">
        <h1 className="text-3xl font-heading font-semibold lg:text-4xl">
          <span className="text-primary">{text1}</span> {text2}
        </h1>
        <div className="flex items-center justify-center gap-3 lg:justify-start">
          <Button name="Contact Us" styleType="outline"  link= "/Contact"/>
         <a href="#Service_Section" className="bg-primary text-white hover:bg-white hover:text-primary px-5 py-2 rounded-full shadow-md border-3 inline-block">Explor More</a>
        </div>
      </div>

      {/* Right Lottie Section */}
      <div className="w-full flex justify-center items-center">
        <Lottie animationData={img} loop={true} className={lottieClass} />
      </div>
    </div>
  );
}

export default HeroSection;
