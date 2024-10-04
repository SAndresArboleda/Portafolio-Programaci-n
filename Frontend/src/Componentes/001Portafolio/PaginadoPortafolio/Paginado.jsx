import { useEffect } from 'react';
import './Paginado.css'
import { Link } from 'react-router-dom';

const Paginado = () => {

    useEffect(() => {
        const $cards = document.querySelector('.fotoPortaf');
        const $images = document.querySelectorAll('.imgPortaf');
        const $backgrounds = document.querySelectorAll('.bgPortaf');
        const RANGE = 40;
        const calValue = (a, b) => {
            return (a / b * RANGE - RANGE / 2).toFixed(1);
        };

        document.addEventListener('mousemove', (event) => {
            const yValue = calValue(event.clientY, window.innerHeight);
            const xValue = calValue(event.clientX, window.innerWidth);

            $cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
            $images.forEach(($img) => {
                $img.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
            });

            $backgrounds.forEach(($bg) => {
                $bg.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
            });
        });
    }, []);
    return (
        <div>
            <section id='inicio' className='inicio'>
                <div className='contenedor-banner'>
                    <div className='fotoPortaf'>
                        <div className="fotoPort one">
                            <div className="bgPortaf"></div>
                            <img className="imgPortaf" src="./src/Componentes/001Portafolio/PaginadoPortafolio/img/Andres.png" alt="" />
                        </div>
                    </div>
                    <h1>ANDRÉS ARBOLEDA</h1>
                    <h2>Desarrollador Full Stack</h2>
                    <div className='redes'>
                        <a href="https://www.linkedin.com/in/simon-arboleda-5a91612b5/"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="https://github.com/SAndresArboleda"><i className="fa-brands fa-github"></i></a>
                        {/* <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-solid fa-rss"></i></a> */}
                    </div>
                </div>
            </section>
            <section id="sobremi" className="sobremi">
                <div className="contenido-seccion">
                    <h2>Sobre mi</h2>
                    <p>Hola soy <span>desarrollador Full Stack </span>y me concidero una persona disciplinada, responsable, organizada, respetuosa, líder e innovadora. Con una alta disposición para obtener nuevos conocimientos que aporten a mi trabajo, a mi desarrollo profesional y personal. Me alegra poder afrontar nuevos retos y disfrutar del placer y satisfacción que se genera al culminarlos.</p>
                    <div className="fila">
                        <div className="col">
                            <h3>Datos Personales</h3>
                            <ul>
                                {/* <li><strong>Cumpleaños </strong>
                                    Enero 10 de 1985</li> */}
                                <li><strong>Teléfono </strong>
                                    3215579580 - 3054752548</li>
                                <li><strong>Email </strong>
                                    simondres@yahoo.es</li>
                                {/* <li><strong>Website </strong>
                                    www.exmple.com</li> */}
                                <li><strong>Dirección </strong>
                                    carrera 8 #10-26 Antioquia-Colombia</li>
                                <li><strong>Cargo </strong>
                                    <span>Desarrollador Full Stack</span></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Intereses</h3>
                            <div className="contenedor-intereses">
                                <div className="interes">
                                    <i className="fa-solid fa-people-roof"></i>
                                    <span>FAMILIA</span>
                                </div>
                                <Link to='/Home' className='LinkPort'><div className="interes">
                                    <i className="fa-solid fa-laptop"></i>
                                    <span>PROGRAMAR</span>
                                </div></Link>
                                <div className="interes">
                                    <i className='fa-solid fa-gamepad'></i>
                                    <span>JUEGOS</span>
                                </div>
                                <div className="interes">
                                    <i className="fa-solid fa-film"></i>
                                    <span>PELICULAS</span>
                                </div>
                                <div className="interes">
                                    <i className="fa-solid fa-plane"></i>
                                    <span>VIAJAR</span>
                                </div>
                                <div className="interes">
                                    <i className="fa-solid fa-dumbbell"></i>
                                    <span>DEPORTE</span>
                                </div>
                                <div className="interes">
                                    <i className="fa-solid fa-guitar"></i>
                                    <span>GUITARRA</span>
                                </div>
                                <div className="interes">
                                    <i className="fa-solid fa-headphones"></i>
                                    <span>MUSICA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1tlhZFSq4IuFTpCNnTrEOmhBCFYCUo6QG/view?usp=sharing"><button>
                        Descargar CV<i className="fa-solid fa-download"></i>
                        <span className='overlay'></span>
                    </button></a>
                </div>
            </section>
            <section id='skills' className='skills'>
                <div className="contenid-seccion">
                    <h2>Skills</h2>
                    <div className="fila">
                        {/* Technical Skill */}
                        <div className="col">
                            <h3>Tecnical Skills</h3>
                            <div className="skill">
                                <span>Javascript</span>
                                <div className='barra-skill'>
                                    <div className="progreso javascript">
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>HTML & CSS</span>
                                <div className='barra-skill'>
                                    <div className="progreso htmlcss">
                                        <span>89%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>React</span>
                                <div className='barra-skill'>
                                    <div className="progreso react">
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>MySQL (MariaDB)</span>
                                <div className='barra-skill'>
                                    <div className="progreso mysql">
                                        <span>65%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>SQL Server</span>
                                <div className='barra-skill'>
                                    <div className="progreso server">
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Professional Skill */}
                        <div className="col">
                            <h3>Profesional Skills</h3>
                            <div className="skill">
                                <span>Comunicación</span>
                                <div className='barra-skill'>
                                    <div className="progreso comunicacion">
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Trabajo en Equipo</span>
                                <div className='barra-skill'>
                                    <div className="progreso trabajoEquipo">
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Innovasión</span>
                                <div className='barra-skill'>
                                    <div className="progreso innovasion">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Dedicación</span>
                                <div className='barra-skill'>
                                    <div className="progreso creatividad">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>responsabilidad</span>
                                <div className='barra-skill'>
                                    <div className="progreso responsabilidad">
                                        <span>95%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section id='curriculum' className='curriculum'>
                <div className="contenido-seccion">
                    <h2>Curriculum</h2>
                    <div className="fila">
                        <div className="col izquierda">
                            <h3>Educación</h3>
                            <div className="item izq">
                                <h4>Desarrollador Full Stack </h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Henry</span>
                                        <span className="fecha">2023 - 2024</span>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1OjnSvZAe2HIZxC8R2hqB8Q03RiZMjrcq/view?usp=drive_link">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img/Henry.jpg" alt="" />
                                    </a>
                                </div>
                                <p>Conocimientos en Javascrit, HTML, CSS, PostgreSQL, React, Redux, sequelize. Aplicación de los conocimientos adquiridos en el proyecto IdiomasMaster página desarrollada en equipo para la venta de idiomas y el proyecto individual utilizando API REST.</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                            <div className="item izq">
                                <h4>SQL Server</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">informaticonfig (you tube)</span>
                                        <span className="fecha">2024</span>
                                    </div>
                                    <a href="https://www.youtube.com/watch?v=SYRsyAoN8BI&list=PL2Z95CSZ1N4EW0PvNhd4ySZisgBrJjSW2&ab_channel=INFORMATICONFIG">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img/SQL Server.jpg" alt="" />
                                    </a>
                                </div>
                                <p>Conocimientos en los fundamentos esenciales de Microsoft SQL Server. Desde conceptos básicos de SQL, como consultas y manipulación de datos, hasta temas más avanzados como optimización de consultas y diseño de bases de datos eficientes.</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                            <div className="item izq">
                                <h4>MySQL (MariaDB)</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Programador Novato (you tube)</span>
                                        <span className="fecha">2024</span>
                                    </div>
                                    <a href="https://www.youtube.com/watch?v=UzN-lDFvu3k&list=PLCTD_CpMeEKQmH9cRKWWHahygZFtIdwYG&ab_channel=ProgramadorNovato">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img/MySQL.jpg" alt="" />
                                    </a>
                                </div>
                                <p>Conocimientos en el sistema de gestión de bases de datos relacional MariaDB el cual es derivado de MySQL, MariaDB Tiene una alta compatibilidad con MySQL ya que posee las mismas órdenes, interfaces, API y bibliotecas, siendo su objetivo poder cambiar un servidor por otro directamente.</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                            <div className="item izq">
                                <h4>Fundamentos de Ethica Hacking</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Seguridad Cero</span>
                                        <span className="fecha">2024</span>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1MSyTpcoBovvji1g0eyom3SXDo_98YsZF/view?usp=drive_link">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img/Fundamentos Ethica Hacking.jpg" alt="" />
                                    </a>
                                </div>
                                <p>Conocimientos y habilidades necesarias para llevar a cabo tus propias evaluaciones de seguridad y sumergirte en el apasionante mundo de la ciberseguridad.
                                </p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                            <div className="item izq">
                                <h4>Inteligencia Artificial para la Productividad Laboral</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">
                                            Comfama</span>
                                        <span className="fecha">2024</span>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1nyplXnTM_ZRkCL9_rEsRiy5eeQA4mqHB/view?usp=drive_link">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\AI Productividad Laboral.JPG" alt=" foto Certificado AI" />
                                    </a>
                                </div>
                                <p>Conocimientos básicos en el uso de algunas herramientas de AI disponibles para facilitar las actividades en las diferentes profesiones y aumentar la productividad y velocidad de los procesos productivos y de servicios, búsqueda de empleo, realización de informes o cartas de presentación.</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                            <div className="item izq">
                                <h4>Ingeniero de Producción</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Instituto Tecnológico Metropolitano ITM</span>
                                        <span className="fecha">2024</span>
                                    </div>
                                    <a href="https://drive.google.com/file/d/1Ge6A_fj2Fh_Klr_NTC0WGWhJoqEelMAd/view?usp=drive_link">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\Ingenieria Produccion.JPG" alt="Foto Diploma Ingeniería" />
                                    </a>
                                </div>
                                <p>Ingeniería de Producción con conocimientos en procesos de manufactura, manejo de inventarios, manejo de personal, distribución de planta, manejo de herramientas de mejora continua como Lean, TPM, kaiser, liquidación de nomina, manejo de costos y logistica.</p>
                                <div className="conectori">
                                    <div className="circuloi"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col derecha">
                            <h3>Experiencia de trabajo</h3>
                            <div className="item der">
                                <h4>Proyecto Idiomas Master</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Henry (bootcamp)</span>
                                        <span className="fecha">2023 - 2024</span>
                                    </div>
                                    <a href="https://idiomasmaster-toqy.onrender.com/">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\IdiomasMaster.jpg" alt="" />
                                    </a>
                                </div>
                                <p>Proyecto grupal donde tuvimos la oportunidad de desarrolladar una plataforma de venta de cursos de Idiomas para la poblacion Hispana utilizando lenguajes y herramientas como Javascript, React, Express, Mercadopago, MongoDB, Redux, Talwind CSS, soket.io, utilizando Scrum y a trello para el asentamiento de tareas.</p>
                                <div className="conectord">
                                    <div className="circulod"></div>
                                </div>
                            </div>
                            <div className="item der">
                                <h4>Proyecto Pokémon</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Henry (bootcamp)</span>
                                        <span className="fecha">2023 - 2024</span>
                                    </div>
                                    <a href="https://idiomasmaster-toqy.onrender.com/">
                                        <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\Pokémon.jpg" alt="foto Pokémon" />
                                    </a>
                                </div>
                                <p>Proyecto individual tomando informacion de una API Rest y utilizando herramientas como Javascript, React, Express, Sequelize, Redux, HTML, CSS, PostgreSQL.</p>
                                <div className="conectord">
                                    <div className="circulod"></div>
                                </div>
                            </div>
                            <div className="item der">
                                <h4>Ingeniero de Producción</h4>
                                <div className='izqFoto'>
                                    <div className='instituto'>
                                        <span className="casa">Corona Colceramica S.A</span>
                                        <span className="fecha">2003 - 2023</span>
                                    </div>
                                    <a href="https://corona.co/_ui/spc/ciudades/girardota.html"><img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\colceramica.jpg" alt="foto colcerámica" /></a>
                                </div>
                                <p>En 19 años en Corona S.A tuve la experiencia como facilitador, planeador, metrólogo y Planeador de mantenimiento (SAP). Adquiriendo competencias de trabajo en equipo, liderazgo, adaptación a los cambios, trabajo bajo presión, análisis de datos, uso de herramientas de mejora continua como Lean, TPM, kaiser, 5W-1H, Kamban</p>
                                <div className="conectord">
                                    <div className="circulod"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section id='portafolio' className='portafolio'>
                <div className="contenido-seccion">
                    <h2>Proyectos</h2>
                    <div className="galeria">
                        <div className="proyecto">
                            <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\IdiomasMaster.jpg" alt="" />
                            <div className="overlay">
                                <a href="https://idiomasmaster-toqy.onrender.com/"><h3>Ecommerce Idiomas</h3>
                                    <p>Idiomas Master</p></a>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\Pokémon.jpg" alt="" />
                            <div className="overlay">
                                <a href="https://idiomasmaster-toqy.onrender.com/"><h3>Api Rest</h3>
                                    <p>Pókemon</p></a>
                            </div>
                        </div>
                        <div className="proyecto">
                            <img src="src\Componentes\001Portafolio\PaginadoPortafolio\img\Coca Cola.jpg" alt="" />
                            <div className="overlay">
                                <a href="https://landing-practice1.surge.sh/"><h3>Landing Page</h3>
                                    <p>Coca Cola</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*             
            <section id='contacto' className='contacto'>
                <div className="contenido-seccion">
                    <h2>Contacto</h2>
                    <div className="fila">
                        <div className="col">
                            <input type="text" placeholder='Tu nombre' />
                            <input type="text" placeholder='Numero telefónico' />
                            <input type="text" placeholder='Dirección de Correo' />
                            <input type="text" placeholder='Tema' />
                            <textarea name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
                            <button>
                                Enviar Mensaje<i className='fa-solid fa-paper-plane'></i>
                                <span className='overlay'></span>
                            </button>
                        </div>
                        <div className="col">
                            <img src="src/Componentes/001Portafolio/PaginadoPortafolio/img/ubicacion.jpg" alt="" />
                            <div className="info">
                                <ul>
                                    <li>
                                        <i className='fa-solid fa-location-dot'></i>
                                        Colombia, Antioquia, Medellín
                                    </li>
                                    <li>
                                        <i className='fa-solid fa-mobile-screen'></i>
                                        Contactame: +57 321 557 9580
                                    </li>
                                    <li>
                                        <i className='fa-solid fa-envelope'></i>
                                        Email: simondres@yahoo.es
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             */}
            <footer className='footerPortafolio'>
                <a href="#inicio" className='arriba'>
                    <i className='fa-solid fa-angles-up'></i>
                </a>
                <div className='redes'>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-github"></i></a>
                    {/* <a href="#"><i className="fa-brands fa-instagram"></i></a> */}
                    {/* <a href="#"><i className="fa-solid fa-rss"></i></a> */}
                </div>
            </footer>
        </div >
    )
}

export default Paginado