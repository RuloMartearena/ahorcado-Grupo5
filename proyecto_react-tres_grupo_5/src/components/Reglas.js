import '../styles/reglas.css';

export default function Reglas() {
    return (
        <section className="section__reglas-conteiner">
            <h2 className='h2__title-game'>Ahorcadito</h2>
            <div className="div__rules-conteiner">
                <h2 className='h2__title-rules'>REGLAS</h2>
                <div className='div__rules'>
                    <p className='p__rule'>1. Intenta descifrar la palabra sin perder la calma</p>
                    <p className='p__rule'>2. Evita equivocarte para no desmoronarte</p>
                    <p className='p__rule'>3. A medida que aciertes vuelvete mas conciente</p>
                    <p className='p__rule'>4. Trata de no quedar ahorcado para que el juego no de por finalizado</p>
                </div>
            </div>
            <div className="div__button-conteiner">
                <a className='a__return' href="/"><button className="button__return">Home</button></a>
                <a className='a__return' href="/Juego"><button className="button__return">Game</button></a>
            </div>
        </section>
    );
}