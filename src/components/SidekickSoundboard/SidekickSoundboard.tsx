import SpeakerIcon from "../../assets/icons/speakerIcon.png";
import "./SidekickSoundboard.scss";
import BuildingBtn from "../../assets/images/buildingBtn.png";
import FishingBtn from "../../assets/images/fishingBtn.png";
import FriendBtn from "../../assets/images/friendBtn.png";
import MiningBtn from "../../assets/images/miningBtn.png";
import PurchaseBtn from "../../assets/images/purchaseBtn.png";
import FarmBtn from "../../assets/images/farmBtn.png";
import WateringBtn from "../../assets/images/wateringBtn.png";
import OreBtn from "../../assets/images/oreBtn.png";
import MiscBtn from "../../assets/images/miscBtn.png";
import useSound from "use-sound";

import WateringSFX from "../../assets/audio/water_step1.wav";
import AchievementSFX from "../../assets/audio/achievement.wav";
import FishingSFX from "../../assets/audio/fishBite.wav";
import PurchaseSFX from "../../assets/audio/coins.wav";
import AnimalSFX from "../../assets/audio/chicken_cluck.wav";
import BuildingSFX from "../../assets/audio/building.wav";
import MiningSFX from "../../assets/audio/mining.wav";
import FriendSFX from "../../assets/audio/give_gift.wav";
import OreSFX from "../../assets/audio/discoverMineral.wav";

const SidekickSoundboard = () => {
  const [playWatering] = useSound(WateringSFX);
  const [playFishing] = useSound(FishingSFX);
  const [playPurchase] = useSound(PurchaseSFX);
  const [playAnimal] = useSound(AnimalSFX);
  const [playBuilding] = useSound(BuildingSFX);
  const [playMining] = useSound(MiningSFX);
  const [playFriend] = useSound(FriendSFX);
  const [playOre] = useSound(OreSFX);
  const [playAchievement] = useSound(AchievementSFX);

  return (
    <div className="sidekickSoundboard">
      <div className="sidekickSoundboard__header">
        <img
          src={SpeakerIcon}
          alt="Speaker Icon"
          className="sidekickSoundboard__icon"
        />
        <h2 className="sidekickSoundboard__title">SOUNDBOARD</h2>
      </div>
      <div className="sidekickSoundboard__grid">
        <img
          src={WateringBtn}
          alt="Watering Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playWatering()}
        />
        <img
          src={FishingBtn}
          alt="Fishing Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playFishing()}
        />
        <img
          src={PurchaseBtn}
          alt="Purchase Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playPurchase()}
        />
        <img
          src={FarmBtn}
          alt="Farm Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playAnimal()}
        />
        <img
          src={MiningBtn}
          alt="Mining Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playMining()}
        />
        <img
          src={BuildingBtn}
          alt="Building Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playBuilding()}
        />
        <img
          src={FriendBtn}
          alt="Friend Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playFriend()}
        />
        <img
          src={OreBtn}
          alt="Ore Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playOre()}
        />
        <img
          src={MiscBtn}
          alt="Misc Btn"
          className="sidekickSoundboard__grid-item"
          onClick={() => playAchievement()}
        />
      </div>
    </div>
  );
};

export default SidekickSoundboard;
