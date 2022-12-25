import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/jobitx.jpg"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Frontend Developer</h4>
        <p className="font-bold text-2xl mt-1">Sub</p>
        <div className="flex space-x-2 my-2"></div>
        <p>Started work... -- Ended....</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
