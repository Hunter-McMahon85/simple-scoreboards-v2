/*
FB_controller.js
Description:
host the football scorekeeper component; UI interface for controlling/updating the football scoreboard
Creation date:
Inital Author: Hunter McMahon
*/
import React, { useState } from "react";

const FBScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  DecrementTime,
  StopClock,
  DefDown,
  DefDistance,
  hcolor,
  vcolor,
}) => {
  const [DistIn, setDistIn] = useState("");
  const [LastScore, setLastScore] = useState(0);
  const home_color = {
    backgroundColor: hcolor,
  };
  const vis_color = {
    backgroundColor: vcolor,
  };

  const handleDistIn = (event) => {
    setDistIn(event.target.value);
  };

  const handleScoreChange = (team, amount) => {
    U_score(team, amount);
    setLastScore(amount * -1);
  };

  return (
    <div className="scorekeeper">
      <div className="teams">
        <div className="Home" style={home_color}>
          <button onClick={() => handleScoreChange("h", 6)}>
            6pts (Touchdown)
          </button>
          <button onClick={() => handleScoreChange("h", 3)}>
            3pts (Field Goal)
          </button>
          <button onClick={() => handleScoreChange("h", 2)}>
            2pts (Safety/Conversion)
          </button>
          <button onClick={() => handleScoreChange("h", 1)}>
            1pts (Extra Point)
          </button>
          <button onClick={() => U_score("h", LastScore)}>
            Undo Last Home Score
          </button>
        </div>
        <div className="Away" style={vis_color}>
          <button onClick={() => handleScoreChange("v", 6)}>
            6pts (Touchdown)
          </button>
          <button onClick={() => handleScoreChange("v", 3)}>
            3pts (Field Goal)
          </button>
          <button onClick={() => handleScoreChange("v", 2)}>
            2pts (Safety/Conversion)
          </button>
          <button onClick={() => handleScoreChange("v", 1)}>
            1pts (Extra Point)
          </button>
          <button onClick={() => U_score("v", LastScore)}>
            Undo Last Vis Score
          </button>
        </div>
      </div>
      <div className="timectrl">
        <button onClick={() => Change_Period()}>Change Quarter</button>
        <button onClick={() => ResetTime(15, -1)}>Reset Clock</button>
        <button onClick={() => DecrementTime()}>Run Clock</button>
        <button onClick={() => StopClock()}>Stop Clock</button>
      </div>
      <br></br>
      <div className="misctrl">
        <button onClick={() => DefDown("1st")}>1st Down</button>
        <button onClick={() => DefDown("2nd")}>2rd Down</button>
        <button onClick={() => DefDown("3rd")}>3rd Down</button>
        <button onClick={() => DefDown("4th")}>4th Down</button>
      </div>
      <br></br>
      <p>Enter Distance:</p>
      <input type="text" value={DistIn} onChange={handleDistIn}></input>
      <button onClick={() => DefDistance(DistIn)}>Change Distance</button>
    </div>
  );
};

export default FBScorekeeper;
