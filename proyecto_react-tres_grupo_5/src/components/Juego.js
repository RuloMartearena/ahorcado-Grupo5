import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
//Importando Funciones
import { getPalabraRandom } from './getPalabraRandom.js';
import { letras } from './letras.js';
import '../assets/styles/Game.css'
import '../assets/styles/Button.css'
import {AhorcadoImg} from './AhorcadoImg.jsx';
function Juego() {
  const [verOpcion, setVerOpcion] = useState('btn-option');
  const [intentos, setIntentos] = useState(0);
  const [selectWord, setSelectWord] = useState(getPalabraRandom);
  const [Incog, setIncog] = useState('_ '.repeat(selectWord.length));
  const [perder, setPerder] = useState(false);
  const [ganar, setGanar] = useState(false);

  useEffect(() => {
    if(intentos === 7){
      setPerder(true);
      setVerOpcion('ocultar');
    }
  }, [intentos])

  useEffect(() => {
    const actualIncog = Incog.split(' ').join('');
    if(actualIncog === selectWord){
      setGanar(true);
      setVerOpcion('ocultar');
    }
  }, [Incog,selectWord])

  const chequearLetra = (letter) => {
    if(perder) return;
    if(!selectWord.includes(letter)){
      setIntentos(Math.min(intentos + 1, 9));
      return;
    }
    const IncogArray = Incog.split(' ');
    for(let i=0; i<selectWord.length; i++){
      if(selectWord[i] === letter){
        IncogArray[i] = letter;
      }
    }

    setIncog(IncogArray.join(' '));
  }
  return (
    <div className='game'>
        <AhorcadoImg imageNumber = {intentos} />
        <h3>{Incog}</h3>
        <h3>Intentos: {intentos} / 7</h3>
        <div className='respuestas'>
          {
              (perder) 
              ? <h2 className='mensaje'>¡Perdiste! La palabra era: {selectWord}</h2> 
              : ''
          }
          {
              (ganar)
              ? <h2 className='mensaje'>Felicidades: ¡Ganaste!</h2>
              : ''
          }
        </div>
        <div className='opciones'>
          {
              letras.map((letra)=> (
                <button className={verOpcion}
                key={letra}
                onClick={()=> chequearLetra(letra)}
                >
                {letra}
                </button>
              ))
            }
        </div>
        <div className='botones-page-game'>
            <button><a href="/Banner">Banner</a></button>
            <button><a href="/Juego">Reiniciar</a></button>
        </div>
    </div>
  )
}

export default Juego;