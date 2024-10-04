import { Link } from "react-router-dom"
import './BarraNav.css'
import Reloj from "../Reloj/Reloj"


const BarraNav = () => {
    return (
        <nav id="navPpal" className="navPpal">
            <div className='logNavPpal'>
                <Link to='/' className='logoPpal'><a href="">Andrés Arboleda</a></Link>
            </div>
            <div className='navSupOptions'>
                <Link to='/Cards' className="Cards">Cards</Link>
                <Link to='/Titulos' className="Cards">Titulos</Link>
                <Link to='/Botones' className="Cards">Botones</Link>
                <Link to='/Formularios' className="Cards">Formularios</Link>
                <Link to='/Sliders' className="Cards">Sliders</Link>
                <Link to='/Calculadora' className="Cards">Calculadora</Link>
                <Link to='/EscribirVoz' className="Cards">Escribir con la Voz</Link>
                <Link to='/Juegos' className="Cards">Juegos</Link>
            </div>
            <div className="ContReloj">
                <Reloj />
            </div>
        </nav>
    )
}
export default BarraNav