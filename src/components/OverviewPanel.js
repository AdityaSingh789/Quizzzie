import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "../styles/overviewpanel.css";

function OverviewPanel() {
  const { questions } = useSelector((state) => state);

  const navigate = useNavigate();

  const handleBoxClick = (index) => {
    navigate(`/question/${index}`);
  };

  return (
    <div className="question-list-panel">
      <div className="question-box-container">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`question-box ${
              question.isAttempted ? "attempted" : ""
            }`}
            onClick={() => handleBoxClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewPanel;
