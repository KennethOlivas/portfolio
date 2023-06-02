"use client";
import type { NextPage } from "next";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import { Hero } from "@components/Hero";
import About from "@components/about";
import Background from "@/components/Background";
import { ScrollerMotion } from "scroller-motion";

const Home: NextPage = () => {
  return (
    <ScrollerMotion>
      <div className="mt-24">
        <Background />
        <Hero />
        <About />
        <SocialIcons />
      </div>
    </ScrollerMotion>
  );
};

export default Home;
