import { StandardButton } from "../buttons/StandardButton";
import { Reveal } from "../utils/Reveal";
import styles from "./hero.module.scss";
import Lottie from "lottie-react";
import programmingComputer from "@/lib/programmingComputer.json";

export const Hero = () => {
  return (
    <section
      className={`flex justify-center items-center space-x-4 flex-col lg:flex-row p-2 h-screen lg:pb-48`}>
      <div>
        <Reveal>
          <h1 className={`${styles.title} text-2xl md:text-6xl`}>
            Hey, I&apos;m Kenneth Olivas<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={`${styles.subTitle} text-lg md:text-3xl`}>
            I&apos;m a <span>Full Stack Developer</span>
          </h2>
        </Reveal>
        <Reveal>
          <p
            className={`${styles.aboutCopy} tracking-wider text-lg text-justify`}>
            I’m Kenneth Olivas, a{" "}
            <span className="underline decoration-pink-600 font-semibold">
              Software Engineer.
            </span>{" "}
            I’ve been developing webs applications, using programing languajes
            like{" "}
            <span className="underline decoration-indigo-600 font-semibold">
              Typescript
            </span>{" "}
            and{" "}
            <span className="underline decoration-indigo-600 font-semibold">
              Python
            </span>
            . I am looking for an opportunity to grow as a developer in web
            application development companies. Able to effectively self-manage
            during independent projects as well as collaborate in a team
            setting.
          </p>
        </Reveal>
        <Reveal>
          <StandardButton
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView()
            }>
            Contact me
          </StandardButton>
        </Reveal>
      </div>
      <Reveal>
        <div className="scale-110 md:left-12 lg:left-24 relative">
          <Lottie animationData={programmingComputer} />
        </div>
      </Reveal>
    </section>
  );
};
