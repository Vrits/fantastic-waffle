import { Routes,Route } from "react-router-dom";
import Nav from "./components/Nav/Navbar";
import CekPenyakit from "./pages/CekPenyakit";
import DaftarPenyakit from "./pages/DaftarPenyakit";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/CekPenyakit" element={<CekPenyakit />}/>
      <Route path="/DaftarPenyakit" element={<DaftarPenyakit />}/>
    </Routes>
    </>
  );
}

export default App;
