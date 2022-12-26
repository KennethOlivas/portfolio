import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="title-section">About</h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/profile.jpg"
        className="-mb-36 mt-12 md:mb-0 flex-shrink-0 h-32 w-32 sm:mt-0 sm:w-56 sm:h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]
         transition-all duration-500"
      />
      <div className="space-y-4 md:space-y-8 mt-12 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          My
          <span className="underline decoration-violet-600/50 font-bold tracking-wider ml-2">
            Background
          </span>
        </h4>
        <p className="text-base md:text-lg lg:text-xl md:text-justify">
          Hi, my name is Kenneth and I&apos;m a fullstack software engineer from
          Nicaragua. I have a strong background in computer science and have
          experience in a variety of programming languages and frameworks. In my
          current role, I work remotely and have expertise in technologies such
          as React Native, Next.js, and Tailwind. I also have a passion for
          devops and have experience using tools like Python to automate and
          optimize processes.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
