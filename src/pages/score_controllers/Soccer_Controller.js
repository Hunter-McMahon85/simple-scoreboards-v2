/*
Soccer.js
Description:
host the soccer scorekeeper component; UI interface for controlling/updating the soccer scoreboard
Creation date:
Inital Author: Hunter McMahon
*/
import React from "react";

const SoccerScorekeeper = ({
  U_score,
  Change_Period,
  ResetTime,
  IncrementTime,
  StopClock,
  hcolor,
  vcolor,
}) => {
  const home_color = {
    backgroundColor: hcolor,
  };
  const vis_color = {
    backgroundColor: vcolor,
  };

  return (
    <div className="scorekeeper">
      <div className="teams">
        <div className="Home" style={home_color}>
          <button onClick={() => U_score("h", 1)}>Home Goal</button>
          <button onClick={() => U_score("h", -1)}>Undo Goal</button>
        </div>
        <div className="Away" style={vis_color}>
          <button onClick={() => U_score("v", 1)}>Visitors Goal</button>
          <button onClick={() => U_score("v", -1)}>Undo Goal</button>
        </div>
      </div>

      <div className="timectrl">
        <button onClick={() => ResetTime(45, 1)}>reset clock</button>
        <button onClick={() => IncrementTime()}>run clock</button>
        <button onClick={() => StopClock()}>stop clock</button>
        <button onClick={() => Change_Period()}>Change Half</button>
      </div>
    </div>
  );
};

export default SoccerScorekeeper;
