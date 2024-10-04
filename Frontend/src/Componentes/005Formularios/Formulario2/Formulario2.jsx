import './Formulario2.css'
/*https://www.instagram.com/p/C9c-f3OP0iS/
https://www.instagram.com/reel/C9Kze5DvQPj/?igsh=MWlxMWg3OXBnYWoxNA%3D%3D*/

const Formulario2 = () => {

    document.addEventListener("DOMContent Loaded", () => {
        const inputs = document.querySelectorAll(".input")
        const contrasena1 = document.getElementById("contraseña-1")
        const contrasena2 = document.getElementById("contraseña-2")
        const mostrarContrasena1 = document.getElementById("mostrar-contraseña-1")
        const mostrarContrasena2 = document.getElementById("mostrar-contraseña-2")
        //para añadir o quitar una clase nueva cuando halla texto en los inputs
        inputs.forEach(input => {
            input.addEventListener("input", () => {
                if (input.value) {
                    input.classList.add("input-con-texto")
                } else {
                    input.classList.remove("input-con-texto")
                }
            })
        })
        //Evento para mostrar la contraseña
        mostrarContrasena1.addEventListener("click", () => {
            if (contrasena1.type === "password") {
                contrasena1.type = "text"
            } else {
                contrasena1.type = "password"
            }
        })
        mostrarContrasena2.addEventListener("click", () => {
            if (contrasena2.type === "password") {
                contrasena2.type = "text"
            } else {
                contrasena2.type = "password"
            }
        })
    })

    return (
        <div className='Formulario2'>
            <form id='formulario2' action="">
                    <h2>FORMULARIO 2</h2>
                <section className='seccion-informacion'>
                    <div className='inputs'>
                        <input type="text" className='input' />
                        <label className="label-nombre"></label>
                        <input type="email" className='input' />
                        <label className="label-email"></label>
                        <div className='contenedor-contraseña'>
                            <input type="password" className='input' id='contraseña-1' />
                            <label className="label-contraseña"></label>
                            <p className='mostrar-contraseña' id='mostrar-contraseña-1'>casobgkgkjgkj</p>

                            <input type="password" className='input' id='contraseña-2' />
                            <label className="label-confirmar-contraseña"></label>
                            <p className='mostrar-contraseña' id='mostrar-contraseña-2'>Mostrar</p>
                        </div>
                    </div>
                </section>
                <section className='seccion-botones'>
                    <button>Registrarse</button>
                    <p>Ya tienes una cuenta?
                        <a href="inciar-sesion.html"> Iniciar Sesion</a>
                    </p>
                </section>
            </form>
        </div>
    )
}

export default Formulario2