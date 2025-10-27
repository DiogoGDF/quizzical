function StartPage(
    { setHasGameStarted }:
        { setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>> }) {

    function startGame() {
        setHasGameStarted(true);
    }

    return (
        <div className="start-page">
            <h1>Quizzical</h1>
            <h2>Test your general knowledge with a quick game!</h2>
            <button onClick={startGame}>Start quiz</button>
        </div>
    );
}

export default StartPage;