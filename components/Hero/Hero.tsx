import React, { FC } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircle from '@components/Hero/BackgroundCircle';
import dynamic from 'next/dynamic';
import { Spinner } from '@components/Room/loader';
import Link from 'next/link';
import FooterButtons from './FooterButtons';

type Props = {
  words: string[];
};

const LazyRenderProfileImage = dynamic(() => import('@components/Profile'), {
  loading: () => <Spinner />,
});

const Hero: FC<Props> = ({ words }) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-48">
      <BackgroundCircle />
      <LazyRenderProfileImage />
      <div className="z-20">
        <h1 className="text-2xl tracking-[24px] bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-pulse capitalize">
          Software developer
        </h1>
        <h1 className="text-5xl lg:text-6xl px-10 py-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <span className="mr-3 text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-2 capitalize">
            {text}
          </span>
          <Cursor cursorColor="#e76f51" />
        </h1>
        <FooterButtons />
      </div>
    </div>
  );
};

export default Hero;
