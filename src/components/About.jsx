const About = () => {

  return (
    <>
      {/* ------------- SECCION SOBRE MI ---------------------- */}
      <section id="about-me" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre Mí</h2>
          <p className="skill-p">
            <span>Saludos, Soy Desarrollador Web Full Stack.</span> Egresado de la carrera de
            Sistemas, mi stack mas solido es con ReactJS + NodeJs con javaScript con bases de datos
            Postgres, MySQL, además 
            de herramientas fundamentales como Git, HTML Y YCSS.<br/>
            Asi mismo , entre mis habilidades blandas destacan la adaptabilidad, el pensamiento critico,
            la gestion del tiempo, el trabajo en equipo, la capacidad de resolución de problemas, la
            resiliencia y el compromiso.
          </p>

          <div className="fila">
            {/* <!-- datos personales --> */}
            <div className="col">
              <h3>Datos Personales</h3>
              <ul>
                <li>
                  <strong>Teléfono</strong>
                  935395304
                </li>
                <li>
                  <strong>Email</strong>
                  confeccionesmc2018@gmail.com
                </li>
              </ul>
            </div>

            {/* <!-- intereses --> */}
            <div className="col">
              <h3>Intereses</h3>
              <div className="contenedor-intereses">
                <div className="interes">
                  <a href="https://www.youtube.com/watch?v=dFxsQmpxO_E">
                    <i className="fa-solid fa-headphones"></i>
                  </a>
                  <span>MUSIC</span>
                </div>

                <div className="interes">
                  <a href="https://aprendejavascript.org/">
                    <i className="fa-solid fa-book"></i>
                  </a>
                  <span>BOOKS</span>
                </div>
              </div>
            </div>
          </div>
          <button>
            Descargar CV 
            <a target="_blank" href="./cv.pdf">
            <i className="fa-solid fa-download"></i>
            </a>
            <span className="overlay"></span>
          </button>
        </div>
      </section>
    </>
  );
};
export default About;



