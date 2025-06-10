import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Fixed Header */}
        <Header />

        {/* Main content: spacing below fixed header */}
        <main className="pt-22">
          <Hero />
          <About />
          <Education />
          <Projects />
          <Achievements />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
