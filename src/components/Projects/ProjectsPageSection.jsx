import React from "react";

const ProjectsPageSection = ({ projects }) => {
  return (
    <section className={!projects.length ? "hidden" : null}>
      <h2 className="font-medium text-lg">Projects</h2>
      <hr className="mb-2" />
      <div className="w-full flex flex-wrap overflow-hidden">
        {projects.map((project, index) => (
          <div className="w-full mb-2" key={index}>
            {/* introduction */}
            <div className="w-full flex justify-between items-center mb-[2px]">
              <h3 className="font-medium text-md">{project.name}</h3>
              <p className="font-normal text-sm mt-1">
                {new Date(project.startDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {new Date(project.endDate).toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            {/* skills */}
            <div className="text-sm">
              <p className="font-bold inline">Skills:&nbsp;</p>
              <p className="font-normal inline">{project.skills}</p>
            </div>

            {/* description */}
            <div className="text-sm">
              <p className="font-bold inline">Description:&nbsp;</p>
              <p className="font-normal inline">{project.description}</p>
            </div>

            {/* live preview */}
            <div className="text-sm">
              <p className="font-bold inline">Live Preview:&nbsp;</p>
              <p className="font-normal inline">
                <a href={project.livePreview}>{project.livePreview}</a>
              </p>
            </div>

            {/* code preview */}
            <div className="text-sm">
              <p className="font-bold inline">Code Preview:&nbsp;</p>
              <p className="font-normal inline">
                <a href={project.codePreview}>{project.codePreview}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPageSection;