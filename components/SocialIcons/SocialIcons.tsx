import styles from "./socialIcons.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { GITHUB, LIKENEDIN } from "@/constants/SocialLinks";
import { useEffect, useRef } from "react";

const SocialIcons = () => {
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
    <div
      ref={ref}
      className={`${styles.links} flex justify-center py-3 space-x-10`}>
      <motion.span
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.25 }}>
        <Link href={LIKENEDIN} target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.25 }}>
        <Link href={GITHUB} target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};

export default SocialIcons;
