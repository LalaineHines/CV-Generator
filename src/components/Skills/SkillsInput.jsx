import React from "react";

const SkillsInput = ({ skill, setSkill }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="2-skill">Skill</label>
        <input
          type="text"
          id="2-skill"
          placeholder="Enter a skill..."
          value={skill.skillName}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setSkill({ ...skill, skillName: event.target.value })
          }
          required
        />
      </div>
    </>
  );
};

export default SkillsInput;