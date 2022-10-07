import image0 from '../Ahorcado/0.png';
import image1 from '../Ahorcado/1.png';
import image2 from '../Ahorcado/2.png';
import image3 from '../Ahorcado/3.png';
import image4 from '../Ahorcado/4.png';
import image5 from '../Ahorcado/5.png';
import image6 from '../Ahorcado/6.png';
import image7 from '../Ahorcado/7.png';

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
        <img
            className='colgado-image'
            src={images[imageNumber]}
            alt="Imagen del ahorcado"
            width="450px"
        />
    )
}