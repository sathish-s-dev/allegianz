import React from 'react';

const ProjectWorkflow = () => {
  return (
    <section className="bg-white flex w-full flex-col items-stretch text-[rgba(34,34,34,1)] justify-center px-[73px] py-[97px] max-md:px-5">
      <div className="w-full">
        <div className="w-[1262px] max-w-full">
          <h2 className="text-[58px] font-[450] leading-none tracking-[-0.8px] max-md:text-[40px]">
            Quickly Start your project and Work together.
          </h2>
          <p className="text-[22px] font-normal leading-none tracking-[0.48px] mt-[23px] max-md:max-w-full">
            With simple procedures you can start your project with us,
            easily.
          </p>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/e74aba847fb896d5afff52358d4a1f19711a59e4?placeholderIfAbsent=true"
          alt="Project Workflow Process"
          className="aspect-[3.53] object-contain w-full mt-[70px] max-md:mt-10"
        />
      </div>
    </section>
  );
};

export default ProjectWorkflow;
