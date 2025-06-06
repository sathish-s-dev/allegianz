import React from 'react';

const Footer = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/d9b4152189228f9dd63db7e446d7bcb463dcac89?placeholderIfAbsent=true", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/6864fa6ba468fb7abe48ecaf7e57f4a0c2deb33a?placeholderIfAbsent=true", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/f37ba4f01b1d18b45516bf0f9b93f121e6a5e0f2?placeholderIfAbsent=true", alt: "LinkedIn" },
    { src: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/5860aebc52f77208d0f8b2c2c9247ad660486c78?placeholderIfAbsent=true", alt: "Instagram" }
  ];

  return (
    <footer className="bg-black w-full py-12 px-20 max-md:px-5">
      <div className="pb-8 border-[rgba(84,84,84,1)] border-b max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[64%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch max-md:mt-10">
              <div className="flex w-full flex-col">
                <div className="flex items-center gap-1 text-lg text-[rgba(133,82,215,1)] font-normal leading-none mt-[13px]">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/5e83a563930ed92335f796474034bc32f5905eb4?placeholderIfAbsent=true"
                    alt="Allegianz Solutions Logo"
                    className="aspect-[0.95] object-contain w-[53px] shrink-0"
                  />
                  <div className="w-[139px]">
                    llegianz Solutios
                  </div>
                </div>
                <p className="text-white text-base font-semibold leading-loose mt-[13px] max-md:max-w-full">
                  Innovative Business solutions for everyone
                </p>
              </div>
              
              <div className="flex items-center gap-[30px] text-base text-white font-light underline leading-none mt-5">
                <a href="tel:+911234121212" className="w-[149px] gap-2.5 hover:text-[rgba(133,82,215,1)] transition-colors">
                  +91 1234-121212
                </a>
                <a href="mailto:allegianz@gmail.com" className="flex items-center gap-2.5 whitespace-nowrap w-[214px] hover:text-[rgba(133,82,215,1)] transition-colors">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/eabefbfca9944d248b809d5f5883d740e2fbc54e?placeholderIfAbsent=true"
                    alt="Email Icon"
                    className="aspect-[1.5] object-contain w-[18px] shrink-0"
                  />
                  <span className="w-[169px]">
                    allegianz@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col self-stretch max-md:mt-10">
              <h3 className="text-white text-[19px] font-semibold leading-[1.2]">
                Social Media
              </h3>
              <p className="text-white text-sm font-normal leading-loose mt-5">
                Don't Miss To Follow Us On Our Social Networks Accounts.
              </p>
              <div className="flex items-stretch gap-[21px] mt-4">
                {socialIcons.map((icon, index) => (
                  <a key={index} href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="aspect-[1] object-contain w-[30px] shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex w-full items-stretch gap-[40px_100px] text-[13px] flex-wrap mt-[39px]">
        <div className="flex items-stretch gap-px flex-1">
          <div className="text-[rgba(255,0,4,1)] font-medium leading-loose">
            © 2024
          </div>
          <div className="text-white font-normal leading-loose basis-auto">
            {" "}Allegianz. All right reserved.
          </div>
        </div>
        <div className="flex items-stretch gap-[27px] text-white font-normal flex-1">
          <a href="#" className="leading-loose hover:text-[rgba(133,82,215,1)] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="leading-[1.7] basis-auto hover:text-[rgba(133,82,215,1)] transition-colors">
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
