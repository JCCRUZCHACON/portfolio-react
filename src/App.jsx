import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBackg from "./components/ParticlesBackg";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Curriculum from "./components/Curriculum";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
    <div className="particles-container">
      <ParticlesBackg/>
    </div>

      <Navbar />
      {/* <Header /> */}
      <Home />  
      <About />
      <Skills />
      <Curriculum />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
