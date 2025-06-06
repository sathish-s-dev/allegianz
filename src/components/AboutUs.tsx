import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white flex min-h-[674px] max-w-full w-[1514px] flex-col items-center text-[rgba(34,34,34,1)] justify-center px-[92px] py-[89px] max-md:px-5">
      <div className="w-[1110px] max-w-full">
        <div className="flex w-full items-center gap-[9px] font-[450] flex-wrap">
          <div className="flex min-w-60 flex-col items-stretch text-base leading-[0.9] w-[277px] pt-2 px-0.5">
            <div className="bg-[rgba(34,34,34,1)] flex w-[273px] shrink-0 max-w-full h-px" />
            <div className="mt-2">Who we are</div>
          </div>
          <h2 className="text-[40px] leading-[58px] tracking-[-1.15px] w-[807px] max-md:max-w-full">
            20 Years of Advisory for Businesses Excellence.
          </h2>
        </div>
        
        <div className="text-[32px] font-light leading-[44px] tracking-[-1.15px] max-md:max-w-full">
          <p>
            We offering business and financial consulting services, ranging
            from turnkey solutions to startups, greenfield projects, and early
            stage revenue companies, all the way to medium sized enterprises,
            mid-segment M&As, and non-executive board room solutions.
          </p>
          <br />
          <br />
          <p>
            Founded in 2005, we are committed to delivering actionable
            solutions that drive growth, enhance efficiency, and improve
            overall business performance. Whether you are looking to expand
            into new markets, optimize operations, or navigate complex
            corporate challenges, we work alongside our clients to deliver
            measurable results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
