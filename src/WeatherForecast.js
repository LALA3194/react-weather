import React from "react";
import Weather from "./Weather";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div class="col">
        <img
          src={props.weatherData.imgUrl}
          alt={props.weatherData.description}
          className="main-icon"
        />
      </div>
    </div>
  );
}
