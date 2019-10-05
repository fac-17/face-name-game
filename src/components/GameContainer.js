import React from "react";
import { positionArray } from "./../utils/constants";

const GameContainer = ({
  correctIndex,
  gamePhasesArray,
  currentPhase,
  setCurrentPhase,
  setScore,
  gameStatus,
  setGameStatus
}) => {
  const [playerPositionIndex, setplayerPositionIndex] = React.useState(0);
  const [selectedIndex, setselectedIndex] = React.useState(null);

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
          return () => window.removeEventListener("keydown", handleKeyDown);
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
    setScore,
    setCurrentPhase,
    setGameStatus,
    gameStatus
  ]);

  return (
    <div className="game-container">
      {[0, 1, 2, 3].map(imgNum => {
        return (
          <div
            key={`img${imgNum}`}
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
  );
};

export default GameContainer;
