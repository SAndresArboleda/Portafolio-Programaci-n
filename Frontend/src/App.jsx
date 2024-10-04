import { Route, Routes } from 'react-router-dom'
import Home from './views/001Home/Home'
import {Cards} from './views/002Cards/Cards'
import Titulos from './views/003Titulos/Titulos'
import Botones from './views/004Botones/Botones'
import Formularios from './views/005Formularios/Formularios'
import Inicio from './views/000Inicio/Inicio'
import { EscribirVoz } from './views/007EscribirVoz/EscribirVoz'
import { Juegos } from './views/008Juegos/Juegos'
import { Calculadora } from './Componentes/008Juego/Calculadora/Calculadora'
import { Ahorcado } from './Componentes/008Juego/Ahorcado/ahorcado'
import { Paint } from './Componentes/008Juego/Paint/Paint'
import { Ruleta } from './Componentes/008Juego/Ruleta/Ruleta'
import { BolaMagica8 } from './Componentes/008Juego/Bola Mgica/BolaMagica'
import Sliders from './views/006Sliders/Sliders'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path = '/' element = {<Inicio/>} />
        <Route exact path = '/Home' element = {<Home/>} />
        <Route exact path = '/Cards' element = {<Cards/>} />
        <Route exact path = '/Titulos' element = {<Titulos/>} />
        <Route exact path = '/Botones' element = {<Botones/>} />
        <Route exact path = '/Formularios' element = {<Formularios/>} />
        <Route exact path = '/Calculadora' element = {<Calculadora/>} />
        <Route exact path = '/EscribirVoz' element = {<EscribirVoz/>} />
        <Route exact path = '/Juegos' element = {<Juegos/>} />
        <Route exact path = '/Ahorcado' element = {<Ahorcado/>} />
        <Route exact path = '/Paint' element = {<Paint/>} />
        <Route exact path = '/Box' element = {<Paint/>} />
        <Route exact path = '/Ruleta' element = {<Ruleta/>} />
        <Route exact path = '/BolaMagica' element = {<BolaMagica8/>} />
        <Route exact path = '/Sliders' element = {<Sliders/>} />

      </Routes>
    </div>
  )
}

export default App
