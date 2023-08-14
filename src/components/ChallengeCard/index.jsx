import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import Card from "../Card";

import challengeStore from "../../stores/challenge-store";
import { replaceQuot } from "../../utils/functions";

import { Answer, AnswerList } from "./ChallengeCard.styled";

const ChallengeCard = observer((props) => {
  const [answered, setAnswered] = useState(false);

  const { increasePoints } = challengeStore;
  const { question, incorrect_answers, correct_answer } = props;

  const answers = [...incorrect_answers, correct_answer];
  const normalizedQuestion = replaceQuot(question);

  const answerHandler = (answer) => {
    setAnswered(true);
    if (answer === correct_answer) {
      increasePoints();
    }
  };

  return (
    <Card title={normalizedQuestion} blur={answered}>
      <AnswerList>
        {answers.map((answer) => (
          <Answer onClick={() => answerHandler(answer)}>
            {replaceQuot(answer)}
          </Answer>
        ))}
      </AnswerList>
    </Card>
  );
});

export default ChallengeCard;
