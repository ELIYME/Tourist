import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './component/About' 
import Home from './component/Home'
import Service from './component/Service'
import Contact from './component/Contact'



const App = () => {
  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Routes>
       </Router>
    </>
 
    
  )
}
export default App

