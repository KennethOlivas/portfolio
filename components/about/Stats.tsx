import { Reveal } from "@components/utils/Reveal";
import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" className="text-indigo-500" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip ">TypeScript</span>
            <span className="chip">Python</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">React</span>
            <span className="chip">React Native</span>
            <span className="chip">NextJS</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">GitHub</span>
            <span className="chip">Asana</span>
            <span className="chip">Firebase</span>
            <span className="chip">AWS</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" className="text-indigo-500" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Rust</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Go</span>
            <span className="chip">Figma</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Python</span>
            <span className="chip">FastAPI</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
