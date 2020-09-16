import React, { useState } from "react";
import { fetchQuestions } from "./API";

// Types
import { Category, QuestionState } from "./API";
// Components
import QuizCard from "./components/QuizCard";
// Styling
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Redux
// import { Provider } from "react-redux";
// import store from "./redux/store";

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  beginButton: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
  },
  score: {
    position: "relative",
    left: "25%",
  },
  next: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
    marginTop: 20,
  },
});

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
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
  const classes = useStyles();

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

  const checkSelectedAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizOver) {
      // Get users answer
      const answer = e.currentTarget.value;
      // Check if answer is correct
      const correct = questions[number].correct_answer === answer;
      // If correct update score
      if (correct) setScore((prev) => prev + 1);
      // Save answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setChosenAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // Go to next question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setQuizOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <div className="App">
      <Typography className={classes.title}>
        The Ultimate Sports Quiz
      </Typography>

      {quizOver || chosenAnswers.length === TOTAL_QUESTIONS ? (
        <Button
          color="primary"
          variant="contained"
          className={classes.beginButton}
          onClick={startQuiz}
        >
          Begin
        </Button>
      ) : null}

      {!quizOver && (
        <Typography className={`${classes.score} user-score`}>
          Score:{score}
        </Typography>
      )}
      {loading && <p className="loading">Loading...</p>}
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
        number !== TOTAL_QUESTIONS - 1 && (
          <Button
            variant="contained"
            className={`${classes.next} next-btn`}
            onClick={nextQuestion}
          >
            Next
          </Button>
        )}
    </div>
  );
};

export default App;
