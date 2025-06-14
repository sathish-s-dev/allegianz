import React from "react";

const Hero = () => {
  return (
    <section className="bg-white w-full flex flex-col md:px-3 min-h-[90vh] rounded-lg max-w-screen-2xl items-center justify-center">
      <div className="relative w-full h-[90vh] isolate overflow-hidden rounded-xl after:bg-gradient-to-t to-black/30 from-black/30 after:inset-0 after:z-0 after:absolute">
        <div className="absolute inset-0 z-[-1]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/f5b453745035e578a4c26d1e3a2652f20aca0a5a?placeholderIfAbsent=true"
            alt="Hero Background"
            className="aspect-[1.79] h-full object-cover w-full"
          />
        </div>
        <div className="h-full flex w-full relative z-[1] flex-col items-stretch justify-center px-[27px] py-[58px] max-md:px-5">
          <div className="flex max-w-full  w-[1412px] h-full flex-col items-stretch">
            {/* <div className="bg-[rgba(255,255,255,0.15)] flex min-h-px w-full" /> */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/08f65df74e319690be5f2ce35e53f6ce37d304b7?placeholderIfAbsent=true"
              alt="Allegianz Logo"
              className="aspect-[1.24] object-contain w-[104px] max-md:w-10 absolute self-center max-w-full mt-[19px]"
            />

            <div className="flex w-full md:px-12 h-full mx-auto justify-center flex-col items-center">
              <div className="flex w-full gap-12 flex-col h-full justify-center items-center">
                <div className="w-full max-w-full flex flex-col gap-4 text-white">
                  <div className="text-xl font-medium leading-none tracking-[-0.34px] max-md:max-w-full">
                    Get Started with Allegianz
                  </div>
                  <h1 className="text-[76px] font-bold leading-[79px] tracking-[-1.94px] max-md:max-w-full max-md:text-[40px] max-md:leading-[46px]">
                    <span className="text-[58px]">From Idea to Impact.</span>
                    <br />
                    We Deliver it.
                  </h1>
                </div>

                <div className="flex w-full flex-col md:flex-row gap-4 justify-between py-4 relative">
                  <div className="bg-[rgba(255,255,255,0.15)] flex h-px top-0 w-full absolute" />

                  <div className="relative flex hover:scale-[1.01] min-w-60 gap-12 flex-col text-[rgba(34,34,34,1)] font-medium text-center leading-loose w-64 rounded-[64px]">
                    <div className="bg-gradient-to-r from-[#FF7448] via-[#FF4848] to-[#6248FF] flex p-1.5 w-full rounded-[80px] justify-center items-center">
                      <button className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex items-center gap-2 p-2 w-full rounded-[48px] hover:shadow-lg transition-shadow">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9a0cf6c5444257e0d8733c6d93094700164e3f39?placeholderIfAbsent=true"
                          alt="Start Icon"
                          className="aspect-[1] object-contain w-8 shrink-0 rounded-3xl"
                        />
                        <span className="w-[172px]">Start your project</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex w-full h-full justify-en items-end flex-col text-xl">
                    <div className="flex gap-[40px_186px] flex-wrap">
                      <p className="text-white   max-md:max-w-full max-w-lg">
                        We help companies reimagine, modernize, and scale
                        through purpose-built technology and smart delivery
                        models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex w-[189px] max-w-full items-center gap-[17px] text-[17px] text-white font-bold tracking-[-0.34px] leading-none mt-[245px] max-md:mt-10">
                <div className="bg-white w-px h-[25px]" />
                <span className="w-[141px]">View our Projects</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
