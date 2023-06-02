import styles from "./header.module.scss";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const expandLine = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
  },
};

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className={`${styles.sectionHeader}`}
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}>
      <motion.div
        variants={expandLine}
        initial="initial"
        animate="animate"
        transition={{
          duration: 1,
          type: "just",
          ease: "easeInOut",
        }}
        className={styles.line}
      />
      <h3>
        <Reveal>
          <>
            <span className={`${styles.title} text-4xl`}>
              {title}
              <span>.</span>
            </span>
          </>
        </Reveal>
      </h3>
    </div>
  );
};
