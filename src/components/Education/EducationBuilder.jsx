import React, { useState } from "react";

import EducationInput from "./EducationInput";
import SectionForm from "../ui/SectionForm";

const EducationBuilder = ({ educationList, setEducationList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [education, setEducation] = useState({
    id: crypto.randomUUID(),
    degree: "",
    name: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const expandCollapseSectionButtonProps = {
    sectionName: "Education",
    isOpen: isOpen,
    onClick: () => setIsOpen(!isOpen),
  };

  const handleEditArgs = [
    education,
    setEducationList,
    selectedId,
    setSelectedId,
    setEducation,
  ];

  const addObjectArgs = [education, setEducation, educationList, setEducationList];

  const addButtonProps = {
    object: education,
    setObject: setEducation,
    setObjectsList: setEducationList,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    objectName: "name",
  };

  const dynamicListProps = {
    list: educationList,
    name: "name",
    setFunction: setEducation,
    setSelectedId: setSelectedId,
  };

  return (
    <SectionForm
      isOpen={isOpen}
      expandProps={expandCollapseSectionButtonProps}
      selectedId={selectedId}
      object={education}
      handleEditArgs={handleEditArgs}
      addObjectArgs={addObjectArgs}
      objectsInputComponent={
        <EducationInput education={education} setEducation={setEducation} />
      }
      addButtonProps={addButtonProps}
      dynamicListProps={dynamicListProps}
    />
  );
};

export default EducationBuilder;