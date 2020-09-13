import React, { useState } from "react";
import { fetchQuestions } from "./API";

// Types
import { Category, QuestionState } from "./API";
// Components
import QuizCard from "./components/QuizCard";
import { totalmem } from "os";

// Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

const TOTAL_QUESTIONS = 10;
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestion] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [chosenAnswers, setChosenAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [quizOver, setQuizOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setQuizOver(false);

    const newQuestions = await fetchQuestions(
      TOTAL_QUESTIONS,
      Category.DEFAULT
    );

    // ToDO add error handling try/catch on setQuestion
    setQuestion(newQuestions);
    setScore(0);
    setChosenAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkSelectedAnswer = (e: React.MouseEvent) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>My React Quiz</h1>

      {quizOver || chosenAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>
          Begin
        </button>
      ) : null}

      {!quizOver && <p className="users-score">Score:</p>}
      {loading && <p>Loading...</p>}
      {!loading && !quizOver && (
        <QuizCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          chosenAnswer={chosenAnswers ? chosenAnswers[number] : undefined}
          callback={checkSelectedAnswer}
        />
      )}
      {!quizOver &&
        !loading &&
        chosenAnswers.length === number + 1 &&
        number === TOTAL_QUESTIONS - 1 && (
          <button className="next" onClick={nextQuestion}>
            Next
          </button>
        )}
    </div>
  );
};

export default App;
