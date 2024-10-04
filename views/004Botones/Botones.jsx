import Boton1 from "../../Componentes/004Boton/Boton1/boton1";
import Boton3MeGusta from "../../Componentes/004Boton/Boton3MeGusta/Boton3MeGusta";
import BarraNav from "../../Componentes/BarraNavegacion/BarraNav";
import './botones.css'

function Botones() {

    return (
        <div>
            <header>
                <BarraNav />
            </header>
            <main id="contMain">
                <section>
                    <div className="ContBotones">
                        <div className="Botones">
                            <div>{Boton1()}</div>
                        </div>
                        <div className="Botones">
                            <div>{Boton3MeGusta()}</div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    )
}


export default Botones