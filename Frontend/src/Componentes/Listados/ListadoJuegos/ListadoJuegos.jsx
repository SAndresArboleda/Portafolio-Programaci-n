import { Link } from "react-router-dom"
import './ListadoJuegos.css'



export const ListadoJuegos = () => {

    return (
        <div id="ContListadoJuegos">
            <nav>
                <div className="Listado">
                    <Link to='/Ahorcado'>Ahorcado</Link>
                    <Link to='/Paint'>Paint</Link>
                    <Link to='/Ruleta'>Ruleta</Link>
                    <Link to='/BolaMagica'>Bola Mágica</Link>
                </div>
            </nav>
            <div className="Juegos">
            </div>
        </div>
    )
}