import React, { useState } from "react";
import infoBox1 from "../../../assets/images/infoBox__1.png";
import infoBox2 from "../../../assets/images/infoBox__2.png";

type SidekickTimerInfoProps = {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidekickTimerInfo: React.FC<SidekickTimerInfoProps> = ({
  setShowInfo,
}) => {
  const [infoPage, setInfoPage] = useState(1);

  return (
    <div className="infoPage">
      {infoPage === 1 ? (
        <img
          src={infoBox1}
          alt=""
          className="infoPage__content"
          onClick={() => setInfoPage(2)}
        />
      ) : (
        <img
          src={infoBox2}
          alt=""
          className="infoPage__content"
          onClick={() => {
            setShowInfo(false);
            setInfoPage(1);
          }}
        />
      )}
    </div>
  );
};

export default SidekickTimerInfo;
