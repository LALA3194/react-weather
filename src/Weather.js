import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
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
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <div className="search-box">
                <form id="search-form" className="mb-4">
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="search"
                        placeholder="Type City"
                        className="form-control"
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
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="main-icon"
                    />
                    <h5 className="description">{weatherData.description}</h5>
                    <br />
                    <div className="d-flex justify-content-center weather-temperature">
                      <div>
                        <strong>{Math.round(weatherData.temperature)}</strong>
                        <span className="units">°F | °C</span>
                      </div>
                    </div>
                    <ul>
                      <li>
                        Humidity: <span>{weatherData.humidity}</span>%
                      </li>
                      <li>
                        Wind: <span>{Math.round(weatherData.wind)}</span> m/h
                      </li>
                    </ul>
                    <h3>
                      <FormattedDate date={weatherData.date} />
                    </h3>
                  </div>
                </div>
                <div className="col">
                  <div id="forecast"></div>
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
    const apiKey = "481c6a3fa86a825atc87349b7401ae6o";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading... ";
  }
}
