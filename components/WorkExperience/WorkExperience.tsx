import ExperienceCard from '@components/WorkExperience/ExperienceCard';
import { motion } from 'framer-motion';
import React from 'react';

const WorkExperience = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col space-y-12 text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="title-section">Experiecne</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
