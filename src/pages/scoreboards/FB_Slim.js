import React from "react";

const FBSlim = ({ V_score, H_score, Period, Time, Down, Distance }) => {
  return (
    <>
      <img alt="Broadcaster Logo"></img>
      <h1>Visitor Score: {V_score}</h1>
      <h1>Home Score: {H_score}</h1>
      <h1>Quarter {Period}</h1>
      <h1>{Time}</h1>
      <h1>{Down} & {Distance}</h1>
    </>
  );
};

export default FBSlim;


