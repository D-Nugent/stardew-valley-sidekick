import React from "react";
import clockIcon from "../../../assets/icons/clockIcon.png";
import infoIcon from "../../../assets/icons/infoIcon.png";

import "../SidekickTimer.scss";
import SidekickTimerInfo from "../SidekickTimerInfo/SidekickTimerInfo";

const SidekickTimerHeader: React.FC<{
  showInfo: boolean;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showInfo, setShowInfo }) => {
  return (
    <div className="sidekick-timer">
      <div className="timerHeader">
        <div className="timerHeader__titleWrapper">
          <img src={clockIcon} alt="Clock Icon" className="timerHeader__icon" />
          <h2 className="timerHeader__title">TIMER MODE</h2>
        </div>
        <button
          onClick={() => setShowInfo(true)}
          className="timerHeader__infoBtn"
        >
          <img
            src={infoIcon}
            alt="Info Icon"
            className="timerHeader__infoBtn__icon"
          />
        </button>
        {showInfo && <SidekickTimerInfo setShowInfo={setShowInfo} />}
      </div>
    </div>
  );
};

export default SidekickTimerHeader;
