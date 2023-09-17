const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <h1>Skills</h1>
        <div className="center-ul">
          <div className="skills-content">
            <ul className="skill-tecn">
              <p>Technical Skills</p>
              <li className="skill-li">JAVASCRIPT<i className="fa-brands fa-square-js"></i></li>
              <li className="skill-li">CSS<i className="fa-brands fa-css3-alt"></i></li>
              <li className="skill-li">REACT<i className="fa-brands fa-react"></i></li>
              <li className="skill-li">HTML<i className="fa-brands fa-html5"></i></li>
              <li className="skill-li">NODEJS<i className='bx bxl-nodejs'></i></li>
            </ul>

            <ul className="skill-tecn">
              <p>Professional Skills</p>
              <li className="skill-li">COMUNICACION</li>
              <li className="skill-li">TRBAJO EN EQUIPO</li>
              <li className="skill-li">CREATIVIDAD</li>
              <li className="skill-li">DEDICACION</li>
              <li className="skill-li">RESPETO</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skills;
