import React from "react";

const EducationPageSection = ({ education }) => {
  return (
    <section className={!education.length ? "hidden" : null}>
      <h2 className="font-medium text-lg">Education</h2>
      <hr className="mb-2" />
      <div className="w-full flex flex-wrap overflow-hidden">
        {education.map((education, index) => (
          <div
            className="w-full mb-2 flex justify-between items-center gap-5"
            key={index}
          >
            <div>
              <h3 className="font-medium text-md -mb-1">{education.degree}</h3>
              <h3 className="font-normal text-md">{education.name}</h3>
            </div>
            <div className="min-w-fit h-full flex flex-col items-end justify-baseline mt-1">
              <p className="font-normal text-sm text-right w-fit">
                {new Date(education.startDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(education.endDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <p className="font-normal text-sm text-right w-fit">
                {education.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationPageSection;