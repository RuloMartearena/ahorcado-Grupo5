import '../styles/desarrolladores.css';

export default function Desarrolladores() {
    return (
<section className='section__desarrolladores-conteiner'>
            <h2 className='h2title-game'>Ahorcadito</h2>
            <h2 className="h2__desarrolladores">Desarrolladores</h2>
            <h3 className="h3__numeroGrupo">GRUPO 5</h3>
            <div className='div__ul__name-one'>
                <ul className="ul__name">
                    <li className="li__desarrolladores">
                        <p className='p__desarrolladores'>Beguier Ignacio Martin</p>
                        <img className="img__photo" src="img/photo_oso.jpg" alt="Ignacio Beguier"></img>
                        <a href="https://github.com/TitiBeguier" target="_blank" rel="noreferrer"><button className='buttonGIT'>GITHUB</button></a>
                    </li>
                    <li className="li__desarrolladores">
                        <p className='p__desarrolladores'>Gianechini Christian Emanuel</p>
                        <img className="img__photo" src="img/photo_chris.jpg" alt="Christian Gianechini"></img>
                        <a href="https://github.com/Bastyon" target="_blank" rel="noreferrer"><button className='buttonGIT'>GITHUB</button></a>
                    </li>
                    <li className="li__desarrolladores">
                        <p className='p__desarrolladores'>Gutiérrez Christian Andrés</p>
                        <img className="img__photo" src="img/photo_abuelo.jpg" alt="Christian Andrés"></img>
                        <a href="https://github.com/Bleidersito" target="_blank" rel="noreferrer"><button className='buttonGIT'>GITHUB</button></a>
                    </li>
                </ul>
            </div>
            <div className='div__ul__name-two'>
                <ul className='ul__name'>
                    <li className="li__desarrolladores">
                        <p className="nameshort">Martearena Matías</p>
                        <img className="img__photo" src="img/photo_rulo.jpg" alt="Matias Martearena"></img>
                        <a href="https://github.com/RuloMartearena" target="_blank" rel="noreferrer"> <button className='buttonGIT'>GITHUB</button></a>
                    </li>
                    <li className="li__desarrolladores">
                        <p className='p__desarrolladores'>Robles Axel Iván Lautaro</p>
                        <img className="img__photo" src="img/photo_axel.jpg" alt="Robles Axel"></img>
                        <a href="https://github.com/axelrobles17" target="_blank" rel="noreferrer"> <button className='buttonGIT'>GITHUB</button></a>
                    </li>
                    <li className="li__desarrolladores">
                        <p className="nameshort">Vera Esteban Sergio</p>
                        <img className="img__photo" src="img/photo_esteban.jpg" alt="Esteban Vera"></img>
                        <a href="https://github.com/Akenajy1209" target="_blank" rel="noreferrer"> <button className='buttonGIT'>GITHUB</button></a>
                    </li>
                </ul>
            </div>
            <div className='info-conteiner'>
                <a href="http://localhost:3000/" rel="noreferrer"><button className='buttonGIT'>HOME</button></a>
            </div>
            </section>
    )
}