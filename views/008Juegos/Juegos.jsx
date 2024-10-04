// import {useDispatch} from 'react-redux'
import BarraNav from "../../Componentes/BarraNavegacion/BarraNav"
import './Juegos.css'
import { ListadoJuegos } from "../../Componentes/Listados/ListadoJuegos/ListadoJuegos"


export const Juegos = () => {



    return (
        <div>
            <header>
                <BarraNav />
            </header>
            <section id="contJuegos">
                    <ListadoJuegos/>
            </section>
        </div>
    )
}