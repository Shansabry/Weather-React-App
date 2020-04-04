import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";
import styled from "@emotion/styled";

const Form = styled.form`
  align: center;
`;

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    temperature: null,
    condition: null
  });
  const getWeatherdata = async q => {
    setLoading(true);
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q},uk&APPID=ca0694de1517a4f35a884b29d8d38865`
    );
    const resJSON = await apiRes.json();
    setWeather({
      city: resJSON.name,
      country: resJSON.sys.country,
      temperature: resJSON.main.temp,
      condition: resJSON.weather[0].main
    });
    setLoading(false);
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeatherdata(query);
  };

  useEffect(() => {
    getWeatherdata(location);
  }, [location]);

  return (
    <div>
      {!loading ? (
        <div>
          <WeatherCard
            temperature={weather.temperature}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <Form>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
            ></input>
            <button onClick={e => handleSearch(e)}>Search</button>
          </Form>
        </div>
      ) : (
        <div style={{ color: "black" }}>Loading</div>
      )}
    </div>
  );
};

export default WeatherEngine;
