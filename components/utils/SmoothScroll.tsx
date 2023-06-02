import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  FC,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  // scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0);

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current!);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="scroll-container">
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
