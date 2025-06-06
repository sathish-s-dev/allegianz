import React from 'react';

const TrustedBrands = () => {
  return (
    <section className="bg-white flex min-h-[326px] w-full max-w-[1512px] overflow-hidden pl-[84px] max-md:pl-5">
      <div className="flex min-w-60 h-[272px] w-[1428px] flex-wrap">
        <div className="flex min-w-60 flex-col items-stretch grow shrink w-[350px] pr-[11px] pt-[51px] pb-px max-md:max-w-full">
          <h2 className="text-[rgba(34,34,34,1)] text-[47px] font-medium leading-[55px] tracking-[-2.1px] max-md:text-[40px] max-md:leading-[52px]">
            Trusted by Innovative brands
          </h2>
          
          <div className="mt-12 pb-px max-md:mt-10">
            <div className="flex pr-[99px] max-md:pr-5">
              <div className="flex w-[42px] pb-[5px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/74444fb6cd5dac8a7027d6f12d738b68ef60940c?placeholderIfAbsent=true"
                  alt="Satisfaction Rate Icon"
                  className="aspect-[1] object-contain w-[42px]"
                />
              </div>
              <div className="text-[rgba(34,34,34,1)] text-3xl font-normal leading-none tracking-[-0.26px]">
                <span className="font-[450]">95% </span>
                <span className="font-[450] text-black">Satisfaction rate</span>
              </div>
            </div>
            <p className="text-black text-base font-[450] leading-none">
              From our Clients in Every projects
            </p>
          </div>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/a80871babbaad8667758cba1b6b38a77b7076272?placeholderIfAbsent=true"
          alt="Trusted Brands Logos"
          className="aspect-[3.62] object-contain w-[906px] min-w-60 grow shrink max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default TrustedBrands;
