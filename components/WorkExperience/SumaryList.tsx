import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';

type Props = {
  list: Array<string>;
};

const ListContainerAnimation: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const ListItemAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SumaryList: FC<Props> = ({ list }) => {
  return (
    <motion.ul
      variants={ListContainerAnimation}
      whileInView={{ opacity: 1 }}
      initial="hidden"
      animate="visible"
      className="list-disc space-y-4 ml-5 text-lg"
    >
      {list.map((item) => (
        <motion.li key={item} variants={ListItemAnimation}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default SumaryList;
