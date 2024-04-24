import React, { useState } from "react";

import "./SidekickTimer.scss";
import SidekickTimerHeader from "./SidekickTimerHeader/SidekickTimerHeader";
import EasyDifficultyBtn from "../../assets/images/easyBtn.png";
import HardDifficultyBtn from "../../assets/images/hardBtn.png";
import SidekickTimerDisplay from "./SidekickTimerDisplay/SidekickTimerDisplay";

const SidekickTimer: React.FC = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [timerInitialized, setTimerInitialized] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  return (
    <div className="sidekick-timer">
      {timerInitialized ? (
        <SidekickTimerDisplay difficulty={difficulty} />
      ) : (
        <>
          <SidekickTimerHeader showInfo={showInfo} setShowInfo={setShowInfo} />
          <div className="difficultyBtns">
            <img
              src={EasyDifficultyBtn}
              alt="Easy Difficulty Btn"
              className="difficultyBtns__easy"
              onClick={() => {
                setTimerInitialized(true);
                setDifficulty("easy");
              }}
            />
            <img
              src={HardDifficultyBtn}
              alt="Hard Difficulty Btn"
              className="difficultyBtns__hard"
              onClick={() => {
                setTimerInitialized(true);
                setDifficulty("hard");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SidekickTimer;
