import React, { Component } from "react";
import { ForecastTemplate } from "./ForecastTemplate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Chart from "./Chart";

import overcast from "../SVGS/overcast.svg";
import rain from "../SVGS/rain.svg";
import snow from "../SVGS/snow.svg";
import storm from "../SVGS/storm.svg";
import cloud from "../SVGS/cloud.svg";
import sunny from "../SVGS/sunny.svg";
import broken_cloud from "../SVGS/broken_cloud.svg";

class WeatheForecast extends Component {
  render() {
    const information = this.props.weatherInfo;
    console.log(information.day2.weatherDescription);

    let day1Weather = null;
    let day2Weather = null;
    let day3Weather = null;
    let day4Weather = null;
    let day5Weather = null;

    // var first = document.getElementById("preview-1");
    // first.addEventListener("click", () => {
    //   console.log("hey");
    // });

    if (information.day1.weatherDescription === "clear sky")
      day1Weather = sunny;
    if (information.day1.weatherDescription === "few clouds")
      day1Weather = overcast;
    if (information.day1.weatherDescription === "moderate rain")
      day1Weather = rain;
    if (information.day1.weatherDescription === "scattered clouds")
      day1Weather = broken_cloud;
    if (information.day1.weatherDescription === "overcast clouds")
      day1Weather = overcast;
    if (information.day1.weatherDescription === "broken clouds")
      day1Weather = broken_cloud;
    if (information.day1.weatherDescription === "shower rain")
      day1Weather = rain;
    if (information.day1.weatherDescription === "light rain")
      day1Weather = rain;
    if (information.day1.weatherDescription === "rain") day1Weather = rain;
    if (information.day1.weatherDescription === "thunderstorm")
      day1Weather = storm;
    if (information.day1.weatherDescription === "snow") day1Weather = snow;
    if (information.day1.weatherDescription === "mist") day1Weather = cloud;

    if (information.day2.weatherDescription === "clear sky")
      day2Weather = sunny;
    if (information.day2.weatherDescription === "few clouds")
      day2Weather = overcast;
    if (information.day2.weatherDescription === "moderate rain")
      day2Weather = rain;
    if (information.day2.weatherDescription === "scattered clouds")
      day2Weather = broken_cloud;
    if (information.day2.weatherDescription === "overcast clouds")
      day2Weather = overcast;
    if (information.day2.weatherDescription === "broken clouds")
      day2Weather = broken_cloud;
    if (information.day2.weatherDescription === "shower rain")
      day2Weather = rain;
    if (information.day2.weatherDescription === "light rain")
      day2Weather = rain;
    if (information.day2.weatherDescription === "rain") day2Weather = rain;
    if (information.day2.weatherDescription === "thunderstorm")
      day2Weather = storm;
    if (information.day2.weatherDescription === "snow") day2Weather = snow;
    if (information.day2.weatherDescription === "mist") day2Weather = cloud;

    if (information.day3.weatherDescription === "clear sky")
      day3Weather = sunny;
    if (information.day3.weatherDescription === "few clouds")
      day3Weather = overcast;
    if (information.day3.weatherDescription === "moderate rain")
      day3Weather = rain;
    if (information.day3.weatherDescription === "scattered clouds")
      day3Weather = broken_cloud;
    if (information.day3.weatherDescription === "overcast clouds")
      day3Weather = overcast;
    if (information.day3.weatherDescription === "broken clouds")
      day3Weather = broken_cloud;
    if (information.day3.weatherDescription === "shower rain")
      day3Weather = rain;
    if (information.day3.weatherDescription === "light rain")
      day3Weather = rain;
    if (information.day3.weatherDescription === "rain") day3Weather = rain;
    if (information.day3.weatherDescription === "thunderstorm")
      day3Weather = storm;
    if (information.day3.weatherDescription === "snow") day3Weather = snow;
    if (information.day3.weatherDescription === "mist") day3Weather = cloud;

    if (information.day4.weatherDescription === "clear sky")
      day4Weather = sunny;
    if (information.day4.weatherDescription === "few clouds")
      day4Weather = overcast;
    if (information.day4.weatherDescription === "moderate rain")
      day4Weather = rain;
    if (information.day4.weatherDescription === "scattered clouds")
      day4Weather = broken_cloud;
    if (information.day4.weatherDescription === "overcast clouds")
      day4Weather = overcast;
    if (information.day4.weatherDescription === "broken clouds")
      day4Weather = broken_cloud;
    if (information.day4.weatherDescription === "shower rain")
      day4Weather = rain;
    if (information.day4.weatherDescription === "light rain")
      day4Weather = rain;
    if (information.day4.weatherDescription === "rain") day4Weather = rain;
    if (information.day4.weatherDescription === "thunderstorm")
      day4Weather = storm;
    if (information.day4.weatherDescription === "snow") day4Weather = snow;
    if (information.day4.weatherDescription === "mist") day4Weather = cloud;

    if (information.day5.weatherDescription === "clear sky")
      day5Weather = sunny;
    if (information.day5.weatherDescription === "few clouds")
      day5Weather = overcast;
    if (information.day5.weatherDescription === "moderate rain")
      day5Weather = rain;
    if (information.day5.weatherDescription === "scattered clouds")
      day5Weather = broken_cloud;
    if (information.day5.weatherDescription === "overcast clouds")
      day5Weather = overcast;
    if (information.day5.weatherDescription === "broken clouds")
      day5Weather = broken_cloud;
    if (information.day5.weatherDescription === "shower rain")
      day5Weather = rain;
    if (information.day5.weatherDescription === "light rain")
      day5Weather = rain;
    if (information.day5.weatherDescription === "rain") day5Weather = rain;
    if (information.day5.weatherDescription === "thunderstorm")
      day5Weather = storm;
    if (information.day5.weatherDescription === "snow") day5Weather = snow;
    if (information.day5.weatherDescription === "mist") day5Weather = cloud;

    console.log(information.day1.weatherDescription);

    // let image = "";

    // if (information.day1.weatherDescription === "overcast clouds") {
    //   image = "./Images/overcastclouds.jpg";
    //   document.documentElement.style.setProperty(" --weather-image", image);
    // }

    return (
      <div className="main-weather-container">
        <div className="header">
          <Link
            to="/"
            className="location-name"
            style={{ textAlign: "center" }}
          >
            {information.cityName} - {information.country}
          </Link>
        </div>

        <div className="flex-container">
          <div id="preview-1" className="flex-item">
            <ForecastTemplate
              day={information.day1}
              weatherIcon={day1Weather}
            />
          </div>
          <div id="preview-2" className="flex-item">
            <ForecastTemplate
              day={information.day2}
              weatherIcon={day2Weather}
            />
          </div>
          <div id="preview-3" className="flex-item">
            <ForecastTemplate
              day={information.day3}
              weatherIcon={day3Weather}
            />
          </div>
          <div id="preview-4" className="flex-item">
            <ForecastTemplate
              day={information.day4}
              weatherIcon={day4Weather}
            />
          </div>
          <div id="preview-5" className="flex-item">
            <ForecastTemplate
              day={information.day5}
              weatherIcon={day5Weather}
            />
          </div>
        </div>

        <div className="chart-and-extra-info">
          <Chart props={information} />
          <div className="extra-info">
            <p>Humidity: {information.day1.avgHumidity}</p>
            <p>Wind: {information.day1.wind}</p>
            <img src={day1Weather} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherInfo: state
  };
};

export default connect(mapStateToProps)(WeatheForecast);
