import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Sections/Navbar/Navbar";
import "./App.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
