import { decode } from "html-entities";
import type { QuestionType } from "../App";
import { useState } from "react";

type QuestionProps = {
    question: QuestionType
    answersChecked: boolean
    userAnswers: { [question: string]: string };
}

function Question({ question, answersChecked, userAnswers }: QuestionProps) {
    function shuffleArray<T>(arr: T[]): T[] {
        for (let i = arr.length - 1; i > 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
        }
        return arr;
    }

    const [allAnswers] = useState(shuffleArray([...question.incorrect_answers, question.correct_answer]));

    function getClass(answer: string) {
        if (!answersChecked) return "";
        const isCorrect = answer === question.correct_answer;
        const isSelected = userAnswers[question.question] === answer;

        if (isCorrect) return "correct";
        if (isSelected && !isCorrect) return "wrong";
        return "";
    }

    return (
        <section className="question">
            <h3>{decode(question.question)}</h3>
            <div>
                {allAnswers.map((ans, i) => (
                    <label key={i}>
                        <input
                            type="radio"
                            name={question.question}
                            value={decode(ans)} />
                        <span className={getClass(ans)}>{decode(ans)}</span>
                    </label>
                ))}
            </div>
        </section>
    );
}

export default Question;