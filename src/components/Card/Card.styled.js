import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 60rem;
  padding: 1rem;

  box-sizing: border-box;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  position: relative;
  z-index: 1;

  &:hover {
    filter: blur(0px);
    transform: scale(1.1);
    opacity: 1;
  }

  & > h2 {
    text-align: center;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #b521bf;

  clip-path: ${(props) =>
    `ellipse(170px 162px at  ${props.side} ${props.incline})`};

  text-align: center;
  z-index: -1;
  border-radius: 10px;
`;

export const Blurry = styled.div`
  position: absolute;
  backdrop-filter: blur(75px);
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0.5;
  border-radius: 10px;

  width: 100%;
  height: 100%;
`;
