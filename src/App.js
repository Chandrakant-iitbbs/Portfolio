import { BrowserRouter} from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import "./App.css"
import Intro from "./Sections/Introduction/Intro";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Intro/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
