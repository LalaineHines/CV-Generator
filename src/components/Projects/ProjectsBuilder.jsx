import React, { useState } from "react";

import ProjectsInput from "./ProjectsInput";
import SectionForm from "../ui/SectionForm";

const ProjectsBuilder = ({ projectsList, setProjectsList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [project, setProject] = useState({
    id: crypto.randomUUID(),
    name: "",
    skills: [],
    startDate: "",
    endDate: "",
    description: "",
  });

  const expandCollapseSectionButtonProps = {
    sectionName: "Projects",
    isOpen: isOpen,
    onClick: () => setIsOpen(!isOpen),
  };

  const handleEditArgs = [
    project,
    setProjectsList,
    selectedId,
    setSelectedId,
    setProject,
  ];

  const addObjectArgs = [project, setProject, projectsList, setProjectsList];

  const addButtonProps = {
    object: project,
    setObject: setProject,
    setObjectsList: setProjectsList,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    objectName: "name",
  };

  const dynamicListProps = {
    list: projectsList,
    name: "name",
    setFunction: setProject,
    setSelectedId: setSelectedId,
  };

  return (
    <SectionForm
      isOpen={isOpen}
      expandProps={expandCollapseSectionButtonProps}
      selectedId={selectedId}
      object={project}
      handleEditArgs={handleEditArgs}
      addObjectArgs={addObjectArgs}
      objectsInputComponent={
        <ProjectsInput project={project} setProject={setProject} />
      }
      addButtonProps={addButtonProps}
      dynamicListProps={dynamicListProps}
    />
  );
};

export default ProjectsBuilder;