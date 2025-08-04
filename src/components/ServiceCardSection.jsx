import { ITServices, otherServices } from "../utils/ServicesData";
import ServiceCard from "./ServiceCard";
import { motion, useAnimation } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function ServiceCardSection({ data }) {
  const services = data === "IT" ? ITServices : otherServices;

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      ref={ref}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <ServiceCard service={service} />
        </motion.div>
      ))}
    </div>
  );
}
