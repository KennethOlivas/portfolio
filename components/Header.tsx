import { motion } from 'framer-motion';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="hover:bg-neutral-700 rounded-full duration-200"
          url="https://github.com/KennethOlivas"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
        <SocialIcon
          className="hover:bg-neutral-700 rounded-full duration-200"
          url="https://www.linkedin.com/in/kenneth-olivas-027153208/"
          bgColor="transparent"
          fgColor="gray"
          target="_blank"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="text flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" bgColor="transparent" fgColor="gray" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
