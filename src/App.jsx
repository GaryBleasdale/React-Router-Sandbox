import { useState } from 'react'
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


function App() {

  return (
    <Router>
      <ul>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
      </ul>
      <div>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <About/>}/>
          <Route path='/contact' element={ <Contact/>}/>
        </Routes>
      </div>
      </Router>
  )
}

export default App
