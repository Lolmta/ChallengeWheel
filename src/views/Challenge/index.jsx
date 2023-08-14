import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import ChallengeWheel from "../../components/ChallengeWheel";

import challengeStore from "../../stores/challenge-store";
import { API_URL, REFRESH_INTERVAL } from "../../utils/constants";

import { Wrapper } from "./Challenge.styled";

const Challenge = observer(() => {
  const [questions, setQuestions] = useState();

  const { setTimeIsUp } = challengeStore;

  async function fetchQuestions(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  }

  useEffect(() => {
    fetchQuestions(API_URL);

    setTimeout(() => {
      setTimeIsUp();
    }, REFRESH_INTERVAL);
  }, []);

  if (!questions) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <ChallengeWheel questions={questions} />
    </Wrapper>
  );
});

export default Challenge;
