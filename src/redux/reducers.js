//Reducer.js
const initialState = {
  email: "",
  currentQuestionIndex: 0,
  questions: [],
  userAnswers: [],
  score: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_QUIZ":
      return {
        ...state,
        email: action.payload.email,
      };

    case "INITIALIZE_QUESTIONS":
      return {
        ...state,
        questions: action.payload.questions,
      };

    case "SUBMIT_ANSWER":
      const { questionIndex, selectedAnswer } = action.payload;
      const currentQuestion = state.questions[questionIndex];

      const updatedQuestions = [...state.questions];

      updatedQuestions[questionIndex] = {
        ...updatedQuestions[questionIndex],
        isAttempted: true,
        userAnswer: selectedAnswer,
      };

      const userAnswer = {
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: selectedAnswer === currentQuestion.correctAnswer,
      };

      const updatedUserAnswers = [...state.userAnswers, userAnswer];

      const newScore = updatedUserAnswers.reduce((totalScore, answer) => {
        return answer.isCorrect ? totalScore + 1 : totalScore;
      }, 0);

      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        questions: updatedQuestions,
        userAnswers: updatedUserAnswers,
        score: newScore,
      };

    // case "SUBMIT_QUIZ":
    //   const userAnswers = state.questions.map((question, index) => ({
    //     question: question.question,
    //     userAnswer: question.userAnswer,
    //     correctAnswer: question.correctAnswer,
    //     isCorrect: question.userAnswer === question.correctAnswer,
    //   }));

    //   const updatedUserAnswer = [...state.userAnswers, userAnswer];

    //   const newScores = updatedUserAnswer.reduce((totalScore, answer) => {
    //     return answer.isCorrect ? totalScore + 1 : totalScore;
    //   }, 0);

    //   return {
    //     ...state,
    //     userAnswers,
    //     score: newScores,
    //   };

    default:
      return state;
  }
};

export default quizReducer;
