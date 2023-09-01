export const startQuiz = (email) => ({
  type: "START_QUIZ",
  payload: {
    email,
  },
});

export const submitAnswer = (questionIndex, selectedAnswer, correctAnswer) => ({
  type: "SUBMIT_ANSWER",
  payload: {
    questionIndex,
    selectedAnswer,
    correctAnswer,
  },
});

export const initializeQuestions = (questions) => ({
  type: "INITIALIZE_QUESTIONS",
  payload: {
    questions,
  },
});

// export const submitQuiz = () => ({
//   type: "SUBMIT_QUIZ",
// });
