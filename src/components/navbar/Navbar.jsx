import Button from "../Button";
import DesktopNav from "./DesktopNav";
import MobileNav from './MobileNav';
export default function Navbar() {

  const navitems = [
    { path: "/", name: "Home", child: false },
    { path: "/contact", name: "Contact", child: false },
    {
      path: "/", name: "IT Services", child: true,
      submenu: [
        { name: "Web Development", path: "/WebDevelopment" },
        { name: "App Development", path: "/AppDevelopment" },
        { name: "AI ChatBoat Development", path: "/AIChatBoat" },
        { name: "Custom Software Solution", path: "/CustomSoftwareSolution" },
        { name: "Social Media Marketing", path: "/SocialMediaMarketing" },

      ],
    },
    {
      path: "/", name: "Other Services", child: true,
      submenu: [
        { name: "StartUp Registation", path: "/StartupResistation" },
        { name: "Branding", path: "/Branding" },
          { name: "GST Registation", path: "/GSTResistation" },
      ],
    },
  ];

return (
  <>
    <nav className="max-w-7xl m-auto  flex items-center justify-between py-4 p-3 ">
      {/* logo */}
      <div>
        <h1 className="font-logo text-2xl lg:text-3xl ">
          <span className="text-primary">Stack</span>neuro<span className="text-primary text-2xl">.</span>
        </h1>
      </div>

      {/* nav items */}
      <div className="hidden lg:flex">
      <DesktopNav navitems={navitems}></DesktopNav>
        
      </div>

      {/* button */}
      <div className="hidden lg:flex">
        <Button name="Get Started" styleType="primary"  link= "/Contact"/>
      </div>

      {/* mobile menu icon */}
       <div className="lg:hidden">
     <MobileNav navitems={navitems}></MobileNav>
     </div>
    </nav>
      
    

</>

  );
}
