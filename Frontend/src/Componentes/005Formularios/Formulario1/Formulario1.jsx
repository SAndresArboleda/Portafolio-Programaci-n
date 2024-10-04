import './Formulario1.css'
/*https://www.instagram.com/reel/C8AMNilNX7Y/?igsh=dzNlZG4yYm1heTVq */

const Formulario1 = () => {
    return (
        <form id='formulario1' action="">
            <div className='contFormulario1'>
                <h2>FORMULARIO 1</h2>
                <div className='contlabels'>
                    <label className="label">
                        <input type="text" placeholder=" " className="input"></input>
                        <span className="label__name">Ingresa tu nombre</span>
                    </label>
                    <label className="label">
                        <input type="text" placeholder=" " className="input"></input>
                        <span className="label__name">Ingresa tu apellido</span>
                    </label>
                </div>
                <section className='boton'>
                    <button type='button'> Iniciar Sesion</button>
                </section>
            </div>
        </form>
    )
}

export default Formulario1