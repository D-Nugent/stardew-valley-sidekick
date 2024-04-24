import EnergyBarImg from "../../../../assets/images/energyBar.png";

const EnergyBar = ({ energyLow }: { energyLow: boolean }) => {
  return (
    <div className="energyBar">
      <img
        src={EnergyBarImg}
        alt="Energy Bar"
        className={"energyBar__display"}
      />
      {energyLow ? (
        <div className="energyBar__level energyBar__level--low"></div>
      ) : (
        <div className="energyBar__level energyBar__level--high"></div>
      )}
    </div>
  );
};

export default EnergyBar;
