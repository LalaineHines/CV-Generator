import React from "react";

const PersonalDetailsInput = ({ detailsList, setDetailsList }) => {
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="1-fullName">Full name</label>
        <input
          type="text"
          id="1-fullName"
          placeholder="Enter your name..."
          value={detailsList.fullName}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, fullName: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-address">Address</label>
        <input
          type="text"
          id="1-address"
          placeholder="Enter your address..."
          value={detailsList.address}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, address: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-phone">Phone Number</label>
        <input
          type="tel"
          id="1-phone"
          placeholder="Enter your phone number..."
          value={detailsList.phoneNumber}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, phoneNumber: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-email">Email</label>
        <input
          type="email"
          id="1-email"
          placeholder="Enter your email..."
          value={detailsList.email}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, email: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-GitHub">GitHub Profile Link</label>
        <input
          type="url"
          id="1-GitHub"
          placeholder="Enter your GitHub profile link..."
          value={detailsList.GitHub}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, GitHub: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-LinkedIn">LinkedIn Profile Link</label>
        <input
          type="url"
          id="1-LinkedIn"
          placeholder="Enter your LinkedIn profile link..."
          value={detailsList.LinkedIn}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({ ...detailsList, LinkedIn: event.target.value })
          }
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="1-personalWebsite">Personal Website Link (optional)</label>
        <input
          type="url"
          id="1-personalWebsite"
          placeholder="Enter your personal website profile link..."
          value={detailsList.personalWebsite}
          className="bg-neutral-200 p-2 pl-3 rounded-md text-sm overflow-hidden outline-none"
          onChange={(event) =>
            setDetailsList({
              ...detailsList,
              personalWebsite: event.target.value,
            })
          }
        />
      </div>
    </>
  );
};

export default PersonalDetailsInput;