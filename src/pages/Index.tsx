import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';
import GlobalPresence from '@/components/GlobalPresence';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InsightHub from '@/components/InsightHub';
import LiaisonServices from '@/components/LiaisonServices';
import OurApproach from '@/components/OurApproach';
import OurExpertise from '@/components/OurExpertise';
import Partnerships from '@/components/Partnerships';
import ProjectWorkflow from '@/components/ProjectWorkflow';
import React from 'react';
import ServicesShowcase from '@/components/ServicesShowcase';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import TrustedBrands from '@/components/TrustedBrands';

const Index = () => {
  return (
    <div className="flex flex-col items-stretch px-0.5 max-md:pb-[100px]">
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
