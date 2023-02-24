import DesktopDivider from "./images/pattern-divider-desktop.svg";
import Dice from "./images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState(null);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    const json = await response.json();
    setAdvice(json);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  if (!advice) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex justify-center items-center">
      <div className="bg-card p-8 rounded-xl space-y-8 pb-16 relative">
        <header className="text-center">
          <span className="uppercase text-primary text-sm tracking-widest">
            Advice #{advice.slip.id}
          </span>
        </header>

        <main className="max-w-md text-center">
          <h2 className="text-2xl text-primary-text">“{advice.slip.advice}”</h2>
        </main>

        <footer className="flex flex-col items-center">
          <img src={DesktopDivider} alt="---" />
        </footer>

        <button
          onClick={getAdvice}
          className="bg-primary p-4 rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
        hover:shadow-glow hover:shadow-primary transition-all duration-500 ease-in-out
        active:scale-110"
        >
          <img src={Dice} alt="dice" />
        </button>
      </div>
    </div>
  );
}

export default App;
