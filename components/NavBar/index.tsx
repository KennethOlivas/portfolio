"use client";
import styles from "./navBar.module.scss";
import type { FC } from "react";
import OutlineButton from "../buttons/OutlineButton";

import Link from "next/link";

const NavBar: FC = () => {
  return (
    <header className={`${styles.heading}`}>
      <div className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
        <Link href="/">Home</Link>
      </div>
      <OutlineButton>
        <Link href="https://kenneth-olivas-resume.vercel.app/" target="_blank">
          My resume
        </Link>
      </OutlineButton>
    </header>
  );
};

export default NavBar;
