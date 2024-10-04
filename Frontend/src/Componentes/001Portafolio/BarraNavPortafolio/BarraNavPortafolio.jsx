import { useState } from 'react'
import './BarraNavPortafolio.css'
import 'https://kit.fontawesome.com/2413f55fe9.js'

const BarraNavPortafolio = () => {
    const [menuVisible, setMenuVisible] = useState(false)

    const mostrarOcultarMenu = () => {
        setMenuVisible(!menuVisible);
        
    };
    const seleccionar = () => {
        setMenuVisible (false)
    }

    return (
        <div className='htmlBarrNavPortafolio'>
            <div className='contenedor'>
                <header>
                    <div className='logo'>
                        <a href="#inicio">Andrés</a>
                    </div>
                    <nav id='nav'className={menuVisible ? "responsive" : ""}>
                        <ul>
                            <li><a href="#inicio" onClick={seleccionar}>INICIO</a></li>
                            <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                            <li><a href="#skills" onClick={seleccionar}>INFORMACION</a></li>
                            <li><a href="#curriculum" onClick={seleccionar}>CURRICULM</a></li>
                            <li><a href="#portafolio" onClick={seleccionar}>PROYECTOS</a></li>
                            {/* <li><a href="#contacto" onClick={seleccionar}>CONTACTAR</a></li> */}
                        </ul>
                    </nav>
                    <div className='nav-responsive' onClick={mostrarOcultarMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default BarraNavPortafolio


