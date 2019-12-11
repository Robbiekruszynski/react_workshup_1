import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "It is warm outside!",
    iconName: "sun"
  },
  winter: {
    text: "It is cold outside!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // {text, iconName }
  return (
    <div className={`season-display ${season}`}>
    <div className="body">
      <h1>{text}</h1>
    </div>
    </div>
  );
};

export default SeasonDisplay;
