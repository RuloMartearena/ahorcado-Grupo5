import '../styles/home.css';

export default function home() {
    return (
        <section className="section__inicio-conteiner">
            <h1 className='title_home'>Hora de jugar al Ahorcadito!!</h1>
            <div className="home-img">
                <a href="/Juego"> <img className="img__inico" src="../img/logo.jpg" alt="Logo del Juego" /> </a>
            </div>
            <h2 className='title_home'>Dar click a la imagen para comenzar</h2>
            <div >
                <button className='button_home'> <a href="/Reglas" className='button_font' >Reglas</a> </button>

                <button className='button_home'><a href="/Recordatorios" className='button_font' >Recordatorios</a></button>

                <button className='button_home'><a href="/Desarrolladores" className='button_font'>Desarrolladores</a></button>
            </div>
        </section>
    );
}