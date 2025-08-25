import React, { useState } from "react";

import EducationBuilder from "../Education/EducationBuilder";
import PersonalDetailsBuilder from "../PersonalDetails/PersonalDetailsBuilder";
import ProjectsBuilder from "../Projects/ProjectsBuilder";
import ResumeWithPrint from "../Resume/ResumeWithPrint";
import SkillsBuilder from "../Skills/SkillsBuilder";
import WorkExperienceBuilder from "../WorkExperience/WorkExperienceBuilder";

const Builder = () => {
  const [detailsList, setDetailsList] = useState({
    fullName: "Ioana Franț",
    address: "Iasi, Romania",
    phoneNumber: "+40761234567",
    email: "frantioana507@gmail.com",
    GitHub: "https://github.com/I0ANA24",
    LinkedIn: "https://www.linkedin.com/in/ioana-fran%C8%9B-949b70254/",
    personalWebsite: "",
  });

  const [skillsList, setSkillsList] = useState([
    {
      id: crypto.randomUUID(),
      skillName: "React",
    },
    {
      id: crypto.randomUUID(),
      skillName: "TailwindCSS",
    },
  ]);

  const [projectsList, setProjectsList] = useState([
    {
      id: crypto.randomUUID(),
      name: "YouTube Clone",
      skills: "HTML, CSS, JavaScript, React, TailwindCSS",
      startDate: "2025-03-22",
      endDate: "2025-03-30",
      description:
        "Developed a responsive YouTube clone using React and TailwindCSS, featuring video playback, search functionality, and interactive UI components to provide a seamless user experience across devices.",
      livePreview: "https://github.com/I0ANA24/CV-Application-Top",
      codePreview: "https://github.com/I0ANA24",
    },
    {
      id: crypto.randomUUID(),
      name: "E-commerce Website",
      skills: "HTML, CSS, JavaScript, React, TailwindCSS, NodeJS",
      startDate: "2025-04-18",
      endDate: "2025-06-03",
      description:
        "Developed a full-featured e-commerce website using React, TailwindCSS, and NodeJS, implementing product listings, shopping cart, user authentication, and responsive design for an optimal shopping experience.",
      livePreview: "https://github.com/I0ANA24/CV-Application-Top",
      codePreview: "https://github.com/I0ANA24",
    },
  ]);

  const [workList, setWorkList] = useState([
    {
      id: crypto.randomUUID(),
      role: "Frontend Developer Intern",
      company: "TechNova Solutions",
      location: "Bucharest, Romania",
      startDate: "2024-07-01",
      endDate: "2024-09-30",
      description:
        "Developed responsive web pages using React and TailwindCSS, improved website performance by 25%, and collaborated with the backend team to integrate REST APIs.",
    },
    {
      id: crypto.randomUUID(),
      role: "Web Developer Freelancer",
      company: "Freelance",
      location: "Remote",
      startDate: "2025-01-15",
      endDate: "2025-04-20",
      description:
        "Built an e-commerce website with HTML, CSS, JavaScript, and NodeJS, implemented payment gateway integration, and optimized user experience for mobile devices.",
    },
  ]);

  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      degree: "Bachelor of Engineering (BEng) in Computer Science",
      name: "University of Tokyo",
      location: "Tokyo, Japan",
      startDate: "2025-04-01",
      endDate: "2029-03-31",
    },
    {
      id: crypto.randomUUID(),
      degree: "Bachelor of Science (BSc) in Computer Science",
      name: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, Massachusetts, USA",
      startDate: "2021-09-02",
      endDate: "2025-06-05",
    },
  ]);

  return (
    <main className="w-full flex flex-col gap-8 lg:flex-row">
      <section className="w-full lg:w-[50%] space-y-4">
        <PersonalDetailsBuilder
          detailsList={detailsList}
          setDetailsList={setDetailsList}
        />
        <SkillsBuilder skillsList={skillsList} setSkillsList={setSkillsList} />
        <ProjectsBuilder
          projectsList={projectsList}
          setProjectsList={setProjectsList}
        />
        <WorkExperienceBuilder workList={workList} setWorkList={setWorkList} />
        <EducationBuilder
          educationList={educationList}
          setEducationList={setEducationList}
        />
      </section>
      <ResumeWithPrint
        details={detailsList}
        skills={skillsList}
        projects={projectsList}
        work={workList}
        education={educationList}
      />
    </main>
  );
};

export default Builder;