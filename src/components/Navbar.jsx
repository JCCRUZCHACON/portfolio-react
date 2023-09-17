const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src="./images/barner.webp" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto h6 ">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#curriculum">
                curriculum
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
