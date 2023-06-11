import React, { useEffect } from "react";
import { SectionHeader } from "../utils/SectionHeader";
import { FeatureTitle } from "./features/title";
import { useHidePageOverflow } from "@/lib/toggle-page-overflow";
import { useEscapePress } from "@/lib/use-escape-press";
import { useAnimate, stagger } from "framer-motion";
import { useFeatureStore } from "./features/store";
import { CardImage } from "./features/card";
import ProyectView from "./ProyectView";

const features = [
  {
    title: "Happyly",
    id: "Happyly",
    card: <CardImage id="Happyly" image="/images/happyly.webp" />,
    visual: (
      <ProyectView
        id="tic-tac-toe"
        title="Tic Tac Toe"
        description="Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development."
        image="/images/tictactoe.webp"
        stack={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
        github="https://github.com/KennethOlivas/tictactoe"
        link="https://tictactoe-three-virid.vercel.app"
      />
    ),
  },
  {
    title: "Return on Demand",
    id: "RoD",
    card: <CardImage id="RoD" image="/images/rod.webp" />,
    visual: (
      <ProyectView
        id="tic-tac-toe"
        title="Tic Tac Toe"
        description="Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development."
        image="/images/tictactoe.webp"
        stack={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
        github="https://github.com/KennethOlivas/tictactoe"
        link="https://tictactoe-three-virid.vercel.app"
      />
    ),
  },
  {
    title: "Fable",
    id: "FB",
    card: <CardImage id="FB" image="/images/fable.webp" />,
    visual: (
      <ProyectView
        id="tic-tac-toe"
        title="Tic Tac Toe"
        description="Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development."
        image="/images/tictactoe.webp"
        stack={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
        github="https://github.com/KennethOlivas/tictactoe"
        link="https://tictactoe-three-virid.vercel.app"
      />
    ),
  },
  {
    title: "Simple Tic Tac Toe",
    id: "tic-tac-toe",
    card: <CardImage id="tic-tac-toe" image="/images/tictactoe.webp" />,
    visual: (
      <ProyectView
        id="tic-tac-toe"
        title="Tic Tac Toe"
        description="Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development."
        image="/images/tictactoe.webp"
        stack={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
        github="https://github.com/KennethOlivas/tictactoe"
        link="https://tictactoe-three-virid.vercel.app"
      />
    ),
  },
  {
    title: "Inventary Control",
    id: "inventary-control",
    card: <CardImage id="inventary-control" image="/images/inventary.webp" />,
    visual: (
      <ProyectView
        id="tic-tac-toe"
        title="Tic Tac Toe"
        description="Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development."
        image="/images/tictactoe.webp"
        stack={["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]}
        github="https://github.com/KennethOlivas/tictactoe"
        link="https://tictactoe-three-virid.vercel.app"
      />
    ),
  },
];

const Proyects = () => {
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
    <div>
      <section id="proyects" className="section-wrapper max-w-[1700px]">
        <SectionHeader title="Proyects" dir="l" />
      </section>
      <div ref={scope}>
        {features.map((feature) => (
          <div key={feature.id}>{feature.visual}</div>
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
              {features.map((feature) => ({ ...feature.card }))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
