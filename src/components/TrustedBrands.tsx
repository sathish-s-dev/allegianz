import React from "react";

const TrustedBrands = () => {
  return (
    <section className="bg-white flex min-h-[326px] h-fit w-full max-w-[1512px] md:overflow-hidden pl-[84px] max-md:px-5">
      <div className="flex min-w-60 h-[272px] w-[1428px]">
        <div className="flex min-w-60 flex-col items-stretch grow shrink w-[350px] pr-[11px] pt-[51px] pb-px max-md:max-w-full">
          <h2 className="text-[rgba(34,34,34,1)] text-[47px] font-medium leading-[55px] tracking-[-2.1px] max-md:text-4xl max-md:leading-[52px]">
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
                <span className="font-[450] text-black/50">
                  Satisfaction rate
                </span>
              </div>
            </div>
            <p className="text-black/65 text-base font-[450] leading-none">
              From our Clients in Every projects
            </p>
          </div>
        </div>
        <div className="w-[400px] grow-[2] shrink h-full flex items-center overflow-clip before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/80 before:z-[2] relative before:via-white/0 before:to-white/0     after:absolute after:inset-0 after:bg-gradient-to-r after:to-white/80 after:z-[2] after:via-white/0 after:from-white/0">
          <div className="overflow-scroll flex-shrink-0 w-[2000px]">
            <img
              src="/brand_logos.png"
              alt="Trusted Brands Logos"
              className="w-[2000px] animate-infinite-slide object-cover object-left-top min-w-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
