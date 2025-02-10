import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Certificates from './components/Certificates'
import Contact from './components/contact'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Resume/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
