import './App.css';
import React from 'react'
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Product from './Components/Product';
import Service from './Components/Service';
import {Context} from './Cart/Context'
import Register from './Components/Register';
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';

function App() {
   
  return <>
  <Context>
      <ToastContainer theme='colored'/>
     <Routes>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/service/:id' element={<Service/>}/>
        <Route exact path='/ContactUs' element={<Contact/>}/>
        <Route exact  path='/About' element={<About/>}/>        
       <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='Register' element={<Register/>}/>
        <Route path='*' element={<Home/>}/>
     </Routes>
     </Context>
  </>
}

export default App;
