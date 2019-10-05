import React from "react";

const SearchStatus = ({ profiles, loadGame }) => {
  const notFound = <p>not Found</p>;
  const searchForTeam = (
    <p>
      (Stop reading things and search for a team you fool){" "}
      <span role="img" aria-label="rolly-emoji">
        🙃
      </span>
    </p>
  );
  const loading = (
    <p>
      {" "}
      Loading{" "}
      <span role="img" aria-label="timer-emoji">
        ⏳
      </span>
    </p>
  );
  const loadGameComponent = Array.isArray(profiles) ? (
    <div className="game-to-play">
      <h2>Team Found with {profiles.length} members</h2>
      <button className="load-button" onClick={loadGame}>
        Load Game
      </button>
    </div>
  ) : (
    <p> error </p>
  );

  return (
    <>
      {profiles === ""
        ? searchForTeam
        : profiles === "error"
        ? notFound
        : profiles === "loading"
        ? loading
        : loadGameComponent}
    </>
  );
};

export default SearchStatus;
