import React from "react";
import "./gamePage.css";
import GameInfoBar from "../../components/GameInfoBar";
import GameContainer from "../../components/GameContainer";

const GamePage = ({
  setPage,
  gameArrays: { gamePhasesArray, correctPositionArray }
}) => {
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("start");

  const correctIndex = correctPositionArray[currentPhase];
  // console.log({ correctIndex });
  const correctName = gamePhasesArray[currentPhase][correctIndex].name;
  const loadGame = () => {
    setPage("load");
  };
  // console.log({ correctName });

  return (
    <div className="main-container">
      {gameStatus === "start" ? (
        <>
          <GameInfoBar
            currentPhase={currentPhase}
            correctName={correctName}
            score={score}
          />
          <GameContainer
            setScore={setScore}
            setCurrentPhase={setCurrentPhase}
            correctIndex={correctIndex}
            gamePhasesArray={gamePhasesArray}
            currentPhase={currentPhase}
            gameStatus={gameStatus}
            setGameStatus={setGameStatus}
          />

          <br />

          <h4>
            Controls: Left and Right Arrow Keys to move, Spacebar to Shoot.
          </h4>
        </>
      ) : (
        <div className="game-over-container">
          <h1>Game Over</h1>
          <br />
          <h2>
            Your Score:{score}/{gamePhasesArray.length}
          </h2>
          <br />

          <button className="load-button" onClick={loadGame}>
            Reload Game
          </button>
        </div>
      )}
    </div>
  );
};

export default GamePage;
