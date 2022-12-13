import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      city: response.data.city,
      imgUrl: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "481c6a3fa86a825atc87349b7401ae6o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <div className="search-box">
                <form onSubmit={handleSubmit} id="search-form" className="mb-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="search"
                        placeholder="Type City"
                        className="form-control"
                        onChange={handleCityChange}
                        id="input-city"
                      />
                    </div>
                    <div className="col-sm-3">
                      <input
                        type="submit"
                        value="Search"
                        className="btn btn w-100"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="row">
                <div className="col">
                  <div className="today-weather">
                    <h1>{weatherData.city}</h1>
                    <h3>
                      <FormattedDate date={weatherData.date} />
                    </h3>
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="main-icon"
                    />

                    <h5 className="description mb-3">
                      {weatherData.description}
                    </h5>

                    <div className="d-flex justify-content-center weather-temperature mb-3">
                      <WeatherUnit fahrenheit={weatherData.temperature} />
                    </div>
                    <ul>
                      <li>
                        Humidity: <span>{weatherData.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span>{Math.round(weatherData.wind)}</span> mph
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <WeatherForecast city={weatherData.city} />
                </div>
              </div>
            </div>
            <small>
              <a
                className="open-source"
                href="https://github.com/LALA3194/Final-Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              by Laura Rodriguez.
              <span>
                Icons by
                <a
                  className="icon-link"
                  href="https://icons8.com/icon/set/weather/stickers"
                  target="_blank"
                  rel="noreferrer"
                >
                  icons8
                </a>
                .
              </span>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading... ";
  }
}
