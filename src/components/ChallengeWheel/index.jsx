import { useEffect, useState } from "react";

import ChallengeCard from "../ChallengeCard";

import { Container } from "./Wheel.styled";

const ChallengeWheel = ({ questions }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <Container
      style={{
        transform: `translateY(-${coords.y * 2}px)`,
      }}
    >
      {Object.values(questions).map((question) => (
        <ChallengeCard
          question={question.question}
          type={question.type}
          incorrect_answers={question.incorrect_answers}
          correct_answer={question.correct_answer}
        />
      ))}
    </Container>
  );
};

export default ChallengeWheel;
