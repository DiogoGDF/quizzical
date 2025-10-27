import { useState } from "react";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import Blob1 from "./images/blob1.svg";
import Blob2 from "./images/blob2.svg";

function App() {
    const [hasGameStarted, setHasGameStarted] = useState(false);

    return (
        <main>
            <img className="blob1" src={Blob1} />
            {
                !hasGameStarted ?
                    <StartPage setHasGameStarted={setHasGameStarted} /> :
                    <GamePage />
            }
            <img className="blob2" src={Blob2} />
        </main>
    );
}

export default App;
