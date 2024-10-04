import Formulario1 from "../../Componentes/005Formularios/Formulario1/Formulario1"
import Formulario2 from "../../Componentes/005Formularios/Formulario2/Formulario2"
import Formulario4 from "../../Componentes/005Formularios/Formulario4/Formulario4"
import { Formulario7 } from "../../Componentes/005Formularios/Formulario7/Formulario7"
import BarraNav from "../../Componentes/BarraNavegacion/BarraNav"
import './Formularios.css'


const Formularios = () => {
    return (
        <div>
            <header>
                <BarraNav />
            </header>
            <section id="seccionFormularios">
                <Formulario1 />
                <Formulario2 />
                <Formulario4 />
                <Formulario7 />
                
            </section>
        </div>
    )
}

export default Formularios