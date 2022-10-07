import { useState } from "react";
export default function Juego() {
    const Palabras = [
        "MEDIA",
        "OTORRINOLARINGOLO",
        "CITAR",
        "CHIMICHURRI",
        "DOCUMENTO",
        "PROFESOR",
        "ESPINAS",
        "MARCOS",
        "MARGARITA",
        "CODIGO",
        "BOCA",
        "RIVER",
        "KAKAROTTO",
        "VEGETA"
    ]

    const Letras = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
        "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S",
        "T", "U", "V", "W", "X", "Y", "Z",
    ]

    const [SelectWord, setSelectWord] = useState("");//Palabras[Math.floor(Math.random() * Palabras.length)]
    const [PalabraIncog, setPalabraIncog] = useState(Array);
    const [Incog, setIncog] = useState(Array);
    const [eleccionJugador, setEleccionJugador] = useState({});
    const [gano,setGano]=useState(false);
    const [inicio,setInicio]=useState(false);

    let cant_errores = 0;
    let cant_aciertos = 0;
    let source = `img/${cant_errores}.png`;
    let gane="° ° ° ° ° ° ° ° °"

    const elegirOpcion = (event) => {
        const jugador = Letras.find(e => e === event.target.textContent);
        setEleccionJugador(jugador);
    }

    const Opcion = (props) => {
        return (
            <button className="option" onClick={props.elegir}>
                {props.valor}
            </button>
        )
    }
    const randomWord = () => {
        setSelectWord(Palabras[Math.floor(Math.random() * Palabras.length)]);
        setPalabraIncog(Array.from(SelectWord));
        setIncog(Array(SelectWord.length).fill("|?|"));
        setInicio(true);
    }

    for (var i = 0; i !== SelectWord.length; i++) {
        if (eleccionJugador === PalabraIncog[i]) {
            Incog[i] = eleccionJugador;
            cant_aciertos++;
        } else {
            cant_errores++;
            console.log("No wey");
        };
    };

    if (cant_errores === 7) {
        gane="Perdiste, la palabra era " + SelectWord;
       
    };
    if (Incog === PalabraIncog ) {
        gane = "Ganaste!! SIIUUUUUU";
    }

    return (
        <div>
            <section>

                <button onClick={randomWord}>{inicio ?<p>seguro???</p>:<p>Start</p> }</button>
            </section>
            <section >
                <div className="gameplay__div-choices">
                <img src={source} alt="Ahorcado" />
                    {Incog.map((index,elemento) => (
                        <p key={elemento}>{index}</p>
                    ))}
                    {PalabraIncog}
                </div>
            </section>
            <div className="gameplay__div-choices">
                {gano ?<h2>{gane}</h2>: <h2>Aque no adivinas Bueyyyy</h2> }
                {Letras.map((e, index) =>
                    <Opcion key={index}
                        elegir={elegirOpcion}
                        valor={Letras[index]} />)
                }

            </div>

        </div>

    );
}