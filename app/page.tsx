"use client";
import type { NextPage } from "next";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import { Hero } from "@components/Hero";
import About from "@components/about";
import Background from "@/components/Background";
import Image from "next/image";
import CustomCursor from "@/components/utils/CustomCursor";
import { stagger, useAnimate } from "framer-motion";
import { useFeatureStore } from "@/components/Proyects/features/store";
import { useHidePageOverflow } from "@/lib/toggle-page-overflow";
import { useEscapePress } from "@/lib/use-escape-press";
import { FeatureTitle } from "@/components/Proyects/features/title";
import NavBar from "@/components/NavBar";
import AnimatedCursorProvider from "@/context/AnimatedCursorManager";
import Proyects from "@/components/Proyects";

const Home: NextPage = () => {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  return (
    <AnimatedCursorProvider>
      <NavBar />
      <CustomCursor />
      <Hero />
      <div>
        <About />
      </div>
      <Proyects />
      {!fullscreenFeature && <SocialIcons />}

      <Background />
    </AnimatedCursorProvider>
  );
};

export default Home;
