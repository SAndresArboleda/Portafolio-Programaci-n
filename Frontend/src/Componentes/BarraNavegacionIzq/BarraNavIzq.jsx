import { Link } from "react-router-dom"
import './BarraNavIzq.css'


const BarraNavIzq = () => {
    return (
        <nav id="navIzq" className='NavIzq'>
            <div className="opcionesNavIzq">
                <a href=""><Link to='/Cards'>Cards</Link></a>
                <a href=""> <Link to='/Titulos'>Titulos</Link></a>
                <a href=""><Link to='/Botones'>Botones</Link></a>
                <a href=""> <Link to='/Formularios'>Formularios</Link></a>
                <a href=""><Link to='/Sliders'>Sliders</Link></a>
            </div>
        </nav>
    )
}
export default BarraNavIzq