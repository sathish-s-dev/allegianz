import React from "react";

const LiaisonServices = () => {
  const services = [
    {
      title: "Cross-Functional Liaison",
      description:
        "We act as the critical bridge between different functions within your organization, ensuring smooth communication between departments such as finance, operations, marketing, and legal. By aligning internal teams around common goals, we help eliminate silos and improve operational efficiency.",
      features: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/e5b34d9b3220bc8ed20d159f49c65a00f0ee9ecc?placeholderIfAbsent=true",
          text: "Facilitating communication between departments",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/7abe8a533e81b7ed9ac3a67d675bb7043a8b0e0d?placeholderIfAbsent=true",
          text: "Aligning business objectives across teams",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/8654b330436e2c5cbdfc0075babe0bd77a0cb1fd?placeholderIfAbsent=true",
          text: "Enhancing collaboration on strategic initiatives",
        },
      ],
    },
    {
      title: "External Stakeholder Liaison",
      description:
        "Navigating relationships with external stakeholders—such as clients, vendors, regulators, investors, and government agencies—can be a daunting task. Our liaison team helps you effectively manage and nurture these relationships, ensuring clear communication and smooth operations.",
      features: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/b6fe2c965f27cfc6c96f32a3f7a675f62df8fcb2?placeholderIfAbsent=true",
          text: "Managing relationships with investors, regulatory bodies, and business partners.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/28d5cdd64586534e7cc5093835b785b699df4482?placeholderIfAbsent=true",
          text: "Coordinating with legal and compliance teams to adhere to regulations.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/8b1dfa5af14bbecea2d834d2dc1f74880ad16a6f?placeholderIfAbsent=true",
          text: "Acting as your intermediary in joint ventures, partnerships, or mergers and acquisitions",
        },
      ],
    },
    {
      title: "International Liaison",
      description:
        "For businesses operating or expanding globally, cultural nuances, legal requirements, and geographical challenges can complicate communication and business strategy. Our team offers specialized support to help you navigate international markets, ensuring all cross-border interactions are handled with care and expertise.",
      features: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/1a4856c98d531d13561bdcd133bdc2b3c67d8871?placeholderIfAbsent=true",
          text: "Market entry and international expansion",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/797d094ade89023decd6d3ac66611e80efa4c095?placeholderIfAbsent=true",
          text: "Overseas supplier and client relationships.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/36474293a45d5e045b262581387163de9be74093?placeholderIfAbsent=true",
          text: "International trade regulations and compliance.",
        },
      ],
    },
    {
      title: "Government Liaison",
      description:
        "When working with government entities—whether at the local, state, or national level—it's critical to have a dedicated team that can effectively represent your interests. Our government liaison services ensure that you're aligned with regulatory changes, procurement processes, and public policy shifts.",
      features: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/1a4856c98d531d13561bdcd133bdc2b3c67d8871?placeholderIfAbsent=true",
          text: "Client Representation with government agencies.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/797d094ade89023decd6d3ac66611e80efa4c095?placeholderIfAbsent=true",
          text: "Compliance with public sector regulations.",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/36474293a45d5e045b262581387163de9be74093?placeholderIfAbsent=true",
          text: "Public-private partnerships and policy advocacy.",
        },
      ],
    },
  ];

  return (
    <section className="bg-white w-full max-w-screen-xl relative pt-[66px] md:h-[400vh] md:-mb-[600px] z-[1] pb-[95px] px-6 max-md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap h-full">
        <div className="min-w-60 w-full max-md:max-w-full md:sticky top-24 h-fit py-4">
          <div className="flex w-full items-center text-[78px] gap-4 font-medium whitespace-nowrap flex-wrap max-md:text-4xl">
            <h2 className="text-[rgba(34,34,34,1)] shrink max-md:text-4xl">
              Laison
            </h2>
            <span className="text-center max-md:text-4xl bg-primary-gradient bg-clip-text text-transparent">
              Services
            </span>
          </div>
          <p className="text-[rgba(112,109,121,1)] text-2xl font-[450] leading-7 tracking-[-0.46px] mt-[17px] max-md:max-w-full">
            We help align your internal teams, partners, and external
            stakeholders, ensuring clear communication and smoother business
            outcomes.
          </p>
        </div>

        <div className="min-w-60 text-[rgba(34,34,34,1)] w-full max-md:max-w-full">
          {services.map((service, index) => (
            <article
              key={index}
              style={{ top: `${index * 15 + 150}px` }}
              className={`bg-[linear-gradient(to_bottom_left,_#3A2883,_#D3A6F7,_#E8D6F5,_#F9F9FD_30%,_#FAFAFD)] w-full overflow-hidden rounded-[13px] md:sticky ${index > 0 ? "mt-[55px] max-md:mt-10" : ""}`}
            >
              <div className="border flex flex-col items-stretch justify-center p-10 rounded-[13px] border-[rgba(0,0,0,0.1)] border-solid max-md:px-5">
                <div>
                  <h3 className="w-full text-4xl font-medium tracking-[-0.67px] leading-none pr-14 pb-px max-md:pr-5">
                    {service.title}
                  </h3>
                  <div className="flex w-full flex-col items-stretch text-xl text-[rgba(112,109,121,1)] font-[450] tracking-[-0.38px] leading-[23px] justify-center mt-5">
                    <p className="w-full">{service.description}</p>
                  </div>
                  <div className="w-full text-[15px] font-normal tracking-[-0.46px] leading-[27px] mt-5">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex gap-1 ${featureIndex > 0 ? "mt-[9px]" : ""}`}
                      >
                        <img
                          src={feature.icon}
                          alt="Feature Icon"
                          className="aspect-[0.96] object-contain w-[27px] shrink-0"
                        />
                        <div className="w-[520px] max-md:max-w-full">
                          {feature.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiaisonServices;
