import React from "react";

export const ForecastTemplate = props => {
  // const icon = new Skycons({ color: "FFFFFF" });
  // icon.set("icon", Skycons.CLEAR_DAY);
  // icon.play();

  console.log(props.weatherIcon);

  return (
    <div className="weather-data">
      <h1 className="day-name">{props.day.dayName}</h1>
      {/* <canvas width="128px" height="128px" id="icon"></canvas> */}
      <div className="temps">
        <p className="min-temp">{props.day.minTemp}</p>
        <p className="max-temp">{props.day.maxTemp}</p>
      </div>
      <img
        src={props.weatherIcon}
        alt="Weather Icon"
        width="75px"
        height="75px"
      />
      <canvas id="icon" width="100px" height="100px"></canvas>
    </div>
  );
};
