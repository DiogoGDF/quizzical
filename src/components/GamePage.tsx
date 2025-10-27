import Question from "./Question";
import type { QuestionType } from "./Question";

function GamePage({ questions }: { questions: QuestionType[] }) {
    return (
        <div className="game-page">
            <Question question={questions[0]} />
            <Question question={questions[1]} />
            <Question question={questions[2]} />
            <Question question={questions[3]} />
            <Question question={questions[4]} />
            <button>Check answers</button>
        </div>
    );
}

export default GamePage;