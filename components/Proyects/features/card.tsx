import classNames from "classnames";
import { useFeatureStore } from "./store";
import Image from "next/image";
import { FC } from "react";

type FeatureCardProps = {
  gradient: string;
  children: React.ReactNode;
  id: string;
};

interface CardProps {
  id: string;
  image: string;
}

const FeatureCard = ({ gradient, children, id }: FeatureCardProps) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}>
      <div
        className={classNames(
          "gradient absolute inset-0 origin-bottom-left rounded-2xl bg-gradient-to-br",
          gradient
        )}
      />
      {children}
    </div>
  );
};

export const CardImage: FC<CardProps> = ({ id, image }) => {
  const fullscreenFeature = useFeatureStore((store) => store.fullscreenFeature);
  const isFullscreen = fullscreenFeature === id;
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  return (
    <FeatureCard id={id} gradient="from-[#a78afe] to-[#adf8ff]">
      <Image
        onClick={() => setFullscreenFeature(id)}
        className={classNames(
          "bg-cover rounded-xl shadow-lg transition-transform w-full h-full object-cover",
          isFullscreen ? "scale-0 hidden" : "scale-100"
        )}
        src={image}
        width={1500}
        height={1500}
        alt=""
      />
    </FeatureCard>
  );
};
