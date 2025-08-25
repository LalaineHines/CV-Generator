import React, { useState } from "react";

import SectionForm from "../ui/SectionForm";
import SkillsInput from "./SkillsInput";

const SkillsBuilder = ({ skillsList, setSkillsList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [skill, setSkill] = useState({
    id: crypto.randomUUID(),
    skillName: "",
  });

  const expandCollapseSectionButtonProps = {
    sectionName: "Skills",
    isOpen: isOpen,
    onClick: () => setIsOpen(!isOpen),
  };

  const handleEditArgs = [
    skill,
    setSkillsList,
    selectedId,
    setSelectedId,
    setSkill,
  ];

  const addObjectArgs = [skill, setSkill, skillsList, setSkillsList];

  const addButtonProps = {
    object: skill,
    setObject: setSkill,
    setObjectsList: setSkillsList,
    selectedId: selectedId,
    setSelectedId: setSelectedId,
    objectName: "skillName",
  };

  const dynamicListProps = {
    list: skillsList,
    name: "skillName",
    setFunction: setSkill,
    setSelectedId: setSelectedId,
  };

  return (
    <SectionForm
      isOpen={isOpen}
      expandProps={expandCollapseSectionButtonProps}
      selectedId={selectedId}
      object={skill}
      handleEditArgs={handleEditArgs}
      addObjectArgs={addObjectArgs}
      objectsInputComponent={
        <SkillsInput skill={skill} setSkill={setSkill} />
      }
      addButtonProps={addButtonProps}
      dynamicListProps={dynamicListProps}
    />
  );
};

export default SkillsBuilder;