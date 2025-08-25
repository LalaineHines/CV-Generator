import React, { useState } from "react";

import SectionForm from '../ui/SectionForm';
import WorkExperienceInput from './WorkExperienceInput';

const WorkExperienceBuilder = ({ workList, setWorkList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [work, setWork] = useState({
    id: crypto.randomUUID(),
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const expandCollapseSectionButtonProps = {
    sectionName: "Work Experience",
    isOpen: isOpen,
    onClick: () => setIsOpen(!isOpen),
  };

  const handleEditArgs = [
    work,
    setWorkList,
    selectedId,
    setSelectedId,
    setWork,
  ];

  const addObjectArgs = [work, setWork, workList, setWorkList];

  const addButtonProps = {
    object: work,
    setObject: setWork,
    setObjectsList: setWorkList,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    objectName: "role",
  };

  const dynamicListProps = {
    list: workList,
    name: "role",
    setFunction: setWork,
    setSelectedId: setSelectedId,
  };

  return (
    <SectionForm
      isOpen={isOpen}
      expandProps={expandCollapseSectionButtonProps}
      selectedId={selectedId}
      object={work}
      handleEditArgs={handleEditArgs}
      addObjectArgs={addObjectArgs}
      objectsInputComponent={
        <WorkExperienceInput work={work} setWork={setWork} />
      }
      addButtonProps={addButtonProps}
      dynamicListProps={dynamicListProps}
    />
  );
}

export default WorkExperienceBuilder