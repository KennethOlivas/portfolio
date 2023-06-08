"use client";
import type { NextPage } from "next";
import SocialIcons from "@components/SocialIcons/SocialIcons";
import { Hero } from "@components/Hero";
import About from "@components/about";
import Background from "@/components/Background";
import Image from "next/image";
import CustomCursor from "@/components/utils/CustomCursor";
import { SectionHeader } from "@/components/utils/SectionHeader";
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/utils/Reveal";
import { Gallery } from "@/components/Gallery";
import {
  Todo,
  Colors,
  Availability,
  Music,
  SchedulingLinks,
  Team,
} from "@/components/features/card";
import { OtherVisual, MusicVisual } from "@/components/features/visual";
import { stagger, useAnimate } from "framer-motion";
import { useFeatureStore } from "@/components/features/store";
import { useHidePageOverflow } from "@/lib/toggle-page-overflow";
import { useEscapePress } from "@/lib/use-escape-press";
import { FeatureTitle } from "@/components/features/title";

const features = [
  {
    title: "Happyly",
    id: "Happyly",
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: "Return on Demand",
    id: "RoD",
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: "Fable",
    id: "FB",
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: "Simple Tic Tac Toe",
    id: "tic-tac-toe",
    card: Music,
    visual: MusicVisual,
  },
  {
    title: "Inventary Control",
    id: "inventary-control",
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: "Project 6",
    id: "team",
    card: Team,
    visual: OtherVisual,
  },
];

const Home: NextPage = () => {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  console.log(!!fullscreenFeature);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);

  return (
    <>
      <CustomCursor />
      <Hero />
      <div>
        <About />
      </div>
      <section id="about" className="section-wrapper max-w-[1700px]">
        <SectionHeader title="Proyects" dir="l" />
      </section>

      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg">
          Back to site
        </button>
        <div className="flex w-full items-start">
          <div className="w-full pb-[50vh] pt-[30vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 flex h-screen w-full items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-transparent [&:has(>_.active-card)]:bg-transparent transition-all">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <SocialIcons />

      <Background />
    </>
  );
};

export default Home;
