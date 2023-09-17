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
                  <h4>UNIVERSITY</h4>
                  <span className="casa">Universidad privada del norte</span>
                  <span className="fecha">2014 - 2019</span>
                  <p>INGENIERIA DE SISTEMAS</p>
                  <div className="conectori">
                    <div className="circuloi"></div>
                    <p></p>
                  </div>
                </div>
                <div className="item izq">
                  <h4>INSITUTO</h4>
                  <span className="casa">Telesup</span>
                  <span className="fecha">2009 - 2012</span>
                  <p>COMPUTACION E INFORMATICA</p>
                  <div className="conectori">
                    <div className="circuloi"></div>
                  </div>
                </div>
                <div className="item izq">
                  <h4>INSITUTO</h4>
                  <span className="casa">senati</span>
                  <span className="fecha">2005 - 2008</span>
                  <p>MECANICA TEXTIL</p>
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
