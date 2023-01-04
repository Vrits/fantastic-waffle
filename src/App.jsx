import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Navbar";
import CekPenyakit from "./pages/CekPenyakit";
import DaftarPenyakit from "./pages/DaftarPenyakit";
import Home from "./pages/Home";
import PenyakitProvider from "./context/PenyakitProvider";

// const CekPenyakit = lazy(() => import('./pages/CekPenyakit'))

function App() {
  return (
    <>
      <PenyakitProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CekPenyakit" element={<CekPenyakit />}/>
          {/* <Route path="/CekPenyakit" element={<Suspense fallback={<CekPenyakit />} />} /> */}
          <Route path="/DaftarPenyakit" element={<DaftarPenyakit />} />
        </Routes>
      </PenyakitProvider>
    </>
  );
}

export default App;
