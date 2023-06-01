import { Reveal } from "@components/utils/Reveal";
import { SectionHeader } from "../utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

const About = () => {
  return (
    <section id="about" className="section-wrapper max-w-[1700px]">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} text-lg text-justify`}>
              Hi there, I go by the name Kenneth Alexander Olivas Baldizon, and
              I hail from Nicaragua. My professional focus lies in the realm of
              web and mobile application development as a software engineer. My
              background boasts extensive expertise in constructing resilient
              and user-friendly applications.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText} text-lg text-justify`}>
              When I&apos;m not immersed in my work, I find tremendous delight
              and inspiration in the realm of video games, anime, and music.
              Immerse myself in virtual realms and exploring captivating
              storylines through these mediums brings me immense joy.
              Additionally, I find solace and enhanced productivity in my work
              by indulging in various music genres.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText} text-lg text-justify`}>
              During my leisure time, I cherish the company of friends and the
              opportunity to embark on thrilling adventures, uncovering
              uncharted territories and sampling novel cuisines. The act of
              immersing myself in diverse cultures and experiences serves to
              expand my horizons and create enduring memories and stronger
              bonds.
            </p>
          </Reveal>
          <Reveal>
            <p className={`${styles.aboutText} text-lg text-justify`}>
              As a software engineer, I firmly believe in the importance of
              continuous learning and staying updated with the latest industry
              technologies. I relentlessly pursue avenues for knowledge
              expansion and skill refinement. Armed with my expertise and
              unwavering enthusiasm, I strive to fashion innovative and
              impactful solutions that elevate the user experience.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default About;
