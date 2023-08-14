import styled from "styled-components";

export const Answer = styled.div`
  text-align: center;
  padding: 10px;
  box-sizing: border-box;

  border-radius: 5px;

  cursor: pointer;
  flex: 40%;

  ${(props) => props.answered && "background: #b521bf"};

  &:hover {
    background: #b521bf;
  }
`;

export const AnswerList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
