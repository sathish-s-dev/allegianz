import React from "react";

const Partnerships = () => {
  const partnerLogos = [
    {
      top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6be33a5e5767b02290a488d4863096795b02063c?placeholderIfAbsent=true",
      bottom:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9f9628c8a71fd23e4950ac00cb10dca18dce695c?placeholderIfAbsent=true",
    },
    {
      top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/b1248955171a4b8778bf78c02c9a020b98b592b0?placeholderIfAbsent=true",
      bottom:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6d838c516720101db4cbe95845e12f022b6ce028?placeholderIfAbsent=true",
    },
    {
      single:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/8f5a8ee1723c545c1ac33b7c4d2a4a69d609ec55?placeholderIfAbsent=true",
    },
    {
      top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/733f04dcb902c24a0d1f85962443af69f46d188b?placeholderIfAbsent=true",
      bottom:
        "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/aa226332620076f554e82e3aa1be9ced0126dced?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="bg-[rgba(246,246,246,1)] py-12 flex w-full flex-col gap-6 md:flex-row max-w-screen-2xl items-center overflow-hidden pl-1 md:pr-[110px] max-md:pr-5">
      <div className="min-w-60 overflow-hidden grow shrink md:w-[258px] px-[70px] max-md:px-5">
        <div className="flex gap-[21px] w-full">
          <div className="md:w-[168px] w-full flex flex-col max-md:flex-row gap-4">
            {partnerLogos.map((partner, index) => (
              <div
                key={index}
                className={`bg-white p-3 overflow-hidden flex justify-center items-center aspect-[1/1.5] shadow-[0px_37px_67px_rgba(0,0,0,0.08)] w-full rounded-[202px] ${index > 0 ? "mt-[13px]" : ""}`}
              >
                <div className="flex flex-col size-10">
                  {partner.single ? (
                    <>
                      <img
                        src={partner.single}
                        alt="Partner Logo"
                        className={`object-contain  self-center ${index === 0 ? "aspect-[1.07] w-[46px]" : index === 1 ? "aspect-[1.12] w-[73px]" : "aspect-[0.91] w-[61px]"}`}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={partner.top}
                        alt="Partner Logo"
                        className={`object-contain  self-center ${index === 0 ? "aspect-[1.07] w-[46px]" : index === 1 ? "aspect-[1.12] w-[73px]" : "aspect-[0.91] w-[61px]"}`}
                      />
                      <img
                        src={partner.bottom}
                        alt="Partner Logo"
                        className={`object-contain w-full mt-1 ${index === 0 ? "aspect-[2.11]" : index === 1 ? "aspect-[3.27]" : "aspect-[1.85]"}`}
                      />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-w-60 flex-col items-stretch text-[rgba(34,34,34,1)] grow shrink max-w-screen-xl max-md:max-w-full">
        <div className="md:h-[250px] max-w-screen-xl text-8xl font-[450] whitespace-nowrap md:tracking-[-5.25px] md:leading-none max-md:text-5xl">
          <h2 className="">Extensive</h2>
          <div className="">Partnerships</div>
        </div>

        <div className="md:text-xl font-normal leading-10 max-md:leading-7 max-md:mt-10">
          <p>
            Allegianz has always been flexible in its policies regarding its
            founders and partners venturing into businesses of its erstwhile
            clients on the basis of personal interest as long as it does not
            cause "Conflict of Interest" or "Breach of Trust" with Allegianz's
            vision, its business practice, its clients and associate partners.
          </p>
          <br />
          <p>
            Our Founder Mr. Allen James has been a part of a few ventures like
            Zebricube Pty Ltd (RSA), Global Wide Technology, LLC (USA),
            Allegianz Food & Agro and regional partner to IPS Solar Systems
            (USA) in the past.
          </p>
          <br />
          <p>
            Currently, he is with business startups like e-pay (Barbados / USA),
            Zodor Token Solutions (India) and Rook Solar (Nigeria) who continue
            to be Allegianz's clients for its advisory services and yet have
            onboarded Mr. James as their shareholder and board member.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
