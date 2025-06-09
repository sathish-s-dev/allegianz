import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/421f03ad7aa7f09f3481d8199e5bf5323d330f93?placeholderIfAbsent=true",
      name: "Allen Chelliah James",
      position: "Principle Founder"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/322701774445c32d82c81fd69876af69a123a976?placeholderIfAbsent=true",
      name: "Phani C Kumar",
      position: "Chief Financial Accountant"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/047e52a986654640b02e58e3fac7be90/ecc2827de10771cbfd2050105cd369201dacf499?placeholderIfAbsent=true",
      name: "Stuaret J Benway",
      position: "Chief Strategy Officer"
    }
  ];

  return (
    <section id="team" className="bg-white flex min-h-[966px] max-w-full w-[1514px] flex-col items-center justify-center px-[92px] py-[83px] max-md:px-5">
      <div className="flex w-full max-w-[1321px] flex-col items-stretch justify-center">
        <div className="w-full text-[76px] text-[rgba(34,34,34,1)] font-normal tracking-[-0.84px] leading-[74px] pt-5 pb-[13px] max-md:text-[40px] max-md:leading-[44px] max-md:pr-5">
          <h2>
            <span className="font-medium">Curious to know our team?</span>
            <br />
            <span className="text-[64px] text-light-text">
              Meet the minds behind our innovation, strategy, and impact.
            </span>
          </h2>
        </div>
        
        <div className="self-center flex items-center gap-[40px_80px] text-center flex-wrap mt-[70px] max-md:mt-10">
          {teamMembers.map((member, index) => (
            <article key={index} className="min-w-60 w-[290px]">
              <img
                src={member.image}
                alt={`${member.name} - ${member.position}`}
                className="aspect-[0.75] object-contain w-[290px] max-w-full rounded-[20px]"
              />
              <div className="flex max-w-full w-[290px] flex-col mt-4">
                <h3 className="text-[rgba(34,34,34,1)] text-[28px] font-medium leading-none">
                  {member.name}
                </h3>
                <p className="text-[rgba(158,158,158,1)] text-xl font-normal leading-none tracking-[0.36px] mt-[5px]">
                  {member.position}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
