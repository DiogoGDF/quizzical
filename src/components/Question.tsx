function Question() {
    return (
        <section className="question">
            <h3>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h3>
            <form>
                <label>
                    <input type="radio" name="option" />
                    <span>Cabbage Patch Kids</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>Transformers</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>Care Bears</span>
                </label>
                <label>
                    <input type="radio" name="option" />
                    <span>Rubik’s Cube</span>
                </label>
            </form>
        </section>
    );
}

export default Question;