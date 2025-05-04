import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from "./components/Contact"
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      {/* Fixed Header & Mobile Menu */}
      <Header />

      {/* Main content: push below fixed header */}
      <main className="pt-20"> {/* Increased from pt-20 to pt-28 */}
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
