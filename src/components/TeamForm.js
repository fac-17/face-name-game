import React from "react";

const TeamForm = ({ handleSubmit }) => {
  return (
    <>
      <form id="team-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Organisation
          <input type="text" name="organisation" />
        </label>

        <label className="form-label">
          Team
          <input type="text" name="team" />
        </label>

        <button className="submit-button">Get Team</button>
      </form>
    </>
  );
};

export default TeamForm;
