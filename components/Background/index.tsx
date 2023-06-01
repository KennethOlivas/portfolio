import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Background = () => {
  const mainControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 3.3, delay: 0.25 }}
      className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] w-[36.125rem] -translate-x-1/2 animate-pulse-slow">
        <div className="h-[36.125rem] w-[36.125rem] rounded-full bg-gradient-to-tr from-orange-700 to-orange-700 opacity-80"></div>
        <div className="h-[36.125rem] w-[36.125rem] rounded-full bg-gradient-to-tr from-slate-500 via-purple-500 to-indigo-500 opacity-40"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-slate-500 to-indigo-500 opacity-20"></div>
      </div>
    </motion.section>
  );
};

export default Background;
