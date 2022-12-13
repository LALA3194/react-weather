import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.temperature);
    setReady(true);
  }

  if (ready) {
    console.log(forecast);
    return (
      <div className="weather-forecast">
        <div className="col">
          <span className="day">forecastDay</span>
          <div className="temp">
            <span className="max-temp">H:{forecast}max ℉ </span>
            <span className="min-temp">L:min ℉</span>
          </div>
        </div>
        <div className="col-auto">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt=""
            width="50"
          />
        </div>
      </div>
    );
  } else {
    let apiKey = "481c6a3fa86a825atc87349b7401ae6o";
    let city = props.city.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
