import sidekickBackground from "./assets/sidekick-background.png";
import "./styles/global.css";
import "./App.css";
import SidekickTimer from "./components/SidekickTimer/SidekickTimer";
import SidekickSoundboard from "./components/SidekickSoundboard/SidekickSoundboard";

function App() {
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${sidekickBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        minHeight: "110vh",
        width: "100vw",
        maxWidth: "100vw",
        overflow: "auto",
        padding: "1rem",
        boxSizing: "border-box",
      }}
    >
      <SidekickTimer />
      <SidekickSoundboard />
    </div>
  );
}

export default App;
