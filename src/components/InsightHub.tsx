import React from "react";

const InsightHub = () => {
  const newsItems = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/beba898c893e40614d4f5ba755f0e9d8827cac48?placeholderIfAbsent=true",
      category: "ETH/USD",
      date: "03 Jul 2025",
      title: "FED SAYS POWELL TOLD PRESIDENT WOULD MAKE POLICY TO MEET...",
      description:
        "In a world where everything's digital, your money is one more thing that's...",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/beba898c893e40614d4f5ba755f0e9d8827cac48?placeholderIfAbsent=true",
      category: "ETH/USD",
      date: "03 Jul 2025",
      title: "FED SAYS POWELL TOLD PRESIDENT WOULD MAKE POLICY TO MEET...",
      description:
        "In a world where everything's digital, your money is one more thing that's...",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/beba898c893e40614d4f5ba755f0e9d8827cac48?placeholderIfAbsent=true",
      category: "ETH/USD",
      date: "03 Jul 2025",
      title: "FED SAYS POWELL TOLD PRESIDENT WOULD MAKE POLICY TO MEET...",
      description:
        "In a world where everything's digital, your money is one more thing that's...",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6d25c28bc1865526a534aac8dcc40c449b60ea4f?placeholderIfAbsent=true",
      category: "ETH/USD",
      date: "03 Jul 2025",
      title: "FED SAYS POWELL TOLD PRESIDENT WOULD MAKE POLICY TO MEET...",
      description:
        "In a world where everything's digital, your money is one more thing that's...",
    },
  ];

  return (
    <section className="bg-[rgba(246,246,246,1)] flex w-full max-w-screen-2xl flex-col overflow-hidden items-stretch justify-center px-[71px] py-[72px] max-md:px-5">
      <div className="w-full">
        <div className="w-[1314px] max-w-full">
          <div className="max-w-full text-7xl font-medium max-md:text-[40px]">
            <div className="flex w-full items-center flex-wrap max-md:text-[40px]">
              <h2 className="text-[rgba(34,34,34,1)] max-md:text-[40px] py-4">
                The{" "}
                <span className=" text-center max-md:text-[40px] bg-primary-gradient bg-clip-text text-transparent">
                  Insight Hub.
                </span>
              </h2>
            </div>
          </div>
          <p className="text-[rgba(34,34,34,1)] text-xl font-normal leading-[30px] max-md:max-w-full">
            Explore blogs, market briefings, and blockchain insights designed to
            keep you sharp in an evolving digital economy. Access curated news,
            in-depth articles, and forward-thinking analysis on crypto, markets,
            and innovation trusted by leaders and decision-makers.
          </p>
        </div>

        <div className="flex w-full items-center gap-[40px_85px] mt-16 max-md:mt-10">
          <div className="text-[rgba(34,34,34,1)] w-[237px]">
            <h3 className="text-[34px] font-medium leading-none">
              Latest News
            </h3>
            <p className="text-base font-normal leading-[25px] mt-6">
              Browse through the technical knowledge about latest News and about
              crypto that our experienced team would like to share with you
            </p>
          </div>

          <div className="flex min-w-60 items-center gap-[13px] flex-wrap max-md:max-w-full">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="shadow-[0px_2px_16px_rgba(0,0,0,0.08)] min-w-60 overflow-hidden w-[296px] rounded-[10px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[3.52] object-contain w-[296px]"
                />
                <div className="bg-white w-full pl-[19px] pr-[17px] pt-5 pb-11">
                  <div className="w-full">
                    <div className="flex w-full items-center text-xs font-medium uppercase leading-none justify-between">
                      <div className="text-[rgba(0,87,255,1)] flex-1 shrink basis-[0%]">
                        {item.category}
                      </div>
                      <div className="text-[rgba(88,88,88,1)] w-20">
                        {item.date}
                      </div>
                    </div>
                    <h4 className="w-full text-lg text-[rgba(34,34,34,1)] font-semibold leading-[21px] mt-[18px] py-1 max-md:pr-5">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[rgba(34,34,34,1)] text-sm font-normal leading-[25px] mt-[39px]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col justify-center mt-16 px-[70px] py-px max-md:mt-10 max-md:px-5">
          <div className="flex items-center gap-2.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/a13ebd00474d30eeea5c67cdf4ea5d9cc1df5037?placeholderIfAbsent=true"
              alt="Navigation Dot"
              className="aspect-[2.12] object-contain w-[34px] shrink-0 rounded-2xl"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/5fb32796dd50317bc3d0293771ba30b3c44baae7?placeholderIfAbsent=true"
              alt="Navigation Dot"
              className="aspect-[2.12] object-contain w-[34px] shrink-0 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightHub;
