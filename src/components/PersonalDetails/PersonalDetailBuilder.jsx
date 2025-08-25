import React, { useState } from "react";

import ExpandCollapseSectionButton from "../ui/ExpandCollapseSectionButton";
import PersonalDetailsInput from "./PersonalDetailsInput";

const PersonalDetailsBuilder = ({ detailsList, setDetailsList }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full bg-white rounded-lg  shadow-lg overflow-hidden">
      <ExpandCollapseSectionButton
        sectionName="Personal Details"
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`${
          !isOpen ? "h-0 p-0 opacity-0" : "p-5 pb-8 opacity-100"
        } w-full flex flex-col pt-0 space-y-4`}
      >
        <PersonalDetailsInput detailsList={detailsList} setDetailsList={setDetailsList} />
      </div>
    </section>
  );
};

export default PersonalDetailsBuilder;