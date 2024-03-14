import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from './components/home';
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />}></Route>
            </Routes>
         </BrowserRouter>


      </div>
   );
};

export default App;