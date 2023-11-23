import { Box } from '@chakra-ui/react';
import './App.css';
import About from './component/About';
import GetInTouch from './component/GetInTouch';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import SectionHead from './component/SectionHead';
import Projects from './component/Projects';
import SideProject from './component/SideProject';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <GetInTouch />
      <About />
      <Projects />
      <SideProject />
    </div>
  );
}

export default App;
