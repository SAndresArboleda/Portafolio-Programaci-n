import { Titulo1 } from '../../Componentes/003Titulo/Titulo1/Titulo1'
import { Titulo2 } from '../../Componentes/003Titulo/Titulo2/Titulo2'
import BarraNav from '../../Componentes/BarraNavegacion/BarraNav'

function Titulos() {

  return (
    <div>
      <header>
        <BarraNav />
      </header>
      <main>
        <Titulo1/>
        <Titulo2/>
      </main>

    </div>
  )
}

export default Titulos