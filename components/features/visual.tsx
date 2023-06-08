import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Gallery } from "../Gallery";

type Props = {
  id: string;
};

type VisualProps = {
  children: React.ReactNode;
} & Props;

const Visual = ({ children, id }: VisualProps) => {
  return (
    <div
      className={classNames(
        "pointer-events-none fixed inset-0 flex items-center justify-center opacity-0",
        `visual-${id}`
      )}>
      <div className="max-w-6xl px-4">{children}</div>
    </div>
  );
};

export const MusicVisual = ({ id }: Props) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isFullscreen]);

  return (
    <Visual id={id}>
      <Gallery />
      {isFullscreen && (
        <motion.div
          className="flex flex-col space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <h1 className="text-2xl">test</h1>
          <p>description</p>
        </motion.div>
      )}
    </Visual>
  );
};

export const OtherVisual = ({ id }: Props) => {
  return (
    <Visual id={id}>
      <img src="/window-spotify.webp" />
    </Visual>
  );
};
