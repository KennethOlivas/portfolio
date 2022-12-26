import About from '@components/About/About';
import Header from '@components/Header';
import Hero from '@components/Hero/Hero';
import WorkExperience from '@components/WorkExperience/WorkExperience';
import Head from 'next/head';

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

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
    </div>
  );
}
