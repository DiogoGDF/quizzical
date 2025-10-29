import Question from "./Question";
import { useState } from "react";
import type { QuestionType } from "./Question";

function GamePage({ questions }: { questions: QuestionType[] }) {
    const [answersChecked, setAnswersChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [question: string]: string }>({});

    function checkAnswers(formData: FormData) {
        const answers: { [q: string]: string } = {};

        questions.forEach(q => {
            const selected = formData.get(q.question);
            if (selected) answers[q.question] = selected.toString();
        });

        setUserAnswers(answers);

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
            <Question
                question={questions[0]}
                answersChecked={answersChecked}
                userAnswers={userAnswers}
            />
            <Question
                question={questions[1]}
                answersChecked={answersChecked}
                userAnswers={userAnswers}
            />
            <Question
                question={questions[2]}
                answersChecked={answersChecked}
                userAnswers={userAnswers}
            />
            <Question
                question={questions[3]}
                answersChecked={answersChecked}
                userAnswers={userAnswers}
            />
            <Question
                question={questions[4]}
                answersChecked={answersChecked}
                userAnswers={userAnswers}
            />
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