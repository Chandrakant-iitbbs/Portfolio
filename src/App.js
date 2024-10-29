import { BrowserRouter } from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import "./App.css"
import Intro from "./Sections/Introduction/Intro";
import Education from "./Sections/Education/Education";
import Achievement from "./Sections/Achievements/Achievement";
import Skills from "./Sections/Skills/Skills"
import Contact from "./Sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Intro />
        <Education />
        <Achievement />
        <Skills/>
        <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
