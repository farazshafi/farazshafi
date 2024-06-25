import './App.css';
import About from './component/About';
import GetInTouch from './component/GetInTouch';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Projects from './component/Projects';
import SideProject from './component/SideProject';
import Skills from './component/Skills';
import Education from './component/Education';
import Footer from './component/Footer';
import ScrollToTopBtn from './component/ScrollToTopBtn';

function App() {

  return (
    <>
      <div className="App">
        <ScrollToTopBtn />
        <Navbar />
        <Intro />
        <GetInTouch col={"#DDF2FD"} />
        <About />
        <Projects />
        <SideProject />
        <Skills />
        <Education />
        <Footer />
      </div>
    </>

  );
}

export default App;
