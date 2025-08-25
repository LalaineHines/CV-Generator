import React from "react";

const PersonalDetailsPageSection = ({ details }) => {
  return (
    <section className="mb-6 w-full">
      <h1 className="overflow-hidden text-3xl text-center font-medium mb-1">
        {details.fullName}
      </h1>
      <div className="w-full flex justify-center gap-2 text-xs text-center overflow-hidden">
        <p>{details.address}</p>
        <p className="font-extrabold">|</p>
        <p>
          <a href={`tel:${details.phoneNumber}`}>{details.phoneNumber}</a>
        </p>
        <p className="font-extrabold">|</p>
        <p>
          <a href={`mailto:${details.email}`}>Email</a>
        </p>
        <p className="font-extrabold">|</p>
        <p>
          <a href={details.LinkedIn}>LinkedIn</a>
        </p>
        <p className="font-extrabold">|</p>
        <p>
          <a href={details.GitHub}>GitHub</a>
        </p>
        {details.personalWebsite ? <p className="font-extrabold">|</p> : null}
        <p>
          <a href={details.personalWebsite}>
            {details.personalWebsite ? "Personal Website" : null}
          </a>
        </p>
      </div>
    </section>
  );
};

export default PersonalDetailsPageSection;