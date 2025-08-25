import React from "react";

const WorkExperiencePageSection = ({ work }) => {
  return (
    <section className={!work.length ? "hidden" : null}>
      <h2 className="font-medium text-lg">Work Experience</h2>
      <hr className="mb-2" />
      <div className="w-full flex flex-wrap overflow-hidden">
        {work.map((work, index) => (
          <div className="w-full mb-2" key={index}>
            {/* introduction */}
            <div className="w-full flex justify-between items-baseline mb-[2px]">
              <div>
                <h3 className="font-medium text-md">{work.role}</h3>
                <div className="text-sm">
                  <p className="font-bold inline">Company:&nbsp;</p>
                  <p className="font-normal inline">{work.company}</p>
                </div>
              </div>
              <div className="min-w-fit h-full flex flex-col items-end justify-baseline mt-1">
                <p className="font-normal text-sm text-right w-fit">
                  {new Date(work.startDate).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {new Date(work.endDate).toLocaleString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="font-normal text-sm text-right w-fit">
                  {work.location}
                </p>
              </div>
            </div>

            {/* description */}
            <div className="text-sm">
              <p className="font-bold inline">Description:&nbsp;</p>
              <p className="font-normal inline">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperiencePageSection;