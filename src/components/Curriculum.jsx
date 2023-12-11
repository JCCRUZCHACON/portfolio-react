const Curriculum = () => {
  
  return (
      <div>
        {/* <!-- SECCION CURRICULUM --> */}
        <section id="curriculum" className="curriculum">
          <div className="contenido-seccion">
            <h2>Curriculum</h2>
            <div className="fila">
              <div className="col izquierda">
                <h3>Educación</h3>
                <div className="item izq">
                  <h4>Especialidad</h4>
                  <span className="casa">Academlo</span>
                  <span className="fecha">Mayo - Diciembre 2023</span>
                  <p>Full Stack Web Developmet</p>
                  <div className="conectori">
                    <div className="circuloi"></div>
                    <p></p>
                  </div>
                </div>

                <div className="item izq">
                  <h4>Universidad</h4>
                  <span className="casa">Universidad privada del norte</span>
                  <span className="fecha">2016 - 2019</span>
                  <p>Ingenieria de Sistemas Computacionales(truncas)</p>
                  <div className="conectori">
                    <div className="circuloi"></div>
                    <p></p>
                  </div>
                </div>

                <div className="item izq">
                  <h4>INSITUTO</h4>
                  <span className="casa">Telesup</span>
                  <span className="fecha">2009 - 2012</span>
                  <p>Computación e Informatica</p>
                  <a target="_blank" href="./public/images/certificadoTelesup.jpg">link de certificado</a>
                  <div className="conectori">
                    <div className="circuloi"></div>
                  </div>
                </div>
                <div className="item izq">
                  <h4>INSITUTO</h4>
                  <span className="casa">Senati</span>
                  <span className="fecha">2003 - 2005</span>
                  <p>Mecanica Textil</p>
                  <a target="_blank" href="./public/images/certificadoSenati.jpg">link de certificado</a>
                  <div className="conectori">
                    <div className="circuloi"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};
export default Curriculum;
