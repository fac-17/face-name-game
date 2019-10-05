import React from "react";

const TeamForm = ({ profiles }) => {
  const teamMember = (profile, index) => {
    return (
      <div key={index + profile} className="team-member">
        <img className="team-member-image" src={profile.image} />
        <p className="team-member-name">{profile.name}</p>
      </div>
    );
  };

  return (
    <div id="team-preview">
      {profiles.map((profile, index) => teamMember(profile, index))}
    </div>
  );
};

export default TeamForm;
