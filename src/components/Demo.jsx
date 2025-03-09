import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Demo.css";

export function AnimatedSection({ children }) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -5 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1, rotate: 0 } : { opacity: 0, y: 50, scale: 0.9, rotate: -5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="section"
      >
        <h2>{children}</h2>
      </motion.div>
    );
  }