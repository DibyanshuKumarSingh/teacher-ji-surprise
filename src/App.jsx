import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import MysteryReveal from "./components/MysteryReveal";
import MemoriesGallery from "./components/MemoriesGallery";
import LoveLetter from "./components/LoveLetter";
import FinalSurprise from "./components/FinalSurprise";

function App() {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  if (currentScreen === "welcome") {
    return (
      <WelcomeScreen
        onContinue={() => setCurrentScreen("mystery")}
      />
    );
  }

  if (currentScreen === "mystery") {
    return (
      <MysteryReveal
        onContinue={() => setCurrentScreen("memories")}
      />
    );
  }

  if (currentScreen === "memories") {
    return (
      <MemoriesGallery
        onContinue={() => setCurrentScreen("letter")}
      />
    );
  }

  if (currentScreen === "letter") {
    return (
      <LoveLetter
        onContinue={() => setCurrentScreen("final")}
      />
    );
  }

  return (
    <FinalSurprise />
  );
}

export default App;

