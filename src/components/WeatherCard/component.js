import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Temperature from "./temperature";
import Condition from "./condition";

const WeatherCard = props => {
  let highColor = 255;
  let lowColor = 0;
  let redColor = 0;
  let blueColor = 0;
  let bg = null;
  if (props.temperature > 12) {
    highColor = (1 - (props.temperature - 12) / 28) * 255;
    lowColor = highColor - 150;
    redColor = 255;
    bg = `linear-gradient(
      to top,
      rgba(${redColor}, ${highColor}, ${blueColor}),
      rgba(${redColor}, ${lowColor}, ${blueColor})
    )`;
  } else if (props.temperature <= 12) {
    highColor = (1 - (props.temperature + 20) / 32) * 255;
    lowColor = highColor - 150;
    blueColor = 255;
    bg = `linear-gradient(
      to top,
      rgba(${redColor}, ${highColor}, ${blueColor}),
      rgba(${redColor}, ${lowColor}, ${blueColor})
      )`;
  }
  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    width: 200px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;
  return (
    <Card>
      <Location />
      <Icon condition={props.condition} />
      <Temperature />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
