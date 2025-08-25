import React, { useRef } from "react";

import ResumePage from "./ResumePage";
import { useReactToPrint } from "react-to-print";

const ResumeWithPrint = ({ details, skills, projects, work, education }) => {
  const contentRef = useRef(null);
const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button
        onClick={reactToPrintFn}
        className="px-5 py-2 bg-blue-800 hover:bg-blue-700 cursor-pointer text-white font-medium rounded-full mb-4 transition-all duration-300"
      >
        Download PDF
      </button>
      <div>
        <ResumePage
          details={details}
          skills={skills}
          projects={projects}
          work={work}
          education={education}
          ref={contentRef}
        />
      </div>
    </div>
  );
};

export default ResumeWithPrint;