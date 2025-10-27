function Question() {
    return (
        <section>
            <h3>How would one say goodbye in Spanish?</h3>
            <form>
                <label>
                    <input type="radio" name="option" />
                    Adiós
                </label>
                <label>
                    <input type="radio" name="option" />
                    Hola
                </label>
                <label>
                    <input type="radio" name="option" />
                    Au Revoir
                </label>
                <label>
                    <input type="radio" name="option" />
                    Salir
                </label>
            </form>
        </section>
    );
}

export default Question;