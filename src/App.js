import { BrowserRouter } from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import "./App.css"
import Intro from "./Sections/Introduction/Intro";
import Education from "./Sections/Education/Education";
import Achievement from "./Sections/Achievements/Achievement";
import Skills from "./Sections/Skills/Skills"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Intro />
        <Education />
        <Achievement />
        <Skills/>
      </BrowserRouter>

    </div>
  );
}

export default App;
