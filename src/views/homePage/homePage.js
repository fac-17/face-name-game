import React from "react";
import "./homePage.css";
import requestMembers from "../../utils/requestMembers";

import TeamForm from "../../components/teamForm/TeamForm";
import SearchStatus from "../../components/SearchStatus/SearchStatus";

const HomePage = ({ setPage, profiles, setProfiles }) => {
  const loadGame = () => {
    setPage("load");
  };

  function handleSubmit(event) {
    event.preventDefault();
    const team = event.target.elements.team.value;
    const org = event.target.elements.organisation.value;
    setProfiles("loading");
    requestMembers(org, team).then(profiles => {
      setProfiles(profiles);
    });
  }

  return (
    <div className="home-page">
      <div>
        <h1>Learn Names and Faces</h1>
        <div className="instructions">
          <p>We currently only use github data.</p>
          <p className="instruction-item">
            1. Enter an organisation on Github (e.g. 'FAC-17')
          </p>
          <p className="instruction-item">
            2. Enter a team within that organisation (e.g. 'students') and get
            learning
          </p>
        </div>
      </div>
      <TeamForm handleSubmit={handleSubmit} />
      <SearchStatus profiles={profiles} loadGame={loadGame} />
      <br />
    </div>
  );
};

export default HomePage;
