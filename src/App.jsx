import React from 'react'
import css from './styles/App.module.scss'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import AllCourses from './components/AlllCourses/AllCourses'
import Resourses from './components/Resources/Resourses'

const App = () => {
  return (
    <div>
      <allCourses/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses" element={<AllCourses/>} />
      <Route path="/resources" element={<Resourses/>} />


    </Routes>
    
  </div>
  );
};

export default App