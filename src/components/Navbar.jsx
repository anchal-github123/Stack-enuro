import { NavLink } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import Button from "./Button";
import { motion } from "motion/react"
export default function Navbar() {
const navitems=[
    {
        path:"/",name:"Home",child:false
    },
    {
        path:"/contact",name:"Contact",child:false
    },
     {
        path:"/",name:"IT Services",child:true,
        submenu: [
        { name: "Web Development", path: "/web-dev" },
        { name: "App Development", path: "/app-dev" },
      ],
    },
    {
        path:"/",name:"Other Services",child:true,
        submenu: [
        { name: "GST", path: "/web-dev" },
        { name: "Bussiness", path: "/app-dev" },
      ],
    },
    
   
]
  return (
    <nav className="flex items-center justify-between py-4 ">
    {/* logo============================================= */}
    <div>
        <h1 className="font-logo text-3xl"><span className="text-primary">Stack</span>neuro<span className="text-primary text-2xl">.</span></h1>
    </div>
    {/* nav items=================================== */}
    <div className="hidden lg:flex">
    <ul className="flex items-center gap-11 text-[1rem] font-subheading  ">
    {navitems.map((item)=>
        <li className="hover:text-primary flex items-center justify-center relative group ">
        <NavLink to={item.path}>{item.name}</NavLink><span className="inline-flex mt-1">
        {item.child?<ChevronDown className="group-hover:rotate-180 duration-200"></ChevronDown>:""}</span>
        {
          item.submenu && 
          <motion.div
          initial={{opacity:0}}
          whileHover={{opacity:100}}
        
           className="absolute top-[2.1rem] left-1 border w-fit px-7">
         {
            item.child && item.submenu &&
           
           <div className="flex flex-col gap-2"> {item.submenu?.map((subitem)=><NavLink to={subitem.path}>{subitem.name}</NavLink>)}</div>
     }</motion.div>
          
        }
        </li>
        )
        }
        </ul>
        </div>
{/* button ======================================== */}
<div className="hidden lg:flex">
  <Button name="Get Started" styleType="primary" ></Button>
</div>

</nav>
   
  )
}
