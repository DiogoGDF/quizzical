import Question from "./Question";
import { useState } from "react";
import type { QuestionType } from "./Question";

function GamePage({ questions }: { questions: QuestionType[] }) {
    const [answersChecked, setAnswersChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);

    function checkAnswers(formData: FormData) {
        const total = questions.reduce((acc, question) => {
            return (formData.get(question.question) === question.correct_answer) ?
                acc + 1 :
                acc;
        }, 0);
        setCorrectAnswers(total);
        setAnswersChecked(true);
    }

    return (
        <form action={checkAnswers} className="game-page">
            <Question question={questions[0]} answersChecked={answersChecked} />
            <Question question={questions[1]} answersChecked={answersChecked} />
            <Question question={questions[2]} answersChecked={answersChecked} />
            <Question question={questions[3]} answersChecked={answersChecked} />
            <Question question={questions[4]} answersChecked={answersChecked} />
            {
                !answersChecked ?
                    <button>Check answers</button> :
                    <>
                        <span>corect answers: {correctAnswers}/5</span>
                        <button>Play again</button>
                    </>

            }
        </form>
    );
}

export default GamePage;