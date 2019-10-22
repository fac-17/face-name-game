import React from "react";
import "./App.css";

import HomePage from "./views/homePage/homePage";
import GamePage from "./views/gamePage/gamePage";
import LoadPage from "./views/loadPage/loadPage";

const App = () => {
  const [page, setPage] = React.useState("home");
  const [profiles, setProfiles] = React.useState("");
  const [gameArrays, setGameArrays] = React.useState("");

  return (
    <div className="App">
      <header className="App-header">SPACE4 INVADERS</header>
      {page === "home" ? (
        <HomePage
          setPage={setPage}
          profiles={profiles}
          setProfiles={setProfiles}
        />
      ) : page === "load" ? (
        <LoadPage
          profiles={profiles}
          setPage={setPage}
          setGameArrays={setGameArrays}
        />
      ) : page === "game" ? (
        <GamePage gameArrays={gameArrays} setPage={setPage} />
      ) : (
        <p>ERROR!!!</p>
      )}
    </div>
  );
};

export default App;
