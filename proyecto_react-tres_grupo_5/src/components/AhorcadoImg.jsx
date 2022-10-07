import image0 from '../Ahorcado/0.png';
import image1 from '../Ahorcado/1.png';
import image2 from '../Ahorcado/2.png';
import image3 from '../Ahorcado/3.png';
import image4 from '../Ahorcado/4.png';
import image5 from '../Ahorcado/5.png';
import image6 from '../Ahorcado/6.png';
import image7 from '../Ahorcado/7.png';
import '../styles/game.css';

const images = [
    image0,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
]

export function AhorcadoImg({ imageNumber }) {

    if (imageNumber >= 7) {
        imageNumber = 7;
    }

    return (
        <section className='section__main__img-conteiner'>
            <h2 className='h2title-game'>Ahorcadito</h2>
            <div className='div__img-conteiner'>
                <img
                    className='colgado-image'
                    src={images[imageNumber]}
                    alt="Imagen del ahorcado"
                />
            </div>
        </section>
    )
}