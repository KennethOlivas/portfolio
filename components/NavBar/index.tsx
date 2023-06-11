"use client";
import styles from "./navBar.module.scss";
import type { FC } from "react";
import OutlineButton from "../buttons/OutlineButton";
import { motion } from "framer-motion";
import Link from "next/link";
import { useFeatureStore } from "../Proyects/features/store";

const item = {
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
      delay: 1.2,
    },
  },
};

const NavBar: FC = () => {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  return (
    <motion.header
      className={`${
        fullscreenFeature !== null || inViewFeature !== null
          ? "hidden"
          : styles.heading
      }`}
      variants={item}>
      <div className="flex space-x-6">
        <motion.span
          whileHover={{ transform: "translateY(-100%)" }}
          transition={{
            duration: 0.5,
            type: "Tween",
            ease: "easeOut",
          }}>
          Home
        </motion.span>

        <Link href="#about">About</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
      <OutlineButton>
        <Link href="https://kenneth-olivas-resume.vercel.app/" target="_blank">
          My resume
        </Link>
      </OutlineButton>
    </motion.header>
  );
};

export default NavBar;
