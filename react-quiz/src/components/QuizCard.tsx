import React from "react";
// Types
import { AnswerObject } from "../App";
// Styles
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 500,
    marginRight: "auto",
    marginLeft: "auto",
    background: "rgba(249,222,86, 0)",
    boxShadow: "none",
  },
  title: {
    fontSize: 14,
  },
  question: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 15,
  },
  answerButtons: {
    background: "rgba(19, 124, 117, 0.1)",
    "&:hover": {
      background: "rgba(19, 124, 117, 0.4);",
    },
  },
});

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
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Question: {questionNumber} / {totalQuestions}
        </Typography>
        <Typography
          className={classes.question}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <CardActions className={classes.buttonContainer}>
          {answers.map((answer) => (
            <div key={answer}>
              <Button
                value={answer}
                disabled={chosenAnswer ? true : false}
                onClick={callback}
                size="small"
                className={`${classes.answerButtons} answer`}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </Button>
            </div>
          ))}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
