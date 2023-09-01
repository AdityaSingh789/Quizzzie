import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import "../styles/reportpage.css";

function ReportPage() {
  const { userAnswers, score } = useSelector((state) => state);

  const answeredQuestions = userAnswers.filter(
    (answer) => answer.userAnswer !== null
  );

  const showToastMessage = () => {
    toast.success("Successfully completed Quiz!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="report-container">
      <h2>Quiz Report</h2>

      <table className="report-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {answeredQuestions.map((answer, index) => (
            <tr key={index}>
              <td>
                <p>{index + 1}</p>
              </td>
              <td>{answer.userAnswer}</td>
              <td>{answer.correctAnswer}</td>
              <td>{answer.isCorrect ? "Correct" : "Incorrect"}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total Score:</td>
            <td style={{ fontSize: "20px" }}>{score}</td>
          </tr>
        </tfoot>
      </table>
      <div>
        <Link to="/">
          <button onClick={showToastMessage} className="btn">
            End Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ReportPage;
