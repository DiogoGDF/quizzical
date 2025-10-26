import { useState } from "react";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";

function App() {
    const [hasGameStarted, setHasGameStarted] = useState(false);

    return (
        <main>
            {!hasGameStarted ? <StartPage /> : <GamePage />}
        </main>
    );
}

export default App;
