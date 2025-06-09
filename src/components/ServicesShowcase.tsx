import React from "react";

const ServicesShowcase = () => {
  return (
    <section className=" flex max-w-screen-2xl w-full flex-col items-stretch py-8 rounded-[50px_50px_0px_0px]">
      <div className="self-center flex md:w-[1297px] max-w-full flex-col items-stretch">
        <div className="flex text-7xl gap-4 font-medium flex-wrap max-md:text-[40px]">
          <h2 className="text-[rgba(179,179,179,1)] max-md:max-w-full max-md:text-[40px]">
            Check out our
          </h2>
          <span className="max-md:text-[40px] bg-primary-gradient bg-clip-text text-transparent">
            Services.
          </span>
        </div>

        <div className="bg-white shadow-[0px_-6px_16px_rgba(0,0,0,0.05)] border flex flex-col md:flex-row min-h-[643px] w-full items-center gap-[40px_67px] overflow-hidden mt-[41px] pl-16 py-[51px] rounded-[13px] border-[rgba(0,0,0,0.1)] border-solid max-md:pl-5">
          <div className="min-w-60 w-[524px] max-md:max-w-full">
            <div className="max-w-full w-[524px]">
              <div className="w-full font-medium max-md:max-w-full">
                <div className="text-[rgba(112,109,121,1)] text-2xl leading-none tracking-[-0.57px] max-md:max-w-full">
                  Services
                </div>
                <h3 className="text-[rgba(34,34,34,1)] text-[50px] leading-[56px] tracking-[-1.4px] max-md:text-[40px] max-md:leading-[50px]">
                  Solar Renewable <br />
                  Energy Solutions
                </h3>
              </div>
              <p className="text-[rgba(34,34,34,1)] text-[15px] font-[450] leading-[22px] mt-[19px] max-md:max-w-full">
                At Allegianz, we champion green energy with a legacy in solar
                power development. Partnering with leaders like IPS Solar
                Systems and experts like Dr. Neway Argaw, we've expanded into
                EPC and funding across Asia, GCC, MENA, Africa, and Latin
                America.
              </p>
            </div>

            <div className="w-full text-base text-[rgba(34,34,34,1)] font-extrabold tracking-[-0.4px] leading-7 mt-6">
              <div className="min-h-[236px]">
                {[
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/51a37ce43db9b0777d1686ffccd08e45fa7ec84f?placeholderIfAbsent=true",
                    text: "Shovel-ready solar projects seeking EPC support or funding for quick mobilization and reduced lead time.",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/35a1ee4ab80a255b5efea915649382d0859ec448?placeholderIfAbsent=true",
                    text: "Coordination services align developers, investors, and partners to facilitate collaboration.",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/91969f25e615842e1a2679c3d55f419733098878?placeholderIfAbsent=true",
                    text: "Shovel-ready solar projects seeking EPC support or funding for quick mobilization and reduced lead time.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex w-full max-w-[532px] flex-col items-stretch justify-center px-[13px] py-3 rounded-lg"
                  >
                    <div className="flex w-full gap-2 items-start">
                      <img
                        src={item.icon}
                        alt="Service Icon"
                        className="aspect-[1] object-contain w-[25px] shrink-0"
                      />
                      <div className="min-w-60 w-[456px] max-md:max-w-full">
                        <span className="font-[700]">
                          {item.text.split(" ").slice(0, 3).join(" ")}{" "}
                        </span>
                        <span className="font-[450]">
                          {item.text.split(" ").slice(3).join(" ")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative -ml-6 flex md:min-w-60 md:gap-[40px_100px] overflow-hidden flex-1 shrink basis-[0%] max-md:pl-0 pl-[641px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/bfe174cd2e8439179d121dc03a33b60910729c77?placeholderIfAbsent=true"
              alt="Solar Energy Solutions"
              className="md:aspect-[1.18] object-contain w-full md:w-[642px] md:absolute min-w-60 md:h-[542px] rounded-[13px_0px_0px_13px] left-0 right-px bottom-0 max-md:max-w-full"
            />
            <div className="bg-[rgba(228,226,223,1)] flex shrink md:h-[541px] flex-1 basis-[0%]" />
          </div>
        </div>

        <div className="bg-white border flex flex-col md:flex-row overflow-hidden w-full gap-[40px_70px] mt-[41px] py-[50px] rounded-[13px] border-[rgba(0,0,0,0.1)] border-solid max-md:mt-10">
          <div className="bg-white flex min-w-60 flex-col overflow-hidden text-[13px] text-[rgba(21,21,21,1)] font-normal leading-none w-[645px] px-[65px] py-[41px] rounded-[0px_13px_13px_0px] border-[rgba(228,226,223,1)] border-t border-r border-b max-md:px-5">
            <div className="flex items-stretch gap-3 tracking-[0.25px] ml-[27px] max-md:ml-2.5">
              <div className="bg-[rgba(71,52,247,1)] flex w-2.5 shrink-0 h-2.5 rounded-sm" />
              <div>Projects with Business Advisory</div>
            </div>
            <div className="flex items-stretch gap-3 tracking-[0.25px] ml-[27px] mt-3 max-md:ml-2.5">
              <div className="bg-neutral-400 flex w-2.5 shrink-0 h-2.5 rounded-sm" />
              <div>Projects based on assumptions</div>
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/60a625176b28c24ee983df869cfefc7123fd49ff?placeholderIfAbsent=true"
              alt="Chart Icon"
              className="aspect-[1.09] object-contain w-3 ml-[55px] mt-[82px] max-md:ml-2.5 max-md:mt-10"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/60d001a78ed0dffeff93a3a2ea7beebc9e41b5cf?placeholderIfAbsent=true"
              alt="Performance Chart"
              className="aspect-[1.63] object-contain w-full self-stretch max-md:max-w-full"
            />
            <div className="text-[rgba(179,179,179,1)] text-[10px] leading-none uppercase ml-[27px] max-md:ml-2.5">
              source: UserZoom.com
            </div>
          </div>

          <div className="min-w-60 w-[441px] max-md:max-w-full">
            <div className="w-full font-medium max-md:max-w-full">
              <div className="text-[rgba(112,109,121,1)] text-2xl leading-none tracking-[-0.57px] max-md:max-w-full">
                Metrics
              </div>
              <h3 className="text-[rgba(34,34,34,1)] text-[50px] leading-[56px] tracking-[-1.4px] max-md:text-[40px] max-md:leading-[50px]">
                We're confident in the impact of our Stratergies.{" "}
              </h3>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-[15px] font-[450] leading-[22px] mt-[19px] max-md:max-w-full">
              Our method is straightforward but effective. We begin with
              thorough user research to shape strategies that boost engagement
              and retention. We continuously refine the Business to perfect it,
              ensuring it fits the market and scales successfully.
            </p>
          </div>
        </div>

        <div className="bg-white flex flex-col md:flex-row border w-full items-center gap-[40px_84px] overflow-hidden mt-[41px] pl-[63px] pt-[63px] pb-[45px] rounded-[13px] border-[rgba(0,0,0,0.1)] border-solid max-md:pl-5">
          <div className="min-w-60 font-[450] w-[506px] max-md:max-w-full">
            <div className="w-full font-medium max-md:max-w-full">
              <div className="text-[rgba(112,109,121,1)] text-2xl leading-none tracking-[-0.57px] max-md:max-w-full">
                Industry Focus
              </div>
              <h3 className="text-[rgba(34,34,34,1)] text-[50px] leading-[56px] tracking-[-1.4px] max-md:text-[40px] max-md:leading-[50px]">
                Expertise Where It Matters Most
              </h3>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-[15px] leading-[22px] mt-[22px] max-md:max-w-full">
              While we are open to working across various sectors, we have a
              strong preference and inclination toward specific industries where
              our expertise, experience, and insights allow us to deliver highly
              relevant and competitive services. By focusing on these key
              segments, we can provide tailored solutions that align with
              industry trends, challenges, and opportunities. This strategic
              approach ensures that our clients benefit from specialized
              knowledge, innovative strategies, and a deep understanding of
              market dynamics, ultimately driving greater value and success.
            </p>

            <div className="flex w-full gap-[35px] text-[15px] text-[rgba(34,34,34,1)] tracking-[-0.46px] leading-[27px] flex-wrap mt-[22px] max-md:max-w-full">
              <div className="flex min-w-60 flex-col grow shrink w-[202px]">
                {[
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/4d65c489a7f7e4f66d80b5d0988ee3f95de09afb?placeholderIfAbsent=true",
                    text: "Real Estate & Construction",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/463132eb7c70b399877f07d7f1eead479c8b35b2?placeholderIfAbsent=true",
                    text: "Public–Private Partnerships",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/3c4bee377f6c3b2a646fd0eb78806bdc4aaf60b2?placeholderIfAbsent=true",
                    text: "Healthcare & Pharmaceuticals",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/b4840354824563cbc4489f87793d2ef12f161429?placeholderIfAbsent=true",
                    text: "Export & Import Facilitation",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3.5 ${index > 0 ? "mt-[9px]" : ""}`}
                  >
                    <img
                      src={item.icon}
                      alt="Industry Icon"
                      className="aspect-[0.96] object-contain w-[27px] shrink-0"
                    />
                    <div className="w-[189px]">{item.text}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col grow shrink w-[179px]">
                {[
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/655c706a0e3b0271fae8a2d870e6a218ddac0296?placeholderIfAbsent=true",
                    text: "Telecommunications",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/f76416afe384225b86c2f5ec4e3c53a420344ce5?placeholderIfAbsent=true",
                    text: "Technology",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/1aeeb1bef7c3439d6305f5cbf1accf3895da4c8b?placeholderIfAbsent=true",
                    text: "Finance & Banking",
                  },
                  {
                    icon: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/9b68ddddd0e8582e15de06d9c219487a31a5d0cd?placeholderIfAbsent=true",
                    text: "Energy & Utilities",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3.5 ${index > 0 ? "mt-[9px]" : ""} ${index < 2 ? "whitespace-nowrap" : ""}`}
                  >
                    <img
                      src={item.icon}
                      alt="Industry Icon"
                      className="aspect-[0.96] object-contain w-[27px] shrink-0"
                    />
                    <div className="w-[168px]">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex min-w-60 gap-[40px_100px] overflow-hidden flex-1 shrink basis-[0%] pl-[641px] max-md:max-w-full">
            <div className="absolute flex min-w-60 flex-col w-[642px] h-[542px] left-0 bottom-0 max-md:max-w-full">
              <div className="flex flex-col relative min-h-[542px] overflow-hidden rounded-[13px] max-md:max-w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/72f11202ec0c8c8a469ed799de6367d1ac3b54f0?placeholderIfAbsent=true"
                  alt="Industry Background"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/b6396562f73f6735714d89b78a9be67a1f54d6d2?placeholderIfAbsent=true"
                  alt="Industry Focus"
                  className="aspect-[1.19] object-contain w-full rounded-[21px] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="bg-[rgba(228,226,223,1)] flex shrink h-[542px] flex-1 basis-[0%]" />
          </div>
        </div>
      </div>

      <div className="bg-[rgba(246,246,246,1)] flex md:min-h-[916px] w-full flex-col items-center justify-center mt-11 px-[92px] max-md:py-8 py-[100px] max-md:mt-10 max-md:px-5">
        <div className="flex w-[1188px] max-w-full flex-col items-center">
          <div className="w-[961px] max-w-full">
            <div className="w-full flex flex-col items-center text-7xl max-md:text-[40px]">
              <h2 className="text-[rgba(34,34,34,1)] font-medium text-center max-md:text-[40px]">
                We're with you in every{" "}
              </h2>
              <div className="font-semibold  max-md:text-[40px] bg-primary-gradient bg-clip-text text-transparent">
                Step of the way.
              </div>
            </div>
            <p className="text-[rgba(34,34,34,1)] text-[19px] font-normal text-center leading-[30px] mt-6 max-md:max-w-full">
              No matter if you're launching your first project, rapidly
              expanding your operations, or managing intricate challenges, we
              stand by your side at every crucial milestone. Our commitment is
              to provide you with clear insights, drive momentum, and create
              meaningful impact every step of the way.
            </p>
          </div>
          <img
            src="/graph.svg"
            alt="Step by Step Process"
            className="md:-mt-[200px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
