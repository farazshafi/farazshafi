import './App.css';
import GetInTouch from './component/GetInTouch';
import Intro from './component/Intro';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <GetInTouch />
    </div> 
  );
}

export default App;
