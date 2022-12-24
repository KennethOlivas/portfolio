import { motion } from 'framer-motion';
import React from 'react';

const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#3c3b46] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full absolute border border-[#3c3b46] h-[300px] w-[300px] mt-52" />
      <div className="rounded-full absolute border border-[#3c3b46] h-[500px] w-[500px] mt-52" />
      <div className="rounded-full absolute border border-r-purple-400 border-b-purple-400 border-t-pink-600 border-l-pink-600 opacity-20 h-[650px] w-[650px] mt-52 animate-pulse " />
      <div className="rounded-full border border-[#3c3b46] h-[800px] w-[800px] mt-52 absolute" />
    </motion.div>
  );
};

export default BackgroundCircle;
