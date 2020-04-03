import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <WeatherCard temperature={18} condition="Clouds" />
      <WeatherCard temperature={28} condition="Clear" />
      <WeatherCard temperature={-5} condition="Thunderstorm" />
      <WeatherCard temperature={40} condition="Fog" />
    </div>
  );
}

export default App;
