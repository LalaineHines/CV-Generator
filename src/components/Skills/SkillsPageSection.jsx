import React from "react";

const SkillsPageSection = ({ skills }) => {
  return (
    <section className={!skills.length ? "hidden" : null}>
      <h2 className="font-medium text-lg">Skills</h2>
      <hr className="mb-2" />
      <div className="w-full flex flex-wrap overflow-hidden">
        {skills.map((element, index) => (
          <p key={index} className="text-sm">
            {element.skillName}
            {index !== skills.length - 1 ? ",\u00A0" : null}
          </p>
        ))}
      </div>
    </section>
  );
};

export default SkillsPageSection;