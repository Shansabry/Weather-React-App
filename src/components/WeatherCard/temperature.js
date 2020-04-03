import React from "react";
import styled from "@emotion/styled";

const Container = styled.h1`
  font-family: "Fira sans", sans-serif;
  font-size: 2rem;
  font-weight: 200;
`;

const Temperature = props => {
  return <Container>20°C</Container>;
};

export default Temperature;
