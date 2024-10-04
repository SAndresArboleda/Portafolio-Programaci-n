import React, { useState } from 'react';
import "./ahorcado.css";
import BarraNav from '../../BarraNavegacion/BarraNav';

const words =
  ["aburrido", "acordeonero", "aguapanela", "alcahueta", "amigo", "andariego", "anisado", "antioqueño", "aprovechado", "avispado", "bajo", "bala", "bambuquero", "bandeja", "bandido", "barraquera", "bobo", "bollo", "bonachón", "botado", "bozo", "brinco", "buñuelo", "cachaco", "cafetero", "calidoso", "calzón", "canasto", "cantaleta", "carreta", "carro", "cascar", "chancleta", "chato", "chevere", "chicanero", "chico", "chimenea", "chinchorro", "chocho", "chontaduro", "chorro", "chucho", "churro", "ciclado", "clima", "colchón", "colombina", "comadre", "comida", "compadre", "compinche", "conchudo", "costal", "costeño", "creido", "cucuteño", "culebra", "culebrero", "cumpleaños", "curuba", "dama", "decente", "delicioso", "derramar", "despejado", "despelote", "despistado", "destello", "diablo", "dichoso", "diligente", "diosa", "dique", "dormido", "dulce", "embajador", "embarrar", "empanada", "enamorado", "encarretado", "encartado", "encierro", "entrometido", "envidia", "escalera", "escarapela", "esperanza", "espumoso", "estampilla", "estirado", "estrella", "exagerado", "famoso", "finca", "flojo", "fogueado", "fresco", "frijoles", "fruncido", "gallada", "gallinazo", "gancho", "garra", "gente", "gloria", "gordo", "gualala", "guama", "guateque", "guardado", "guaricha", "guarnición", "guiso", "guitarro", "hábil", "hacendado", "hacha", "hermoso", "hervido", "hincha", "hombre", "honesto", "humilde", "indio", "inflado", "ingenioso", "intrépido", "invierno", "jefe", "jirafa", "juguete", "juicioso", "laguna", "laureles", "lento", "leña", "libre", "llama", "llanero", "loco", "lucha", "luchador", "maduro", "malo", "manjar", "maravilla", "marinero", "mazamorra", "mecato", "medallo", "medellinense", "mermelada", "mesero", "metiche", "miedo", "milagro", "mono", "montañero", "morral", "mugre", "musaraña", "naranjo", "nativo", "navegar", "negocio", "noble", "noche", "novato", "novela", "nutria", "ñapa", "ñerito", "ojalá", "ojeador", "olla", "ordenado", "país", "pana", "pancoger", "papa", "parada", "parche", "paseo", "patacón", "pecado", "peinar", "pelado", "pelota", "pergamino", "perico", "picado", "pila", "pilas", "pintado", "piscina", "plan", "plato", "pobre", "polvo", "poncho", "porro", "presidente", "primo", "propio", "pueblo", "puente", "pulgar", "pura", "puro", "queso", "quemado", "quieto", "quimbaya", "quindiano", "quinto", "quiosco", "raizal", "rama", "ranchero", "recado", "relajo", "remanso", "rencor", "rey"

  ];

export function Ahorcado() {

  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [attempts, setAttempts] = useState(30);

  React.useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  const handleGuess = (letter) => {
    if (guesses.includes(letter) || attempts <= 0) return;

    setGuesses([...guesses, letter]);

    if (!word.includes(letter)) {
      setAttempts(attempts - 1);
    }
  };

  const getDisplayWord = () => {
    return word.split('').map(letter => (guesses.includes(letter) ? letter : '_')).join(' ');
  };

  const isGameOver = attempts <= 0 || getDisplayWord().indexOf('_') === -1;

  return (
    <div >
      <header>
        <BarraNav />
      </header>
      <div id='ContAhorcado'>
        <div className="hangman-container">
          <h1>Juego del Ahorcado</h1>
          <div className="word-container">
            <p className="word">{getDisplayWord()}</p>
          </div>
          <p>Intentos restantes: {attempts}</p>

          <div>
            {isGameOver ? (
              <h2>{getDisplayWord().indexOf('_') === -1 ? '¡Ganaste!' : '¡Perdiste!'}</h2>
            ) : (
              <div className="button-container">
                {Array.from(Array(26)).map((_, index) => {
                  const letter = String.fromCharCode(index + 65).toLowerCase();
                  return (
                    <button
                      key={index}
                      onClick={() => handleGuess(letter)}
                      className={`letter-button ${guesses.includes(letter) ? 'disabled' : ''}`}
                      disabled={guesses.includes(letter)}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {isGameOver && (
            <button
              className="restart-button"
              onClick={() => {
                setWord(words[Math.floor(Math.random() * words.length)]);
                setGuesses([]);
                setAttempts(30);
              }}
            >
              Reiniciar
            </button>
          )}
        </div>
      </div>
    </div>
  )
}