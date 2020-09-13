import React from "react";
import QuizCard from "./components/QuizCard";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  const startQuiz = async () => {};

  const checkSelectedAnswer = (e: React.MouseEvent) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>My React Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Begin
      </button>
      <p className="users-score">Score:</p>
      <p>Loading...</p>
      <QuizCard />
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
