import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*-------------Compontes------- */
import Homer from "./Project/Compontes/Home";
import NavBar from "./Project/Ui/NavBar";
import Foter from "./Project/Ui/Foter";
import Error from "./Project/Compontes/Error";
import Books from "./Project/Compontes/Books";
import { Show } from "./Project/Compontes/Show";
import Noveles from "./Project/Compontes/Novels";
import Aboutus from "./Project/Compontes/Abou-us";
import { useEffect } from "react";
/*-------------Compontes------- */

function App() {
 
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        {/*------------------Routers----------- */}
        <Routes>
          <Route path="/" element={<Homer />}></Route>
          <Route path="/Books" element={<Books />} />
          <Route path="/Noveles" element={<Noveles />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/Show/:id" element={<Show />} />
          <Route path="*" element={<Error />}></Route>
        </Routes>
        {/*------------------Routers----------- */}
        <Foter />
      </div>
    </BrowserRouter>
  );
}

export default App;
