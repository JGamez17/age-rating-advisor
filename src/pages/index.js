import Head from 'next/head';
import { Theme } from '@radix-ui/themes';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import AppLibrary from '@/components/sections/AppLibrary';
import ParentForum from '@/components/sections/ParentForum';
import Wellbeing from '@/components/sections/Wellbeing';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <Theme appearance="light">

      <Header />
      <main>
        <Hero />
        <Features />
        <AppLibrary />
        <ParentForum />
        <Wellbeing />
        <FAQ />
      </main>
      <Footer />
    </Theme>
  );
}