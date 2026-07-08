import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedCounter({ from = 0, to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Create a spring animation for the counter
  const spring = useSpring(from, { bounce: 0, duration: 2500 });
  
  // Transform the spring value to a rounded integer + suffix
  const display = useTransform(spring, (current) => Math.round(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, spring, to]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
