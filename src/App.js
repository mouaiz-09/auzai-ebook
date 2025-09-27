import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*-------------Compontes------- */
import Homer from './Project/Compontes/Home';
import NavBar from './Project/Ui/NavBar';
import Foter from './Project/Ui/Foter';
import Error from "./Project/Compontes/Error"
/*-------------Compontes------- */


function App() {

return (
 <BrowserRouter>
  

        <div className='App'>

                   <NavBar/>


                   {/*------------------Routers----------- */}
                       <Routes>

                           <Route  path='/'  element={< Homer/>}></Route>
                           <Route path="/Books" element={<h1> this is books </h1>} />
                           <Route path="/Noveles" element={<h1> this is Noveles </h1>} />
                           <Route path='*' element={<Error/>} ></Route>
 
                       </Routes>
                   {/*------------------Routers----------- */}
                 <Foter/>
         </div>
    

   
    
 </BrowserRouter>
  );
}

export default App;
