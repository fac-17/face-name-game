import React from "react";
import "./gamePage.css";
import { positionArray } from "./../../utils/constants";
import GameInfoBar from "../../components/GameInfoBar";

const GamePage = ({
  gameArrays: { gamePhasesArray, correctPositionArray }
}) => {
  const [playerPositionIndex, setplayerPositionIndex] = React.useState(0);
  const [selectedIndex, setselectedIndex] = React.useState(null);
  const [currentPhase, setCurrentPhase] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState("start");

  const correctIndex = correctPositionArray[currentPhase];
  // console.log({ correctIndex });
  const correctName = gamePhasesArray[currentPhase][correctIndex].name;
  // console.log({ correctName });
  const styleObj = {
    transform: positionArray[playerPositionIndex]
  };

  React.useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "ArrowLeft") {
        if (playerPositionIndex === 0) return;
        else {
          setplayerPositionIndex(current => current - 1);
        }
      }
      if (event.key === "ArrowRight") {
        if (playerPositionIndex === 3) return;
        else {
          setplayerPositionIndex(current => current + 1);
        }
      }
      // console.log("player position", playerPositionIndex);
      if (event.key === " " && gameStatus === "start") {
        setselectedIndex(playerPositionIndex);
        if (playerPositionIndex === correctIndex) {
          setScore(s => s + 1);
        }
        // console.log("index of selection", playerPositionIndex);

        //load next game phase
        if (currentPhase < gamePhasesArray.length - 1) {
          setCurrentPhase(oldPhase => oldPhase + 1);
        } else {
          setGameStatus("end");
        }
        //reset so nothing is selected
        setselectedIndex(-1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    correctIndex,
    currentPhase,
    gamePhasesArray.length,
    selectedIndex,
    playerPositionIndex,
    gameStatus
  ]);

  return (
    <div className="main-container">
      {gameStatus === "start" ? (
        <>
          <GameInfoBar
            currentPhase={currentPhase}
            correctName={correctName}
            score={score}
          />
          <div className="game-container">
            <div className="column"></div>

            {[0, 1, 2, 3].map(imgNum => {
              return (
                <div
                  className={`img img${imgNum} ${
                    selectedIndex === imgNum && selectedIndex === correctIndex
                      ? "shot-down-correct"
                      : selectedIndex === imgNum
                      ? "shot-down-incorrect"
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(${gamePhasesArray[currentPhase][imgNum].image})`
                  }}
                ></div>
              );
            })}

            <div className="player-character" style={styleObj}></div>
          </div>

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
        </div>
      )}
    </div>
  );
};

export default GamePage;
