import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-white flex min-h-[997px] max-w-full w-[1514px] flex-col items-center justify-center py-[63px] max-md:pl-5"
    >
      <div className="min-h-[872px] w-full max-w-screen-2xl">
        <div className="relative flex text-[70px] max-w-4xl font-[450] tracking-[-0.78px] flex-wrap px-[70px] max-md:text-[40px] max-md:px-5">
          <h2 className="text-[rgba(34,34,34,1)]  grow shrink  max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
            A reliable partner for wide <span className="text-[rgba(179,179,179,1)]"> world-class quality and on-time delivery</span>
          </h2>
         
        </div>

        <div className="bg-[rgba(246,246,246,1)] flex w-full flex-col mt-[60px] px-[39px] max-md:mt-10 max-md:pl-5">
          <div className="flex  items-center flex-wrap">
            <div className="bg-[rgba(246,246,246,1)] flex min-w-60 flex-col items-stretch text-[rgba(179,179,179,1)] font-[450] w-[383px] pl-[123px] pr-[124px] pt-[119px] pb-[127px] border-[rgba(239,239,239,1)] border-r max-md:px-5 max-md:py-[100px]">
              <div className="w-full text-[92px] whitespace-nowrap tracking-[-1.02px] leading-none max-md:text-[40px]">
                <div className="max-md:text-[40px]">4.6</div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/381387494ca682379eeae803eefcfc5337f8b84d?placeholderIfAbsent=true"
                  alt="Rating Stars"
                  className="aspect-[5.92] object-contain w-[136px] mt-5"
                />
              </div>
              <div className="self-center w-[86px] text-base tracking-[0.34px] leading-none mt-[11px]">
                <div>124 reviews</div>
              </div>
            </div>

            {[1, 2, 3].map((index) => (
              <article
                key={index}
                className="bg-[rgba(246,246,246,1)] min-w-60 min-h-[512px] w-[383px] pl-[39px] pr-[73px] py-10 border-[rgba(227,227,227,1)] border-r max-md:px-5"
              >
                <div className="text-[rgba(179,179,179,1)] text-[11px] font-[450] leading-[1.2] tracking-[0.47px] uppercase">
                  ABA Bank
                </div>
                <div className="w-full mt-[27px]">
                  <blockquote className="text-[rgba(179,179,179,1)] text-[28px] font-medium leading-[37px] tracking-[-0.31px]">
                    "We appreciate their work method,{" "}
                    <span className="text-[rgba(34,34,34,1)]">
                      Business strategy
                    </span>
                    , and the way they communicate."
                  </blockquote>
                  <cite className="text-[rgba(34,34,34,1)] text-lg font-normal leading-[23px] tracking-[0.34px] not-italic">
                    <span className="font-[450]">Vandyrichat Chhay</span>
                    <br />
                    <span className="font-[450] text-[rgba(179,179,179,1)]">
                      Manager
                    </span>
                  </cite>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
