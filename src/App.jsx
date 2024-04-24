
import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Components/About'

const App = () => {
  return (
    <div className='page'>
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}

export default App