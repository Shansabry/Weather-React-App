import React from "react";
import styled from "@emotion/styled";
import Location from "./location";
import Icon from "./icon";
import Temperature from "./temperature";
import Condition from "./condition";

const red = 800;
const Card = styled.div`
  margin: 0 auto;
  background: linear-gradient(to bottom, rgba(${red}, 200, 200), lightblue);
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;
const WeatherCard = props => {
  return (
    <Card>
      <Location />
      <Icon />
      <Temperature />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
