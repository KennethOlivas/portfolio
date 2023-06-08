import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";
import { Reveal } from "../utils/Reveal";
import dynamic from "next/dynamic";

type Props = {
  children: React.ReactNode;
  id: string;
};

const isBrowser = typeof window !== "undefined";

const FeatureTitle = ({ children, id }: Props) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const documentRef = useRef(document);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    root: documentRef as any,
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return isBrowser ? (
    <Reveal>
      <p
        onClick={() => setFullscreenFeature(id)}
        ref={ref}
        className={classNames(
          "feature-title py-16 font-heading text-8xl transition-colors duration-200 text-justify px-0 md:pl-4 ",
          isInView
            ? "text-indigo-500 hover:text-indigo-500"
            : "text-neutral-700 hover:text-neutral-400"
        )}>
        {children}
      </p>
    </Reveal>
  ) : null;
};

const DynamicFeatureTitle = dynamic(() => Promise.resolve(FeatureTitle), {
  ssr: false,
});

export { DynamicFeatureTitle as FeatureTitle };
