import classNames from "classnames";
import { useFeatureStore } from "./store";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Gallery } from "../Gallery";
import Image from "next/image";
import styles from "./../about/stats.module.scss";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

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
      <div className="px-4">{children}</div>
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
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className="w-full items-center min-h-screen flex justify-around relative px-5 space-x-24 ">
          <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter top-0  left-0 opacity-75"></div>
          <div className=" relative">
            <h1 className=" text-4xl md:text-6xl font-bold text-left uppercase">
              Tic Tac Toe
            </h1>
            <p className="max-w-md text-lg md:text-xl text-left my-9">
              Leveraging Next.js, Tailwind CSS, and TypeScript for a Tic Tac Toe
              app offers benefits like faster loading, seamless transitions,
              efficient styling, type safety, and improved code quality. Next.js
              ensures quick game startup and smooth screen navigation, while
              Tailwind CSS simplifies styling with utility classes and
              responsive design support. TypeScript catches errors, enhances
              productivity, and simplifies code maintenance. Together, these
              technologies create a smoother user experience and streamline app
              development.
            </p>
            <div className="flex justify-between my-5 space-x-8 font-semibold ">
              <Link
                href="https://tictactoe-three-virid.vercel.app"
                target="_blank"
                className="bg-white text-black rounded-lg px-4 py-2 text-lg  text-center w-full hover:text-white hover:bg-black transition-all duration-200">
                See Live
              </Link>
              <button className="flex space-x-4 justify-evenly items-center border-2 border-neutral-700 text-neutral-700 rounded-lg px-4 py-2 text-lg w-full hover:border-white hover:text-white text-center transition-all duration-200">
                <p>Code</p>
                <AiFillGithub />
              </button>
            </div>
          </div>
          <div
            className="flex flex-col rounded-xl border border-gray-500  p-4 relative"
            style={{
              borderImageSource:
                "linear-gradient(168.82deg, #37ff91 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1bb2de 99.52%)",
              backdropFilter: "blur(1114px)",
              background:
                "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)",
            }}>
            <div className="bg-[#37ff91] h-[200px] w-[200px] absolute rounded-full blur-[120px] filter top-0  right-48 opacity-75"></div>

            <div className="relative">
              <div className="flex mx-auto">
                <Image
                  src="/images/tictactoe.webp"
                  width={1200}
                  height={1200}
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.statGrid} mt-4`}>
              <span className="chip">Nextjs</span>
              <span className="chip">Tailwind</span>
              <span className="chip">Nextjs</span>
              <span className="chip">Framer motion</span>
            </div>

            <div className="bg-[#FB37FF] h-[200px] w-[200px] absolute rounded-full blur-[320px] filter bottom-0  right-0 opacity-75"></div>
          </div>
        </div>
      </motion.div>
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
