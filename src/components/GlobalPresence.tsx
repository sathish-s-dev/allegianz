import GradientText from "./ui/GradientText";
import React from "react";

const GlobalPresence = () => {
  return (
    <section className="bg-white flex w-full max-w-screen-2xl flex-col overflow-hidden items-stretch justify-center px-20 py-16 max-md:px-5">
      <div className="w-full">
        <div className="w-full">
          <div className="flex w-full items-center gap-[13px] text-[90px]  max-md:text-[40px]">
            <h2 className="font-medium max-md:text-[40px] whitespace-nowrap text-light-text">
              <GradientText> Hello.</GradientText> Bonjour. Hola. Salve.
              Gutenag. Zdravo.
            </h2>
          </div>
          <p className="text-[rgba(34,34,34,1)] text-2xl font-normal leading-10 mt-2.5 max-md:max-w-full">
            No matter where you are, we're here for you. We connects with
            clients worldwide, offering Solutions that fit diverse markets and
            cultures. Whether launching a product, enhancing one, or entering
            new markets, we're your dedicated partner in turning visions into
            reality.
          </p>
        </div>

        <div className="bg-[rgba(249,249,249,1)] relative flex w-full flex-col items-center justify-center mt-[31px] px-20 py-[74px] max-md:px-5 hover:cursor-pointer group">
          <img
            src="/global-presense.png"
            alt="Global Presence Map"
            className="aspect-[1.97] object-contain w-[1000px] max-w-full"
          />
          <div className="absolute inset-0 bg-black/5 backdrop-blur-sm group-hover:opacity-100 transition duration-200 opacity-0 flex justify-center items-center">
            <div className="relative flex min-w-60 gap-12 flex-col text-[rgba(34,34,34,1)] font-medium text-center leading-loose w-64 rounded-[64px] hover:scale-105">
              <div className="bg-gradient-to-r from-[#FF7448] via-[#FF4848] to-[#6248FF] flex p-1.5 w-full rounded-[80px] flex justify-center items-center">
                <button className="bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.1)] flex items-center gap-2 px-4 py-2 w-full rounded-[48px] hover:shadow-lg transition-shadow">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9a0cf6c5444257e0d8733c6d93094700164e3f39?placeholderIfAbsent=true"
                    alt="Start Icon"
                    className="aspect-[1] object-contain w-8 shrink-0 rounded-3xl"
                  />
                  <span className="w-[172px]">Start your project</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
