import {motion} from "motion/react";
import { NavLink } from "react-router-dom";
import { ChevronDown} from 'lucide-react';
import { useState } from "react";
export default function DesktopNav({navitems}) {
const [activeIndex, setActiveIndex] = useState(null);
const subMenuShow = {
    entry: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.3 },
      transitionEnd: { display: "none" }
    }
};
  return (
    <div>
    <ul className="flex items-center gap-11 text-[1rem] font-subheading">
          {navitems.map((item, index) => (
            <motion.li
              key={item.name}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="hover:text-primary flex items-center justify-center relative group">
              <NavLink to={item.path}>{item.name}</NavLink>
              <span className="inline-flex mt-1">
                {item.child ? (
                  <ChevronDown className="group-hover:rotate-180 duration-200" />
                ) : null}
              </span>

              {item.child && item.submenu && (
                <motion.div
                  initial="exit"
                  animate={activeIndex === index ? "entry" : "exit"}
                  variants={subMenuShow}
                  className="absolute top-[2.1rem] left-0 bg-blue-50 border px-7 py-2 rounded shadow-md z-10 w-[13rem]">
                  <div className="flex flex-col gap-2">
                    {item.submenu.map((subitem) => (
                      <NavLink  key={subitem.name} to={subitem.path} className="hover:text-gray-600">{subitem.name}</NavLink>
                    ))}
                  </div>
                </motion.div>
              )} 
            </motion.li>
          ))}
        </ul>
     </div>
  )
}
