import './Home.css'
import BarraNav from '../../Componentes/BarraNavegacion/BarraNav'

function Home() {

  return (
    <div>
      <header>
        <BarraNav />
      </header>
      <main>
        Este es el Home
      </main>
      {/* <footer>
        Informacion de Andrés
      </footer> */}
    </div>
  )
}

export default Home