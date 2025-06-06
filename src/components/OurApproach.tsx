import React from "react";

const OurApproach = () => {
  const approaches = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9bf0158a48e2617f30af0b81496b58ea905ea517?placeholderIfAbsent=true",
      title: "Identification & Analysis",
      description:
        "We begin with a thorough assessment of your business, market position, and challenges. This helps us understand your needs and define a clear path forward.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6d173ebcd522c8c6937f2326b221ff1ad5768220?placeholderIfAbsent=true",
      title: "StrategyDevelopment",
      description:
        "We begin with a thorough assessment of your business, market position, and challenges. This helps us understand your needs and define a clear path forward.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/2ed6573e8b2f8703ddeceb90268c9c5efdc1f392?placeholderIfAbsent=true",
      title: "Execution & Support",
      description:
        "We begin with a thorough assessment of your business, market position, and challenges. This helps us understand your needs and define a clear path forward.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/4fdf8f13bb5eba2454d6872e9ea8756795c62a5c?placeholderIfAbsent=true",
      title: "SustainedImprovement",
      description:
        "We begin with a thorough assessment of your business, market position, and challenges. This helps us understand your needs and define a clear path forward.",
    },
  ];

  return (
    <section
      id="approach"
      className="bg-[rgba(246,246,246,1)] max-w-full w-[1514px]"
    >
      <div className="bg-[rgba(255,255,255,0)] flex min-h-[307px] w-full flex-col pt-[38px] pb-[67px] px-[83px] max-md:px-5">
        <div className="w-[1280px] max-w-full">
          <div className="w-[528px] max-w-full text-7xl font-medium whitespace-nowrap max-md:text-[40px]">
            <div className="flex w-full justify-center gap-4 flex-wrap max-md:text-[40px]">
              <h2 className="text-[rgba(22,22,22,1)] max-md:text-[40px]">
                Our
              </h2>
              <span className="text-center max-md:text-[40px] bg-primary-gradient bg-clip-text text-transparent">
                Approach
              </span>
            </div>
          </div>
          <p className="text-[rgba(22,22,22,1)] text-xl font-normal leading-[30px] max-md:max-w-full">
            Explore blogs, market briefings, and blockchain insights designed to
            keep you sharp in an evolving digital economy. Access curated news,
            in-depth articles, and forward-thinking analysis on crypto, markets,
            and innovation trusted by leaders and decision-makers.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex w-full items-center flex-wrap">
          {approaches.map((approach, index) => (
            <article
              key={index}
              className="bg-white border flex min-w-60 min-h-[632px] flex-col overflow-hidden items-stretch grow shrink w-[305px] pl-6 pr-[22px] pt-6 pb-[215px] rounded-[0px_10px_0px_0px] border-[rgba(203,214,255,1)] border-solid max-md:pb-[100px] max-md:px-5"
            >
              <img
                src={approach.icon}
                alt={`${approach.title} Icon`}
                className="aspect-[1] object-contain w-[67px] shadow-[0px_2px_4px_rgba(0,0,0,0.12)] rounded-md"
              />
              <div className="w-full mt-[17px]">
                <h3 className="text-[rgba(15,15,15,1)] text-[39px] font-semibold leading-[47px]">
                  {approach.title.includes("&") ? (
                    <>
                      {approach.title.split("&")[0].trim()} <br />&{" "}
                      {approach.title.split("&")[1].trim()}
                    </>
                  ) : (
                    approach.title
                  )}
                </h3>
                <p className="text-[rgba(112,109,121,1)] text-xl font-medium leading-[31px] mt-[31px]">
                  {approach.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
