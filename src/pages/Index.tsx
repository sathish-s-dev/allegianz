import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBrands from '@/components/TrustedBrands';
import AboutUs from '@/components/AboutUs';
import OurExpertise from '@/components/OurExpertise';
import OurApproach from '@/components/OurApproach';
import Testimonials from '@/components/Testimonials';
import LiaisonServices from '@/components/LiaisonServices';
import ServicesShowcase from '@/components/ServicesShowcase';
import Team from '@/components/Team';
import Partnerships from '@/components/Partnerships';
import ProjectWorkflow from '@/components/ProjectWorkflow';
import InsightHub from '@/components/InsightHub';
import GlobalPresence from '@/components/GlobalPresence';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col items-stretch pb-[10375px] px-0.5 max-md:pb-[100px]">
      <div className="flex w-full flex-col items-center max-md:max-w-full">
        <Header />
        <Hero />
        <TrustedBrands />
        <AboutUs />
        <OurExpertise />
        <OurApproach />
        <Testimonials />
        <LiaisonServices />
        <ServicesShowcase />
        <Team />
        <Partnerships />
        <ProjectWorkflow />
        <InsightHub />
        <GlobalPresence />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
