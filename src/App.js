import { BrowserRouter} from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import "./App.css"
import Intro from "./Sections/Introduction/Intro";
import Education from "./Sections/Education/Education";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Intro/>
     <Education/> 
      </BrowserRouter>
     
    </div>
  );
}

export default App;
