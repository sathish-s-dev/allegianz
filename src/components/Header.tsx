import AllegianzLogo from "./AllegianzLogo";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-20 shadow-[0px_4px_30px_rgba(0,0,0,0.05)] w-full px-9 py-3 max-md:px-5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap">
          <AllegianzLogo />

          <nav className=" min-w-60 hidden md:flex items-center gap-[37px] flex-wrap">
            <div className="flex min-w-60 items-center gap-[40px_41px] text-base text-[rgba(34,34,34,1)] font-medium tracking-[-0.34px] leading-none flex-wrap">
              <button
                onClick={() => {
                  const href = "about";
                  document.getElementById(href).scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                className="leading-none w-[70px] hover:text-[rgba(133,82,215,1)] transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const href = "expertise";
                  document.getElementById(href).scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                className="text-[17px] w-[111px] hover:text-[rgba(133,82,215,1)] transition-colors"
              >
                Our Expertise
              </button>
              <button
                onClick={() => {
                  const href = "approach";
                  document.getElementById(href).scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                className="leading-none w-28 hover:text-[rgba(133,82,215,1)] transition-colors"
              >
                Our Approach
              </button>
              <button
                onClick={() => {
                  const href = "testimonials";
                  document.getElementById(href).scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                className="w-[94px] hover:text-[rgba(133,82,215,1)] transition-colors"
              >
                Testimonals
              </button>
              <button
                onClick={() => {
                  const href = "team";
                  document.getElementById(href).scrollIntoView({
                    behavior: "auto",
                    block: "start",
                  });
                }}
                className="w-[42px] hover:text-[rgba(133,82,215,1)] transition-colors"
              >
                Team
              </button>
            </div>

            <button className="bg-[rgba(34,34,34,1)] border flex items-center gap-1 text-sm text-white font-normal text-center leading-loose px-[5px] py-1 rounded-[115px] border-[rgba(0,0,0,0.2)] border-solid hover:bg-[rgba(54,54,54,1)] transition-colors">
              <span className="w-[138px]">Start your Project</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/113d37364b31621e33d690af42cfa9bf9c836f7b?placeholderIfAbsent=true"
                alt="Arrow"
                className="aspect-[1] object-contain w-7 shrink-0 rounded-[28px]"
              />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
