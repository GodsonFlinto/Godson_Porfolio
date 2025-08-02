import React, { useState, useEffect } from 'react';
import Heroimg from '../assets/hero.svg';
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { HiDownload, HiSun, HiMoon, HiX } from 'react-icons/hi';
import { useTheme } from './ThemeContext'; // Import the theme hook
import resume from '../assets/godsonresume.pdf';

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { currentTheme, isDarkTheme, toggleTheme } = useTheme(); // Use theme context
  const fullText = "`Godson Flinto J`";

  const config = {
    pdf: resume,
    subtitle: "I'm a Front End Developer",
    sociallink: {
      gmail: "mailto:godsonflinto.it22@bitsathy.ac.in",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/godson-flinto-j-516867267/"
    }
  };

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
    }
  }, [currentIndex, fullText, isTypingComplete]);

  // Handle modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Check if device is mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  };

  // Handle resume viewing - show options modal on mobile, direct modal on desktop
  const handleResumeView = () => {
    openModal();
  };

  // Handle direct PDF view
  const handleDirectView = () => {
    window.open(config.pdf, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  // Handle download with error handling
  const handleDownload = () => {
    try {
      const link = document.createElement('a');
      link.href = config.pdf;
      link.download = 'Godson_Flinto_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeModal();
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(config.pdf, '_blank');
      closeModal();
    }
  };

  return (
    <>
      <GoogleFonts />
      <section 
        id='hero'
        className={`${currentTheme.sectionBg} px-3 sm:px-6 pt-24 md:pt-35 pb-20 relative overflow-hidden min-h-screen flex items-center transition-all duration-500`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-3 ${currentTheme.imageContainer} rounded-full shadow-lg border transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
          aria-label={isDarkTheme ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkTheme ? (
            <HiSun size={24} className={`${currentTheme.bodyText} transition-colors duration-300`} />
          ) : (
            <HiMoon size={24} className={`${currentTheme.bodyText} transition-colors duration-300`} />
          )}
        </button>

        {/* Optimized Background Elements - Slower, smoother animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl opacity-25 animate-pulse-slow`}></div>
          <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl opacity-20 animate-float-slow`}></div>
          <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg opacity-15 animate-pulse-slower`}></div>
          <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl opacity-18 animate-glow-soft`}></div>
        </div>

        {/* ------------ Mobile Layout ------------ */}
        <div className='md:hidden flex flex-col items-center relative z-10 max-w-4xl mx-auto w-full pb-6 pt-2'>
          {/* Image */}
          <div className="relative mb-4 -mt-12">
            {/* Optimized Glow Layers - Slower animations */}
            <div className={`absolute inset-0 ${currentTheme.imageGlow1} rounded-full blur-3xl scale-125 opacity-15 animate-glow-soft`}></div>
            <div className={`absolute inset-0 ${currentTheme.imageGlow2} rounded-full blur-2xl scale-110 opacity-20 animate-pulse-slow`}></div>
                         
            {/* Optimized Border Rings - Much slower rotation */}
            <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder1} rounded-full opacity-30 animate-spin-ultra-slow`}></div>
            <div className={`absolute inset-2 border ${currentTheme.imageBorder2} rounded-full opacity-20 animate-spin-reverse-ultra-slow`}></div>
                         
            {/* Optimized Particles - Slower, staggered animations */}
            <div className={`absolute -top-6 -left-6 w-4 h-4 ${currentTheme.particle1} rounded-full opacity-50 animate-ping-slow`}></div>
            <div className={`absolute -top-4 -right-4 w-3 h-3 ${currentTheme.particle2} rounded-full opacity-45 animate-ping-slower`}></div>
            <div className={`absolute -bottom-6 -right-6 w-5 h-5 ${currentTheme.particle3} rounded-full opacity-40 animate-ping-slowest`}></div>
            <div className={`absolute -bottom-4 -left-4 w-2 h-2 ${currentTheme.particle4} rounded-full opacity-60 animate-ping-slow`}></div>
                         
            <div className={`relative ${currentTheme.imageContainer} rounded-full p-4 shadow-2xl border overflow-hidden`}>
              <div className={`absolute inset-0 ${currentTheme.imageInnerGlow1} rounded-full pointer-events-none opacity-25 animate-glow-soft`}></div>
              <img 
                src={Heroimg} 
                alt='Godson Flinto J - Front End Developer' 
                className='w-full h-48 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110'
                loading="eager"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full space-y-6 text-center">
            <h1 className={`${currentTheme.titleText} text-4xl font-bold leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              <span className={`block text-2xl font-light mb-2 ${currentTheme.bodyText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Hii,</span>
              I'm <span className={`${currentTheme.gradientText} italic ${isTypingComplete ? 'animate-pulse' : ''}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {displayedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            
            <p className={`text-xl ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              {config.subtitle}
            </p>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
              <a 
                href={config.sociallink.gmail} 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Send email to Godson"
              >
                <SiGmail size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Visit Godson's GitHub profile"
              >
                <SiGithub size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Visit Godson's LinkedIn profile"
              >
                <SiLinkedin size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={handleResumeView}
                className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 hover:shadow-cyan-500/25' : 'from-[#129990] via-[#0F7A6B] to-[#16A085] hover:from-[#16A085] hover:via-[#0F7A6B] hover:to-[#129990] hover:shadow-[#129990]/25'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label={isMobile() ? "Open resume options" : "View resume"}
              >
                <span className="relative z-10" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: '600'}}>
                  Resume
                </span>
                <HiDownload className="text-xl relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* ------------ Desktop Layout ------------ */}
        <div className="hidden md:flex flex-row items-center justify-center gap-12 md:gap-20 max-w-7xl mx-auto w-full pb-16 relative z-10">
          {/* Text section */}
          <div className="w-1/2 space-y-8">
            <h1 className={`${currentTheme.titleText} text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              <span className={`block text-3xl sm:text-4xl lg:text-5xl font-light mb-2 ${currentTheme.bodyText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Hii,</span>
              I'm <span className={`${currentTheme.gradientText} italic ${isTypingComplete ? 'animate-pulse' : ''}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {displayedText}
                {!isTypingComplete && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            
            <p className={`text-2xl lg:text-3xl ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              {config.subtitle}
            </p>

            {/* Social links */}
            <div className="flex gap-6">
              <a 
                href={config.sociallink.gmail} 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Send email to Godson"
              >
                <SiGmail size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Visit Godson's GitHub profile"
              >
                <SiGithub size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label="Visit Godson's LinkedIn profile"
              >
                <SiLinkedin size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={handleResumeView}
                className={`inline-flex items-center gap-4 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 hover:shadow-cyan-500/25' : 'from-[#129990] via-[#0F7A6B] to-[#16A085] hover:from-[#16A085] hover:via-[#0F7A6B] hover:to-[#129990] hover:shadow-[#129990]/25'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label={isMobile() ? "Open resume options" : "View resume"}
              >
                <span className="relative z-10" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: '600'}}>
                  Resume
                </span>
                <HiDownload className="text-2xl relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="w-1/2 flex justify-center animate-float-gentle">
            <div className="relative">
              {/* Optimized Glow Effects - Slower animations */}
              <div className={`absolute inset-0 ${currentTheme.imageGlow3} rounded-full blur-3xl scale-125 opacity-15 animate-glow-soft`}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow4} rounded-full blur-2xl scale-115 opacity-20 animate-pulse-slow`}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow5} rounded-full blur-xl scale-105 opacity-18 animate-glow-softer`}></div>
              
              {/* Optimized Border Rings - Much slower rotation */}
              <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder3} rounded-full opacity-25 animate-spin-ultra-slow`}></div>
              <div className={`absolute inset-6 border ${currentTheme.imageBorder4} rounded-full opacity-20 animate-spin-reverse-ultra-slow`}></div>
              <div className={`absolute inset-12 border ${currentTheme.imageBorder5} rounded-full opacity-15 animate-spin-mega-slow`}></div>
              
              {/* Optimized Particles - Slower, staggered animations */}
              <div className={`absolute -top-8 -left-8 w-6 h-6 ${currentTheme.particle1} rounded-full opacity-50 animate-ping-slow`}></div>
              <div className={`absolute -top-4 -right-6 w-4 h-4 ${currentTheme.particle2} rounded-full opacity-45 animate-ping-slower`}></div>
              <div className={`absolute -bottom-8 -right-8 w-8 h-8 ${currentTheme.particle3} rounded-full opacity-40 animate-ping-slowest`}></div>
              <div className={`absolute -bottom-6 -left-6 w-3 h-3 ${currentTheme.particle4} rounded-full opacity-60 animate-ping-slow`}></div>
              <div className={`absolute top-1/4 -right-4 w-2 h-2 ${currentTheme.particle5} rounded-full opacity-70 animate-ping-slower`}></div>
              <div className={`absolute bottom-1/4 -left-4 w-5 h-5 ${currentTheme.particle6} rounded-full opacity-45 animate-ping-slowest`}></div>
              
              <div className={`relative ${currentTheme.imageContainer} rounded-full p-10 shadow-2xl border overflow-hidden`}>
                {/* Optimized inner glow - Slower animations */}
                <div className={`absolute inset-0 ${currentTheme.imageInnerGlow2} rounded-full pointer-events-none opacity-25 animate-glow-soft`}></div>
                <div className={`absolute top-4 left-4 w-16 h-16 ${currentTheme.imageInnerGlow3} rounded-full blur-xl pointer-events-none opacity-20 animate-glow-softer`}></div>
                <div className={`absolute bottom-4 right-4 w-20 h-20 ${currentTheme.imageInnerGlow4} rounded-full blur-2xl pointer-events-none opacity-15 animate-pulse-slow`}></div>
                
                <img 
                  src={Heroimg} 
                  alt="Godson Flinto J - Front End Developer" 
                  className="w-full h-80 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110 saturate-110" 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Modal - Adaptive for mobile and desktop */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
              aria-label="Close modal"
            ></div>
            
            {/* Mobile Options Modal */}
            {isMobile() ? (
              <div className={`relative ${currentTheme.sectionBg} rounded-xl shadow-2xl border w-full max-w-sm animate-modal-in mx-4`}>
                {/* Modal Header */}
                <div className={`flex items-center justify-between p-4 border-b ${currentTheme.sectionBg}`}>
                  <h2 className={`text-lg font-bold ${currentTheme.titleText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    Resume Options
                  </h2>
                  <button
                    onClick={closeModal}
                    className={`p-2 ${currentTheme.skillCard} rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    aria-label="Close modal"
                  >
                    <HiX size={20} className={`${currentTheme.bodyText}`} />
                  </button>
                </div>
                
                {/* Options */}
                <div className="p-6 space-y-4">
                  <button
                    onClick={handleDirectView}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 to-blue-600' : 'from-[#129990] to-[#16A085]'} rounded-xl hover:shadow-lg transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Resume
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 ${currentTheme.skillCard} ${currentTheme.bodyText} rounded-xl border hover:shadow-lg transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                  >
                    <HiDownload size={20} />
                    Download PDF
                  </button>
                </div>
              </div>
            ) : (
              /* Desktop Modal with PDF Viewer */
              <div className={`relative ${currentTheme.sectionBg} rounded-xl sm:rounded-2xl shadow-2xl border w-full max-w-4xl max-h-[90vh] overflow-hidden animate-modal-in`}>
                {/* Modal Header */}
                <div className={`flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b ${currentTheme.sectionBg}`}>
                  <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${currentTheme.titleText} truncate pr-4`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    Resume - Godson Flinto J
                  </h2>
                  <button
                    onClick={closeModal}
                    className={`p-2 ${currentTheme.skillCard} rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 border flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    aria-label="Close modal"
                  >
                    <HiX size={20} className={`${currentTheme.bodyText} sm:w-6 sm:h-6`} />
                  </button>
                </div>
                
                {/* PDF Viewer Container */}
                <div className="relative bg-gray-50 dark:bg-gray-900" style={{ height: '70vh' }}>
                  <iframe
                    src={`${config.pdf}#view=FitH&zoom=85&toolbar=1&navpanes=0&scrollbar=1`}
                    className="w-full h-full border-0"
                    title="Resume PDF - Godson Flinto J"
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
                
                {/* Modal Footer */}
                <div className={`flex items-center justify-between p-3 sm:p-4 lg:p-6 border-t ${currentTheme.sectionBg} flex-wrap gap-2`}>
                  <p className={`text-xs sm:text-sm ${currentTheme.bodyText} hidden sm:block`}>
                    Press <kbd className={`px-2 py-1 text-xs ${currentTheme.skillCard} rounded border`}>ESC</kbd> to close
                  </p>
                  <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                      onClick={closeModal}
                      className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 ${currentTheme.skillCard} ${currentTheme.bodyText} rounded-lg border hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                      Close
                    </button>
                    
                    <button
                      onClick={handleDownload}
                      className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 to-blue-600' : 'from-[#129990] to-[#16A085]'} rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                      <HiDownload size={16} />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <style>{`
          /* Optimized Animation Keyframes - Hardware Accelerated */
          @keyframes float-gentle {
            0%, 100% { 
              transform: translate3d(0, 0, 0) rotate(0deg); 
            }
            33% { 
              transform: translate3d(0, -8px, 0) rotate(0.3deg); 
            }
            66% { 
              transform: translate3d(0, -4px, 0) rotate(-0.3deg); 
            }
          }
          
          @keyframes float-slow {
            0%, 100% { 
              transform: translate3d(0, 0, 0); 
            }
            50% { 
              transform: translate3d(0, -6px, 0); 
            }
          }
          
          @keyframes pulse-slow {
            0%, 100% { 
              opacity: 0.6; 
            }
            50% { 
              opacity: 0.3; 
            }
          }
          
          @keyframes pulse-slower {
            0%, 100% { 
              opacity: 0.5; 
            }
            50% { 
              opacity: 0.2; 
            }
          }
          
          @keyframes glow-soft {
            0%, 100% { 
              opacity: 0.3; 
            }
            50% { 
              opacity: 0.1; 
            }
          }
          
          @keyframes glow-softer {
            0%, 100% { 
              opacity: 0.2; 
            }
            50% { 
              opacity: 0.05; 
            }
          }
          
          @keyframes spin-ultra-slow {
            from { 
              transform: rotate(0deg); 
            }
            to { 
              transform: rotate(360deg); 
            }
          }
          
          @keyframes spin-reverse-ultra-slow {
            from { 
              transform: rotate(360deg); 
            }
            to { 
              transform: rotate(0deg); 
            }
          }
          
          @keyframes spin-mega-slow {
            from { 
              transform: rotate(0deg); 
            }
            to { 
              transform: rotate(360deg); 
            }
          }
          
          @keyframes ping-slow {
            0% { 
              transform: scale(1); 
              opacity: 1; 
            }
            75%, 100% { 
              transform: scale(1.2); 
              opacity: 0; 
            }
          }
          
          @keyframes ping-slower {
            0% { 
              transform: scale(1); 
              opacity: 1; 
            }
            75%, 100% { 
              transform: scale(1.15); 
              opacity: 0; 
            }
          }
          
          @keyframes ping-slowest {
            0% { 
              transform: scale(1); 
              opacity: 1; 
            }
            75%, 100% { 
              transform: scale(1.1); 
              opacity: 0; 
            }
          }
          
          @keyframes modal-in {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          /* Apply optimized animations with performance-friendly durations */
          .animate-float-gentle {
            animation: float-gentle 8s ease-in-out infinite;
            animation-delay: 1s;
            will-change: transform;
          }
          
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
            will-change: transform;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
            will-change: opacity;
          }
          
          .animate-pulse-slower {
            animation: pulse-slower 5s ease-in-out infinite;
            will-change: opacity;
          }
          
          .animate-glow-soft {
            animation: glow-soft 6s ease-in-out infinite;
            will-change: opacity;
          }
          
          .animate-glow-softer {
            animation: glow-softer 7s ease-in-out infinite;
            will-change: opacity;
          }
          
          .animate-spin-ultra-slow {
            animation: spin-ultra-slow 30s linear infinite;
            will-change: transform;
          }
          
          .animate-spin-reverse-ultra-slow {
            animation: spin-reverse-ultra-slow 40s linear infinite;
            will-change: transform;
          }
          
          .animate-spin-mega-slow {
            animation: spin-mega-slow 50s linear infinite;
            will-change: transform;
          }
          
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
            will-change: transform, opacity;
          }
          
          .animate-ping-slower {
            animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
            will-change: transform, opacity;
          }
          
          .animate-ping-slowest {
            animation: ping-slowest 5s cubic-bezier(0, 0, 0.2, 1) infinite;
            will-change: transform, opacity;
          }
          
          .animate-modal-in {
            animation: modal-in 0.3s ease-out;
          }

          /* Performance optimizations */
          .animate-float-gentle,
          .animate-float-slow,
          .animate-spin-ultra-slow,
          .animate-spin-reverse-ultra-slow,
          .animate-spin-mega-slow {
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .animate-float-gentle,
            .animate-float-slow,
            .animate-pulse-slow,
            .animate-pulse-slower,
            .animate-glow-soft,
            .animate-glow-softer,
            .animate-spin-ultra-slow,
            .animate-spin-reverse-ultra-slow,
            .animate-spin-mega-slow,
            .animate-ping-slow,
            .animate-ping-slower,
            .animate-ping-slowest {
              animation: none;
            }
          }

          /* Ensure iframe is responsive and maintains aspect ratio */
          @media (max-width: 640px) {
            iframe {
              min-height: 500px;
            }
          }
          
          /* Hide scrollbars for cleaner look while maintaining functionality */
          .overflow-auto::-webkit-scrollbar {
            width: 6px;
          }
          
          .overflow-auto::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .overflow-auto::-webkit-scrollbar-thumb {
            background: rgba(156, 163, 175, 0.5);
            border-radius: 3px;
          }
          
          .overflow-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(156, 163, 175, 0.7);
          }

          /* Enhanced focus states for better accessibility */
          .focus\:ring-2:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
          
          /* Smooth transitions for all interactive elements */
          button, a {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          /* Improved hover effects */
          button:hover, a:hover {
            transform: translateY(-2px);
          }
          
          /* Better pulse animation for typing cursor */
          .animate-pulse {
            animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </section>
    </>
  );
}