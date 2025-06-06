import React from 'react';

const Partnerships = () => {
  const partnerLogos = [
    { top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6be33a5e5767b02290a488d4863096795b02063c?placeholderIfAbsent=true", bottom: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9f9628c8a71fd23e4950ac00cb10dca18dce695c?placeholderIfAbsent=true" },
    { top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/b1248955171a4b8778bf78c02c9a020b98b592b0?placeholderIfAbsent=true", bottom: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6d838c516720101db4cbe95845e12f022b6ce028?placeholderIfAbsent=true" },
    { single: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/8f5a8ee1723c545c1ac33b7c4d2a4a69d609ec55?placeholderIfAbsent=true" },
    { top: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/733f04dcb902c24a0d1f85962443af69f46d188b?placeholderIfAbsent=true", bottom: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/aa226332620076f554e82e3aa1be9ced0126dced?placeholderIfAbsent=true" }
  ];

  return (
    <section className="bg-[rgba(246,246,246,1)] flex max-w-full w-[1512px] items-center overflow-hidden flex-wrap pl-1 pr-[110px] max-md:pr-5">
      <div className="min-w-60 overflow-hidden grow shrink w-[258px] px-[70px] max-md:px-5">
        <div className="flex gap-[21px]">
          <div className="w-[168px] pb-[315px] max-md:pb-[100px]">
            {partnerLogos.map((partner, index) => (
              <div key={index} className={`bg-white shadow-[0px_37px_67px_rgba(0,0,0,0.08)] w-full rounded-[202px] ${index > 0 ? 'mt-[13px]' : ''} ${partner.single ? 'flex flex-col items-stretch justify-center px-4 py-[89px]' : 'pb-[65px] px-[17px] max-md:px-5'}`}>
                {partner.single ? (
                  <img
                    src={partner.single}
                    alt="Partner Logo"
                    className="aspect-[2.4] object-contain w-full"
                  />
                ) : (
                  <div className="flex flex-col items-stretch">
                    <img
                      src={partner.top}
                      alt="Partner Logo"
                      className={`object-contain self-center ${index === 0 ? 'aspect-[1.07] w-[46px]' : index === 1 ? 'aspect-[1.12] w-[73px]' : 'aspect-[0.91] w-[61px]'}`}
                    />
                    <img
                      src={partner.bottom}
                      alt="Partner Logo"
                      className={`object-contain w-full mt-1 ${index === 0 ? 'aspect-[2.11]' : index === 1 ? 'aspect-[3.27]' : 'aspect-[1.85]'}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex min-w-60 flex-col items-stretch text-[rgba(34,34,34,1)] grow shrink w-[1011px] max-md:max-w-full">
        <div className="self-center h-[250px] max-w-full w-[1065px] text-[120px] font-[450] whitespace-nowrap tracking-[-5.25px] leading-none max-md:text-[40px]">
          <h2 className="max-md:text-[40px]">Extensive</h2>
          <div className="max-md:text-[40px]">Partnerships</div>
        </div>
        
        <div className="text-2xl font-normal leading-10 mt-[69px] max-md:mt-10">
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
            Currently, he is with business startups like e-pay (Barbados /
            USA), Zodor Token Solutions (India) and Rook Solar (Nigeria) who
            continue to be Allegianz's clients for its advisory services and
            yet have onboarded Mr. James as their shareholder and board
            member.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
