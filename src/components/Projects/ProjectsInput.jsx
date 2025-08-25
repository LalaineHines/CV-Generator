import React from "react";

const ProjectsInput = ({ project, setProject }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="3-name">Project Name</label>
        <input
          type="text"
          id="3-name"
          placeholder="Enter the name of the project..."
          value={project.name}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, name: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-skills">Skills</label>
        <input
          type="text"
          id="3-skills"
          placeholder="Enter the skills used..."
          value={project.skills}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, skills: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-start">Start Date</label>
        <input
          type="date"
          id="3-start"
          value={project.startDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, startDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-end">End Date</label>
        <input
          type="date"
          id="3-end"
          value={project.endDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, endDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-description">Project Description</label>
        <textarea
          id="3-description"
          placeholder="Type here..."
          value={project.description}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none h-30"
          onChange={(event) =>
            setProject({ ...project, description: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-live">Live Preview Link (optional)</label>
        <input
          type="url"
          id="3-live"
          placeholder="Enter a link..."
          value={project.livePreview}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, livePreview: event.target.value })
          }
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="3-code">Code Preview Link (optional)</label>
        <input
          type="url"
          id="3-code"
          placeholder="Enter a link..."
          value={project.codePreview}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setProject({ ...project, codePreview: event.target.value })
          }
        />
      </div>
    </>
  );
};

export default ProjectsInput;