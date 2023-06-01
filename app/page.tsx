"use client";
import type { NextPage } from "next";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import { Hero } from "@components/Hero";
import About from "@components/about";
import Background from "@/components/Background";

const Home: NextPage = () => {
  return (
    <div>
      <Background />
      <Hero />
      <About />
      <SocialIcons />
    </div>
  );
};

export default Home;
