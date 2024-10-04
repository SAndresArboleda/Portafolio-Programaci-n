import { useState } from 'react';
import './BolaMagica.css'

export const BolaMagica8 = () => {
    const [respuesta, setRespuesta] = useState('');
    const [cargando, setCargando] = useState(false);
    const respuestas = [
        "Es seguro.",
        "Pregunta de nuevo más tarde.",
        "No cuentes con ello.",
        "¡SI, definitivamentel",
        "Mis fuentes dicen que no.",
        "No puedo predecir ahora.",
        "Parece prometedor."
    ];

    const handleSubmit = () => {
        setCargando(true)
        setRespuesta("")
        setTimeout(() => {
            const indiceRandom = Math.floor(Math.random() * respuestas.length)
            setRespuesta(respuestas[indiceRandom]);
            setCargando(false);
        }, 2000)
    }



    return (
        <div id="BolaMagica">
            <input type="text" placeholder='¿Ingresa tu Pregunta?' />
            <button type='submit' onClick={handleSubmit}>Respuesta</button>
            <div>
                {cargando ? <span>Buscando...</span> : <span>{respuesta}</span>}</div>
        </div>
    )
}