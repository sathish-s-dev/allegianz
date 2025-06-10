import React from "react";

const OurExpertise = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/75561445573f4a1bbc9ec7919929d3a8f2f9c14f?placeholderIfAbsent=true",
      title: "Strategic Advisory",
      description:
        "Turn insights into impact. We align your vision with market intelligence, competitive analysis, and long-term growth strategy.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/eabd61f30a2649113ceabba242595e11faacb3d5?placeholderIfAbsent=true",
      title: "Mergers & Acquisitions",
      description:
        "Define the project goals, create a timeline & milestones, and build a team based on your development requirements.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/4c82bae2d4c0da8401d9df18e8ef089bb8fd7a66?placeholderIfAbsent=true",
      title: "Financial Advisory",
      description:
        "Smarter financial decisions.Get expert support in capital raising, restructuring, investments, and risk management.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/662ffb584e7f5ba97bb3965c4e4f3c83c2390678?placeholderIfAbsent=true",
      title: "Liquidity Solutions",
      description:
        "Funding that fits.Connect with global investors, VCs, and sovereign funds to unlock tailored equity or debt financing",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/48a3aca578db6e8cb5eaf25f0ef4ce2b44f43bda?placeholderIfAbsent=true",
      title: "Operational Efficiency",
      description:
        "Do more with less.We help streamline operations, eliminate inefficiencies, and drive measurable cost savings.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/f3239ad2d8af517b1dd12011e8dc58b92b69d8fa?placeholderIfAbsent=true",
      title: "Corporate Restructuring",
      description:
        "Navigate business challenges.Get expert, external guidance to restructure distressed businesses and preserve long-term value.",
    },
  ];

  return (
    <section id="expertise" className="max-w-full w-[1514px] scroll-mt-8">
      <div className="flex flex-col relative min-h-[90vh] py-12 w-full overflow-hidden items-center justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9cd7ef04077227d7b41fd83a0d0fda17e31bff8f?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />

        <div className="relative w-[1328px] max-md:px-4 grid md:grid-cols-4 gap-4 max-w-full items-center">
          <div className="flex flex-col min-h-[500px] justify-end md:items-end shadow-[0px_0px_2px_rgba(0,0,0,0.12)] row-span-2 relative h-full overflow-hidden  rounded-[25px] min-w-60 gap-2.5 w-full pb-5 px-[25px] bg-white max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9f9d822a0f1c137140347e9ea76b071b057c6624?placeholderIfAbsent=true"
              alt="Expertise Background"
              className="absolute h-full w-full object-cover inset-0 rounded-[25px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-[25px]" />

            <div className="relative z-10 min-w-60 w-[266px]">
              <h2 className="text-white text-[56px] font-semibold leading-[67px] tracking-[-1.65px] max-md:text-4xl max-md:leading-[54px]">
                Our Expertise
              </h2>
              <p className="text-[rgba(220,238,248,1)] text-base font-normal leading-[25px] tracking-[-0.49px] mt-[15px]">
                We tailor our services to your business's unique needs, whether
                you're exploring growth opportunities, facing restructuring
                challenges, or seeking strategic guidance. Our expertise
                includes a wide range of solutions.
              </p>
            </div>
          </div>

          {services.map((service, index) => (
            <article
              key={index}
              className="bg-[rgba(254,254,254,1)] h-full shadow-[0px_0px_2px_rgba(0,0,0,0.12)] border flex min-w-60 gap-6 grow shrink w-full pt-6 pb-12 px-6 rounded-[25px] border-[rgba(230,242,251,1)] border-solid hover:shadow-lg transition-shadow max-md:px-5"
            >
              <div className="min-w-60">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="aspect-[1] object-contain w-[52px] rounded-lg"
                />
                <h3 className="text-[21px] font-semibold leading-[1.4] tracking-[-0.62px] mt-4">
                  {service.title}
                </h3>
                <p className="text-base font-normal leading-[25px] tracking-[-0.49px] mt-4">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
