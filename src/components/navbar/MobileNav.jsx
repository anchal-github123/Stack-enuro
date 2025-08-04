import { NavLink } from "react-router-dom";
import { ChevronDown, AlignJustify, X } from "lucide-react";
import { useState } from "react";
import {motion} from "motion/react"
import Button from "../Button";
export default function MobileNav({ navitems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickCheck,setClickCheck]=useState(null);

  const showMobileSubMenu={
    entry:{
        opacity:1,
        display:"flex",
         transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
    },
    exit:{
        opacity:0,
        display:"none",
         transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
    }
  }

  return (
    <>
      <motion.div
        whileTap={{ scale: 0.8 }} // pressed effect
  animate={{ rotate: mobileOpen ? 90 : 0 }} // optional rotation
  transition={{ duration: 0.3 }}
       className="cursor-pointer" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <AlignJustify />}
      </motion.div>

      {mobileOpen && (
        <motion.div 
          initial={{ x: "-100%", opacity: 0 }}
  animate={{ x: "0%", opacity: 1 }}
  exit={{ x: "-100%", opacity: 0 }}
  transition={{type: "spring", stiffness: 300, damping: 30 }}
       
        className="absolute left-0 top-16 px-5 w-full backdrop-blur-3xl z-20 flex flex-col gap-5">
          <ul className="flex flex-col gap-4">
            {navitems.map((item, index) => (
              <motion.li
                key={index}
                onTapStart={() => setClickCheck(prev => (prev === index ? null : index))}
                onTapCancel={()=>setClickCheck(null)}
                className="relative flex flex-col gap-2 cursor-pointer hover:bg-blue-200 p-3 rounded-3xl"
              >
                <div className="flex items-center justify-between">
                  <NavLink to={item.path}>{item.name}</NavLink>
                  {item.child && <ChevronDown className="inline" />}
                </div>

                {/* Submenu */}
                {item.child && item.submenu && (
                  <motion.ul 
                  initial="exit"
                  animate={clickCheck==index?"entry":"exit"}
                  variants={showMobileSubMenu}
                 
                 transition={{ type: "spring", stiffness: 300 }}
                  className="ml-4 flex flex-col gap-2  ">
                    {item.submenu.map((subitem, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-50 rounded-4xl px-2">
                        <NavLink to={subitem.path}>{subitem.name}</NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            ))}
          </ul>
          <Button name="Get Started" styleType="primary"></Button>
        </motion.div>
      )}
    </>
  );
}
