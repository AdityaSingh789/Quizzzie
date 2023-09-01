import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitAnswer } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";

import "../styles/questionpage.css";

import Timer from "./Timer";
import OverviewPanel from "./OverviewPanel";

function QuestionPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { questionIndex } = useParams();
  const { questions } = useSelector((state) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentQuestion = questions[questionIndex];

  useEffect(() => {
    setSelectedAnswer(null);
  }, [questionIndex]);

  const handleAnswerSubmit = () => {
    if (selectedAnswer !== null) {
      dispatch(submitAnswer(questionIndex, selectedAnswer));
      if (questionIndex < questions.length - 1) {
        const nextQuestionIndex = parseInt(questionIndex, 10) + 1;
        navigate(`/question/${nextQuestionIndex}`);
      } else {
        navigate("/report");
      }
    } else {
      alert("Please select an answer before proceeding.");
    }
  };

  return (
    <div className="question-container">
      <OverviewPanel questionIndex={questionIndex} />
      <Timer />
      <div className="question-card">
        <h2>Question {parseInt(questionIndex, 10) + 1}</h2>
        <p>{currentQuestion.question}</p>

        {currentQuestion.choices.map((choice, index) => (
          <div key={index} className="choice-container">
            <input
              type="radio"
              name={`question-${questionIndex}`}
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => setSelectedAnswer(choice)}
            />
            <label>{choice}</label>
          </div>
        ))}
        <button className="next-button" onClick={handleAnswerSubmit}>
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
