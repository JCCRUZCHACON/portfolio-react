const Contacts = () => {
  
  return (
    <div>
      {/* <!-- SECCION CONTACTO --> */}
      <section id="contacto" className="contacto">
        <div className="contenido-seccion">
          <h2 className="content-h2">CONTACTO</h2>
          <div className="fila">
            {/* <!-- Formulario --> */}
            <div className="col">
              <input type="text" placeholder="Nombre"></input>
              <input type="text" placeholder="Número telefónico"></input>
              <input type="text" placeholder="Dirección de correo"></input>
              <input type="text" placeholder="Tema"></input>
              <textarea
                name=""
                id=""
                cols="30"
                rows="6"
                placeholder="Mensaje"
              ></textarea>
              <button>
                Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contacts;
