import React from "react";
// Types
import { AnswerObject } from "../App";
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  chosenAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};
const QuizCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  chosenAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button
            value={answer}
            disabled={chosenAnswer ? true : false}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuizCard;
