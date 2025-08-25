import React, { useState } from "react";

const ExpandCollapseSectionButton = ({ sectionName, isOpen, onClick }) => {

  return (
    <button
      className={`w-full flex justify-between items-center p-5 text-2xl font-bold cursor-pointer`}
      onClick={onClick}
    >
      <h2 className="text-left">{sectionName}</h2>
      <i className={`bx bx-chevron-${isOpen ? "up" : "down"} text-3xl transition-all duration-300`}></i>
    </button>
  );
};

export default ExpandCollapseSectionButton;