import { useContext, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { AnimatedCursorContext } from "@/context/AnimatedCursorManager";
const CustomCursor = () => {
  const { cursorType } = useContext(AnimatedCursorContext);
  console.log(cursorType);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);
  return (
    <motion.div
      className={`${cursorType} duration-100 transition-all ease-linear`}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default CustomCursor;
