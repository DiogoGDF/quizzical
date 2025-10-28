import { decode } from "html-entities";

export type QuestionType = {
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

type QuestionProps = {
    question: QuestionType
    answersChecked: boolean
}

function Question({ question, answersChecked }: QuestionProps) {
    return (
        <section className="question">
            <h3>{decode(question.question)}</h3>
            <div>
                <label>
                    <input type="radio" name={question.question} value={decode(question.incorrect_answers[0])} />
                    <span>{decode(question.incorrect_answers[0])}</span>
                </label>
                <label>
                    <input type="radio" name={question.question} value={decode(question.incorrect_answers[1])} />
                    <span>{decode(question.incorrect_answers[1])}</span>
                </label>
                <label>
                    <input type="radio" name={question.question} value={decode(question.incorrect_answers[2])} />
                    <span>{decode(question.incorrect_answers[2])}</span>
                </label>
                <label>
                    <input type="radio" name={question.question} value={decode(question.correct_answer)} />
                    <span className={answersChecked ? "correct" : ""}>{decode(question.correct_answer)}</span>
                </label>
            </div>
        </section>
    );
}

export default Question;