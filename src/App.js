import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NavbarMain from "./Components/NavbarMain";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <NavbarMain/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
