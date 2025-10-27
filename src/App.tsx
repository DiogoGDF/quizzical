import { useState, useEffect } from "react";
import StartPage from "./components/StartPage";
import GamePage from "./components/GamePage";
import Blob1 from "./images/blob1.svg";
import Blob2 from "./images/blob2.svg";

function App() {
    const [hasGameStarted, setHasGameStarted] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        if (!hasGameStarted) return;
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data.results));
    }, [hasGameStarted]);

    return (
        <main>
            <img className="blob1" src={Blob1} />
            {
                !hasGameStarted ?
                    <StartPage setHasGameStarted={setHasGameStarted} /> :
                    questions.length === 0 ?
                        <h3>Loading...</h3> :
                        <GamePage questions={questions} />
            }
            <img className="blob2" src={Blob2} />
        </main>
    );
}

export default App;
