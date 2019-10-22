import React from "react";
import "./loadPage.css";
import generateGameArrays from "./../../utils/generateGameArrays";
import TeamPreview from "./../../components/TeamPreview";

const LoadPage = ({ profiles, setPage, setGameArrays }) => {
  const startGame = event => {
    event.preventDefault();
    generateGameArrays(profiles).then(gameArrays => {
      setGameArrays(gameArrays);
      setPage("game");
    });
  };

  return (
    <div className="load-page">
      <h2>Instructions</h2>
      <div className="instructions">
        <p>
          In the game you'll see a row of 4 faces and you need to shoot the
          right one (using spacebar).
        </p>
        <p className="instruction-item">
          1. Quickly try and remember these names and faces
        </p>
        <p className="instruction-item">
          2. Win a point each time you guess correct
        </p>
        <p className="instruction-item">
          3. Feel like a failure if you get it wrong
        </p>
      </div>

      <br />

      <TeamPreview profiles={profiles} />

      <br />

      <h2>Are You Ready to play???</h2>
      <button id="start-button" onClick={startGame}>
        Start Game
      </button>
    </div>
  );
};

export default LoadPage;
