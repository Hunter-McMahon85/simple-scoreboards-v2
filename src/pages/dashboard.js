// component for users choose a session to start or edit a scoreboard
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link, useNavigate } from "react-router-dom";
import SessionStart from "../page_components/session_config";
import SeshSetup from "../page_components/obs_instructions";
import "../css/dashboard.css";

async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

const Dashboard = () => {
  const [ShowSessionStart, setShowSessionStart] = useState(false);

  const handleopenSessionStart = () => {
    setShowSessionStart(true);
  };

  const handleCloseSessionStart = () => {
    setShowSessionStart(false);
  };

  let popup = (
    <>
      {ShowSessionStart && <SeshSetup onClose={handleCloseSessionStart} />}
      {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
    </>
  );
  if (typeof obsstudio !== "undefined") {
    popup = (
      <>
        {ShowSessionStart && <SessionStart onClose={handleCloseSessionStart} />}
      </>
    );
  }

  const Nav = useNavigate();
  const userPreset = undefined;

  const handleClick = (arg1, arg2) => {
    if (userPreset === undefined) {

      Nav('/presetcreator');
      return;
    }
    console.log(arg1, arg2)
    Nav('/myscorekeeper');
  };

  return (
    <>
      <div className="dash_body">
        <h1>Your Scoreboards</h1>

        <Link to="/">
          <button onClick={signOut} className="SObutton">
            Sign Out
          </button>
        </Link>

        <Link to="/presetcreator">
          <button className="PresetCreatorButton" title="Create a new template preset">
            New Preset
          </button>
        </Link>

        <button onClick={handleopenSessionStart} className="StartSessionButton"
         title="Start a scorekeeping session">
          Start Session
        </button>

        <div className="user_presets">
          <h3>Saved Presets </h3>

          {/* add source for image within the buttons */}
          <div className="preButcontain">
            <button className="PresetTile" onClick={() => handleClick('arg1', 'arg2')}>1 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick('arg1', 'arg2')}>2 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick('arg1', 'arg2')}>3 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick('arg1', 'arg2')}>4 sport <br/> team1 vs. team2</button>

            <button className="PresetTile" onClick={() => handleClick('arg1', 'arg2')}>5 sport <br/> team1 vs. team2</button>
          </div>
        </div>
      </div>
      {popup}
    </>
  );
};
export default Dashboard;
