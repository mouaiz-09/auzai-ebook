import './App.css';
import "./index.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
/*-------------Compontes------- */
import Homer from './Project/Compontes/Home';
import NavBar from './Project/Ui/NavBar';
/*-------------Compontes------- */

function App() {

return (
 <BrowserRouter>
  
  
  <div className='App'>
   
       <NavBar/>


       {/*------------------Routers----------- */}
           <Routes>

               <Route  path='/'  element={<Homer/>}></Route>
               <Route path="/about" element={<h1> this is about </h1>} />

           </Routes>
       {/*------------------Routers----------- */}
    </div>

  
 </BrowserRouter>
  );
}

export default App;
