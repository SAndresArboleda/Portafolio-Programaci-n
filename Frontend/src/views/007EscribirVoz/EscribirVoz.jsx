/*https://www.facebook.com/reel/837736841341869 */
import { useState, useRef } from 'react'
import BarraNav from '../../Componentes/BarraNavegacion/BarraNav';

export const EscribirVoz = () => {
    const [message, setMessage] = useState('');
    //para guardar la instancia:
    const recognitionRef = useRef(null);

    const startRecognition = () => {
        //para ver si el navegador soporta la app:
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.error('Speeck Recognition API not supported in this browser');
            return;
        }
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.lang = 'es-ES';
        recognitionRef.current.continuous = false; //que no se continue definiendo de forma indefinida
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setMessage(transcript);
        };
        recognitionRef.current.oneerror = (event) => {
            console.error('Error during recgnition:', event.error);
        };
        recognitionRef.current.start();

    }
    return (
        <div>
            <header>
                <BarraNav />
            </header>
            <section>
                <button onClick={startRecognition}>Hablar</button>
                <p>{message}</p>
            </section>
        </div>
    )
}