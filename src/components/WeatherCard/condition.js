import React from "react";
import styled from "@emotion/styled";

const Container = styled.h3`
  font-family: "Merriweather", sans-serif;
  font-size: 1.2rem;
`;

const Condition = ({ condition }) => {
  return <Container>{condition}</Container>;
};

export default Condition;
