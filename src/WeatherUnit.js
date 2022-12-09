import React, { useState } from "react";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <strong>{Math.round(props.fahrenheit)}</strong>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div>
        <strong>{Math.round(celsius)}</strong>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F{" "}
          </a>
          | °C
        </span>
      </div>
    );
  }
}
