import { useEffect, useState } from "react";
import EnergyBar from "./EnergyBar/EnergyBar";
import WakeUpBtn from "../../../assets/images/wakeUpBtn.png";
import GoToBedBtn from "../../../assets/images/goToBedBtn.png";
import SidekickClock from "./SidekickClock/SidekickClock";
import "./SidekickTimerDisplay.scss";
import RoosterSFX from "../../../assets/audio/rooster.wav";
import OwlSFX from "../../../assets/audio/owl.wav";
import useSound from "use-sound";

const SidekickTimerDisplay = ({ difficulty }: { difficulty: string }) => {
  const [playRooster] = useSound(RoosterSFX, { volume: 0.5 });
  const [playOwl] = useSound(OwlSFX, { volume: 0.5 });

  const [energyLow, setEnergyLow] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [dateVal, setDateVal] = useState(new Date(0, 0, 1));
  const startMinutes = 6 * 60;
  const endMinutes = (6 + 20) * 60;
  const [currentTime, setCurrentTime] = useState(startMinutes);
  const animationDuration =
    difficulty === "easy" ? (energyLow ? 28 : 36) : energyLow ? 14 : 18;

  useEffect(() => {
    let intervalId: number | undefined;

    const secondsPerGameHour = difficulty === "easy" ? 2 : 1;

    if (currentTime === startMinutes) {
      playRooster();
    } else if (currentTime === endMinutes - 2 * 60) {
      playOwl();
    }

    if (timerStarted && currentTime < endMinutes) {
      // If the current time is less than midnight
      intervalId = setInterval(() => {
        setCurrentTime((minutes) => minutes + 60);
      }, 1000 * secondsPerGameHour); // 2000 milliseconds for easy, 1000 milliseconds for hard
    }
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentTime, difficulty, startMinutes, timerStarted]);

  const endTurn = () => {
    if (currentTime >= startMinutes + 18 * 60) {
      setEnergyLow(true);
      setCurrentTime(startMinutes + 4 * 60);
    } else {
      setEnergyLow(false);
      setCurrentTime(startMinutes);
    }
    setTimerStarted(false);
    setDateVal(new Date(dateVal.getTime() + 24 * 60 * 60 * 1000));
  };

  return (
    <div className="sidekickTimerDisplay">
      <EnergyBar energyLow={energyLow} />
      <div className="sidekickTimerDisplay__column">
        <SidekickClock
          dateVal={dateVal}
          timerStarted={timerStarted}
          currentTime={currentTime}
          animationDuration={animationDuration}
        />
        {timerStarted ? (
          <img
            src={GoToBedBtn}
            alt="Go to bed Btn"
            onClick={() => endTurn()}
            className="sidekickTimerDisplay__goToBedBtn"
          />
        ) : (
          <img
            src={WakeUpBtn}
            alt="Wake Up Btn"
            onClick={() => setTimerStarted(true)}
            className="sidekickTimerDisplay__wakeUpBtn"
          />
        )}
      </div>
    </div>
  );
};

export default SidekickTimerDisplay;
