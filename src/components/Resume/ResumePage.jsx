import React, { forwardRef } from "react";

import AutoPaginatedResume from "./AutoPaginatedResume";
import EducationPageSection from "../Education/EducationPageSection";
import PersonalDetailsPageSection from "../PersonalDetails/PersonalDetailsPageSection";
import ProjectsPageSection from "../Projects/ProjectsPageSection";
import SkillsPageSection from "../Skills/SkillsPageSection";
import WorkExperiencePageSection from "../WorkExperience/WorkExperiencePageSection";

const ResumePage = forwardRef(
  ({ details, skills, projects, work, education }, ref) => {
    return (
      <AutoPaginatedResume ref={ref}>
        <PersonalDetailsPageSection details={details} />
        <EducationPageSection education={education} />
        <SkillsPageSection skills={skills} />
        <ProjectsPageSection projects={projects} />
        <WorkExperiencePageSection work={work} />
      </AutoPaginatedResume>
    );
  }
);

export default ResumePage;