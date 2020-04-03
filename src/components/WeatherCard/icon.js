import React from "react";
import styled from "@emotion/styled";

const Icon = props => {
  const Container = styled.img`
    width: 40%;
  `;
  var icon = "";
  switch (props.condition) {
    case "Clear":
      icon = "./img/weather-icons/021-sun.png";
      break;
    case "Clouds":
      icon = "./img/weather-icons/021-cloudy-1.png";
      break;
    case "Haze":
      icon = `./img/weather-icons/021-sunrise.png`;
      break;
    case "Hail":
      icon = `./img/weather-icons/021-snowing-2.png`;
      break;
    case "Fog":
      icon = `./img/weather-icons/021-snowing-2.png`;
      break;
    case "Tornado":
      icon = `./img/weather-icons/021-tornado.png`;
      break;
    case "Dust":
      icon = `./img/weather-icons/021-cloudy-2.png`;
      break;
    case "Mist":
      icon = `./img/weather-icons/021-snowing-2.png`;
      break;
    case "Snow":
      icon = `./img/weather-icons/021-snowing-1.png`;
      break;
    case "Rain":
      icon = `./img/weather-icons/021-rain.png`;
      break;
    case "Drizzle":
      icon = `./img/weather-icons/021-rain-1.png`;
      break;
    case "Thunderstorm":
      icon = `./img/weather-icons/021-storm.png`;
      break;
    default:
      icon = "./img/weather-icons/021-sun.png";
      break;
  }
  return <Container src={icon} alt="weather-icon"></Container>;
};

export default Icon;
