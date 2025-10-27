export type QuestionType = {
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

function Question({ question }: { question: QuestionType }) {
    return (
        <section className="question">
            <h3>{question.question}</h3>
            <form>
                <label>
                    <input type="radio" name="option" />
                    <span>{question.incorrect_answers[0]}</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>{question.incorrect_answers[1]}</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>{question.incorrect_answers[2]}Care Bears</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>{question.correct_answer}</span>
                </label>
            </form>
        </section>
    );
}

export default Question;