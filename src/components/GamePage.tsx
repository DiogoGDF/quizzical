import Question from "./Question";
import { useState } from "react";
import type { QuestionType } from "../App";

type GamePageProps = {
    questions: QuestionType[]
    hasGameStarted: boolean
    setHasGameStarted: React.Dispatch<React.SetStateAction<boolean>>
    setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>
}

function GamePage({ questions, hasGameStarted, setHasGameStarted, setQuestions }: GamePageProps) {
    const [answersChecked, setAnswersChecked] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [userAnswers, setUserAnswers] = useState<{ [question: string]: string }>({});

    function checkAnswers(formData: FormData) {
        if (hasGameStarted) {
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
            setHasGameStarted(false);
        } else {
            setCorrectAnswers(0);
            setAnswersChecked(false);
            setHasGameStarted(true);
            setQuestions([]);
        }
    }

    return (
        <form action={checkAnswers} className="game-page">
            {questions.map(question => {
                return <Question
                    question={question}
                    answersChecked={answersChecked}
                    userAnswers={userAnswers}
                />;
            })}
            {
                !answersChecked ?
                    <button className="game-page-btn">Check answers</button> :
                    <div>
                        <span>corect answers: {correctAnswers}/5</span>
                        <button className="game-page-btn">Play again</button>
                    </div>

            }
        </form>
    );
}

export default GamePage;