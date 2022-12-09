import "./App.css";
import Weather from "./Weather";
import WeatherUnit from "./WeatherUnit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Bogota" />
      </header>
    </div>
  );
}

export default App;
