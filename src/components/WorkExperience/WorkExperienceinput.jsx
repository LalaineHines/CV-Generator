import React from 'react'

const WorkExperienceInput = ({ work, setWork }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="5-role">Job Title</label>
        <input
          type="text"
          id="5-role"
          placeholder="Ex: Frontend Developer"
          value={work.role}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setWork({ ...work, role: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="5-company">Company Name</label>
        <input
          type="text"
          id="5-company"
          placeholder="Ex: Centric"
          value={work.company}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setWork({ ...work, company: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="5-start">Start Date</label>
        <input
          type="date"
          id="5-start"
          value={work.startDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setWork({ ...work, startDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="5-end">End Date</label>
        <input
          type="date"
          id="5-end"
          value={work.endDate}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setWork({ ...work, endDate: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="5-description">Description</label>
        <textarea
          id="5-description"
          placeholder="Type here..."
          value={work.description}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none h-30"
          onChange={(event) =>
            setWork({ ...work, description: event.target.value })
          }
          required
        />
      </div>
    </>
  )
}

export default WorkExperienceInput