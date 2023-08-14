import React from "react";
import { observer } from "mobx-react-lite";

import Card from "../../components/Card";

import challengeStore from "../../stores/challenge-store";

import { Wrapper, Button } from "./InfoScreen.styled";

const InfoScreen = observer(() => {
  const { setStart, resetChallenge, points, timeIsUp } = challengeStore;

  if (timeIsUp) {
    return (
      <Wrapper>
        <Card title="Well done!">
          <p>Your points : {points}</p>
          <Button onClick={() => resetChallenge()}>Restart</Button>
        </Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Card
        title=" Hello! Ahead of you is a quiz of questions related to video games. But
        before you start, please read the following points"
      >
        <ul>
          <li>You will have three attempts to score points</li>
          <li>20 seconds will be given for each stage</li>
          <li>
            From the moment you click on the button below, the test will begin
          </li>
        </ul>
        <Button onClick={() => setStart()}>Start</Button>
      </Card>
    </Wrapper>
  );
});

export default InfoScreen;
