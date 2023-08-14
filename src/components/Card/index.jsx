import React from "react";
import { Wrapper, Circle, Blurry } from "./Card.styled";

const Card = ({ title, blur, children }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{children}</div>
      <Circle side="left" incline="0%" />
      <Circle side="right" incline="100%" />
      {blur && <Blurry />}
    </Wrapper>
  );
};

export default Card;
