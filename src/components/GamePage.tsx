import Question from "./Question";

function GamePage() {
    return (
        <div className="game-page">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <button>Check answers</button>
        </div>
    );
}

export default GamePage;