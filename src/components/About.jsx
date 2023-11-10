const About = () => {
  return (
    <>
      {/* ------------- SECCION SOBRE MI ---------------------- */}
      <section id="about-me" className="sobremi">
        <div className="contenido-seccion">
          <h2>Sobre Mí</h2>
          <p className="skill-p">
            <span>Hola, soy Juan Cruz.</span> Egresado de la carrera de
            computacion e informatica, con conocimientos en javascript, html.
            css react, bases de datos mysql, actualmente trabajo como
            programador en ideas text.
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
                  charly_jc22@hotmail.com
                </li>
                <li>
                  <strong>Dirección</strong>
                  los rubies 1964 sjl
                </li>
                <li>
                  <strong>Cargo</strong>
                  <span>Programador</span>
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
                  <a href="https://viajaporperu.com/">
                    <i className="fa-solid fa-plane"></i>
                  </a>
                  <span>TRAVEL</span>
                </div>

                <div className="interes">
                  <a href="https://www.fifa.com/es/tournaments/mens/worldcup">
                    <i className="fa-solid fa-person-hiking"></i>
                  </a>
                  <span>SPORT</span>
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
            <a target="_blank" href="https://drive.google.com/drive/folders/1Up_A5oIjLcOGGZRbL9rE0WDkqecExtY2">
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



