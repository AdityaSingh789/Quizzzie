import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import "../styles/timer.css";
import { useNavigate } from "react-router-dom";

function Timer() {
  const [remainingTime, setRemainingTime] = useState(0.1 * 60);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(interval);
      navigate("/");

      toast.error("Time's up! Please Re-attempt Quiz.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime, navigate]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer-container">
      <div className="timer-box">
        <div className="timer-value">{minutes}</div>
        <div className="timer-label">Min</div>
      </div>
      <div className="dot">:</div>
      <div className="timer-box">
        <div className="timer-value">{seconds}</div>
        <div className="timer-label">Sec</div>
      </div>
    </div>
  );
}

export default Timer;
