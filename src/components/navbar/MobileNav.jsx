import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown, AlignJustify, X } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../Button";

export default function MobileNav({ navitems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [clickCheck, setClickCheck] = useState(null);
  const navigate = useNavigate();

  const showMobileSubMenu = {
    entry: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      display: "none",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.div
        whileTap={{ scale: 0.8 }}
        animate={{ rotate: mobileOpen ? 90 : 0 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer z-30 relative"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={28} /> : <AlignJustify size={28} />}
      </motion.div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute left-0 top-16 px-5 w-full backdrop-blur-3xl z-20 flex flex-col gap-5"
        >
          <ul className="flex flex-col gap-4">
            {navitems.map((item, index) => (
              <motion.li
                key={index}
                onTapStart={() => {
                  if (!item.child) {
                    navigate(item.path);
                    setMobileOpen(false);
                  } else {
                    setClickCheck(prev => (prev === index ? null : index));
                  }
                }}
                onTapCancel={() => setClickCheck(null)}
                className="relative flex flex-col gap-2 cursor-pointer hover:bg-blue-200 p-3 rounded-3xl"
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {item.child && <ChevronDown className="inline" />}
                </div>

                {/* Submenu */}
                {item.child && item.submenu && (
                  <motion.ul
                    initial="exit"
                    animate={clickCheck === index ? "entry" : "exit"}
                    variants={showMobileSubMenu}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="ml-4 flex flex-col gap-2"
                  >
                    {item.submenu.map((subitem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={subitem.path}
                        className="block"
                        onClick={() => setMobileOpen(false)}
                      >
                        <li className="hover:bg-gray-50 rounded-4xl px-5 py-1 cursor-pointer">
                          {subitem.name}
                        </li>
                      </NavLink>
                    ))}
                  </motion.ul>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <Button name="Get Started" styleType="primary" />
        </motion.div>
      )}
    </>
  );
}
