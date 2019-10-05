import React from "react";

const GameInfoBar = ({ currentPhase, correctName, score }) => {
  return (
    <div className="game-info">
      <h2>
        Phase: <span className="highlight-text">{currentPhase + 1}</span>
      </h2>
      <h2 className="target">
        Who is <span className="highlight-text">{correctName}</span>
      </h2>
      <h3>
        Score: <span className="highlight-text">{score}</span>
      </h3>
    </div>
  );
};

export default GameInfoBar;
