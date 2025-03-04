import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Footer from './components/Footer'
import Restaurant from './pages/Restaurant'

const App = () => {
  return (
    <div className='homepage'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/restaurant/:id' element={<Restaurant/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
