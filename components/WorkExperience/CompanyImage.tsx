import { motion } from 'framer-motion';
import React, { FC } from 'react';

type Props = {
  src: string;
};

const CompanyImage: FC<Props> = ({ src }) => {
  return (
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
      src={src}
      alt="company"
    />
  );
};

export default CompanyImage;
