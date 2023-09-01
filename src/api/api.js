import axios from "axios";

export const fetchQuestions = async () => {
  const response = await axios.get("https://opentdb.com/api.php?amount=15");
  const questions = response.data.results.map((result) => ({
    question: result.question,
    choices: [...result.incorrect_answers, result.correct_answer],
    correctAnswer: result.correct_answer,
    isAttempted: false,
    userAnswer: null,
  }));
  return questions;
};
