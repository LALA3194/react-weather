import React from "react";

export default function WeatherUnit(props) {
  return (
    <div>
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units">°F | °C</span>
    </div>
  );
}
