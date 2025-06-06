import React from 'react';

const GlobalPresence = () => {
  return (
    <section className="bg-white flex max-w-full w-[1512px] flex-col overflow-hidden items-stretch justify-center px-[106px] py-[92px] max-md:px-5">
      <div className="w-full">
        <div className="w-full">
          <div className="flex w-full items-center gap-[13px] text-[90px] tracking-[-3.54px] leading-loose max-md:text-[40px]">
            <h2 className="font-medium w-[230px] max-md:text-[40px]">
              Hello.
            </h2>
            <div className="text-[rgba(179,179,179,1)] font-normal w-[1917px] max-md:max-w-full max-md:text-[40px]">
              Bonjour. Hola. Salve. Gutenag. Zdravo.
            </div>
          </div>
          <p className="text-[rgba(34,34,34,1)] text-2xl font-normal leading-10 mt-2.5 max-md:max-w-full">
            No matter where you are, we're here for you. We connects with
            clients worldwide, offering Solutions that fit diverse markets
            and cultures. Whether launching a product, enhancing one, or
            entering new markets, we're your dedicated partner in turning
            visions into reality.
          </p>
        </div>
        
        <div className="bg-[rgba(249,249,249,1)] flex w-full flex-col items-center justify-center mt-[31px] px-20 py-[74px] max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/e8f0080530abdbce8515f1d5dba0af9dcc83d08f?placeholderIfAbsent=true"
            alt="Global Presence Map"
            className="aspect-[1.97] object-contain w-[1000px] max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
