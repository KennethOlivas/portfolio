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

const Home: NextPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <CustomCursor />
      <Hero />
      <div>
        <About />
      </div>
      <section id="about" className="section-wrapper max-w-[1700px]">
        <SectionHeader title="Proyects" dir="l" />
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <Reveal width="100%">
              <Card
                id="1"
                title="loren ipsum"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
              />
            </Reveal>
          </div>
          <div className="col-span-3">
            <Reveal width="100%">
              <Card
                id="2"
                title="loren ipsum"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
              />
            </Reveal>
          </div>
          <div className="col-span-6">
            <Reveal width="100%">
              <Card
                id="3"
                title="loren ipsum"
                subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <SocialIcons />

      <Background />
    </>
  );
};

export default Home;
