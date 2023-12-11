import emailjs from '@emailjs/browser';

const Contacts = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3wy84h', 'template_lak2vsn', e.target, 'PQyyV5GLEN7wlHrmH')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  
  return (
    <form onSubmit={sendEmail}>
      {/* <!-- SECCION CONTACTO --> */}
      <section id="contacto" className="contacto">
        <div className="contenido-seccion">
          <h2 className="content-h2">CONTACTO</h2>
          <div className="fila">
            {/* <!-- Formulario --> */}
            <div className="col">
              <input type="text" name="user_name" placeholder="Nombre"></input>
              <input type="text" name="user_phone" placeholder="Número telefónico"></input>
              <input type="text" name="user_email" placeholder="Dirección de correo"></input>
              <textarea name="message" placeholder="mensaje"></textarea>
              
              <button>
                Enviar Mensaje<i className="fa-solid fa-paper-plane"></i>
                <span className="overlay"></span>
              </button>
            </div>
          </div>
        </div>
        
      </section>
      <p className='footer_end'>Reservados todos los derechos</p> 
      <p className='footer_end'>Juan carlos ©</p>
    </form>
  );
};


export default Contacts;




