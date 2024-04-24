import ClockDisplay from "../../../../assets/images/timeDisplay.png";
import ClockHand from "../../../../assets/images/clockHand.png";
import { format } from "date-fns";

const SidekickClock = ({
  dateVal,
  timerStarted,
  currentTime,
  animationDuration,
}: {
  dateVal: Date;
  timerStarted: boolean;
  currentTime: number;
  animationDuration: number;
}) => {
  const formatTime = (totalMinutes: number) => {
    let hours = Math.floor(totalMinutes / 60);
    let period = "AM";

    // Adjust period and convert to 12-hour format
    if (hours >= 12) {
      period = hours >= 24 ? "AM" : "PM"; // Reset to AM after midnight
      hours = hours % 24; // Convert to 24-hour format for calculation
      hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours; // Convert to 12-hour format and handle midnight and noon
    }

    const minutes = totalMinutes % 60;
    return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
  };

  return (
    <div className="sidekickClock">
      <img
        src={ClockDisplay}
        alt="Clock Display"
        className="sidekickClock__display"
      />
      <img
        src={ClockHand}
        alt="Clock Hand"
        style={{
          animation: timerStarted
            ? `rotateHand ${animationDuration}s linear forwards`
            : "none",
        }}
        className={`sidekickClock__displayHand`}
      />
      <p className="sidekickClock__date">{format(dateVal, "E d")}</p>
      <p
        className={
          "sidekickClock__time" +
          (currentTime / 60 >= 24 ? " sidekickClock__time--err" : "")
        }
      >
        {formatTime(currentTime)}
      </p>
    </div>
  );
};

export default SidekickClock;
