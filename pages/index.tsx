import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Header from '@components/Header';
import Hero from '@components/Hero/Hero';
import dynamic from 'next/dynamic';
import VoxelDogLoader from '@components/Room/loader';
import Voxel from '@components/Room/vox';
import About from '@components/About/About';

const inter = Inter({ subsets: ['latin'] });

const LazyRenderObject = dynamic(() => import('@components/Room/vox'), {
  ssr: false,
  loading: () => <Voxel />,
});

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      <Head>
        <title>Kenneth Olivas</title>
        <meta
          name="description"
          content="Software Developer Kenneth Olivas B. Portfolio"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

      {/* hero */}
      <section id="hero" className="snap-center">
        <Hero
          words={[
            'Hi, My name is Kenneth',
            'Game mode on',
            'Nicaragua',
            'I ❤️ Ramen',
          ]}
        />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
