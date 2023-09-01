import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { startQuiz } from "../redux/actions";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import "../styles/startpage.css";

function StartPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (input) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (emailPattern.test(input)) {
      setEmailError("");
      return true;
    } else {
      setEmailError("Please enter a valid email address.");
      return false;
    }
  };

  const handleStartQuiz = () => {
    if (validateEmail(email)) {
      dispatch(startQuiz());
      navigate("/question/0");
      toast.success("Quiz Started!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="start-container">
      <div className="center-content">
        <div className="column">
          <h2>Welcome to the Online Quiz</h2>
          <div className="terms">
            <p>Exam Terms and Conditions:</p>
            <ul>
              <li>No cheating or copying is allowed.</li>
              <li>Your progress may be monitored.</li>
              <li>Answer only one option for multiple-choice questions.</li>
              <li>There is 30 minute time limit for the quiz.</li>
            </ul>
            <p>All the best!</p>
          </div>
        </div>
        <div className="column">
          <div className="email-container">
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p style={{ color: "red" }} className="error-message">
              {emailError}
            </p>
            <button className="start-button" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
