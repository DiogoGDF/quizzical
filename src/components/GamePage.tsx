import Question from "./Question";
import { useState } from "react";
import type { QuestionType } from "./Question";

function GamePage({ questions }: { questions: QuestionType[] }) {
    const [answersChecked, setAnswersChecked] = useState(false);

    function checkAnswers(formData: FormData) {
        const answer1 = formData.get(questions[0].question);
        const answer2 = formData.get(questions[1].question);
        const answer3 = formData.get(questions[2].question);
        const answer4 = formData.get(questions[3].question);
        const answer5 = formData.get(questions[4].question);

        setAnswersChecked(true);
    }

    return (
        <form action={checkAnswers} className="game-page">
            <Question question={questions[0]} answersChecked={answersChecked} />
            <Question question={questions[1]} answersChecked={answersChecked} />
            <Question question={questions[2]} answersChecked={answersChecked} />
            <Question question={questions[3]} answersChecked={answersChecked} />
            <Question question={questions[4]} answersChecked={answersChecked} />
            <button>Check answers</button>
        </form>
    );
}

export default GamePage;