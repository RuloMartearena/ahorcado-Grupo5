import '../styles/recordatorio.css';

export default function Recordatorio() {
    return (
        <section className='section__recordatorio-conteiner'>
            <h2 className='h2__title-game-recordatorio'>Ahorcadito</h2>
            <div className="div__recordatorio-conteiner">
                <h2 className="h2__title">Recordatorios</h2>
                <ul className="ul__recordatorio">
                    <li className='li__recordatorio'>Si en una palabra se repite la misma letra, automaticamente se completaran</li>
                    <li className='li__recordatorio'>Si erras una palabra, de a poco lo iras ahorcando</li>
                    <li className='li__recordatorio'>No puedes equivocarte más de 5 veces</li>
                    <li className='li__recordatorio'>Si completas las palabras, GANARAS!</li>
                </ul>
            </div>
            <div className='divbutton-conteiner'>
                <a href="/">
                    <button className='button__return'>Home</button>
                </a>
                <a href="/Juego">
                    <button className='button__return'>Juego</button>
                </a>
            </div>
        </section>
    )
}
