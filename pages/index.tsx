import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Footer from '../components/organisms/Footer';
import MainBanner from '../components/organisms/MainBanner';
import Navbar from '../components/organisms/Navbar';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import TransactionStep from '../components/organisms/TransactionStep';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>NozaStore - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:title" content="NozaStore - Get a New Experience in Gaming" />
        <meta property="og:description" content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati" />
        <meta property="og:image" content="https://image" />
        <meta property="og:url" content="https://nozastore.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
