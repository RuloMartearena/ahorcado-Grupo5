import '../styles/home.css';

export default function home() {
    return (
        <div>
            <h2 className='title_home'>Ahorcadito</h2>
            <section className="section__inicio-conteiner">

                <div className="home-img">
                    <a href="/Juego"><img className="img__inico" src="../img/logo.jpg" alt="Logo del Juego" /> </a>
                </div>
                <h2 className='h2__instruccion'>Dar click a la imagen para comenzar</h2>
                <div className='div__button-conteiner'>
                    <a href="/Recordatorios" className='button_font'><button className='button__return'>Recordatorios</button></a>
                    <a href="/Reglas" className='button_font'><button className='button__return'>Reglas</button></a>
                    <a href="/Desarrolladores" className='button_font'><button className='button__return'>Desarrolladores</button></a>
                </div>
            </section>
        </div>
    );
}