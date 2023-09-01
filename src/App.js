import "./App.css";

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import ReportPage from "./components/ReportPage";

import { fetchQuestions } from "./api/api";

import { useDispatch } from "react-redux";
import { initializeQuestions } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadQuestions = async () => {
      const questions = await fetchQuestions();
      dispatch(initializeQuestions(questions));
    };

    loadQuestions();
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<StartPage />} />
          <Route path="/question/:questionIndex" element={<QuestionPage />} />
          <Route path="/report" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
