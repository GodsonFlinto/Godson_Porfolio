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

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

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
          className={`fixed top-6 right-6 z-50 p-3 ${currentTheme.imageContainer} rounded-full shadow-lg border transition-all duration-300 transform hover:scale-110`}
        >
          {isDarkTheme ? (
            <HiSun size={24} className={`${currentTheme.bodyText} transition-colors duration-300`} />
          ) : (
            <HiMoon size={24} className={`${currentTheme.bodyText} transition-colors duration-300`} />
          )}
        </button>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl animate-pulse`}></div>
          <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl animate-bounce`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg animate-ping`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl animate-pulse`} style={{animationDuration: '5s'}}></div>
        </div>

        {/* ------------ Mobile Layout ------------ */}
        <div className='md:hidden flex flex-col items-center relative z-10 max-w-4xl mx-auto w-full pb-6 pt-2'>
          {/* Image */}
          <div className="relative mb-4 -mt-12">
            {/* Multiple Glow Layers */}
            <div className={`absolute inset-0 ${currentTheme.imageGlow1} rounded-full blur-3xl scale-125 animate-pulse`}></div>
            <div className={`absolute inset-0 ${currentTheme.imageGlow2} rounded-full blur-2xl scale-110 animate-pulse`} style={{animationDelay: '1s'}}></div>
                         
            <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder1} rounded-full animate-spin`} style={{animationDuration: '15s'}}></div>
            <div className={`absolute inset-2 border ${currentTheme.imageBorder2} rounded-full animate-spin`} style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
                         
            <div className={`absolute -top-6 -left-6 w-4 h-4 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
            <div className={`absolute -top-4 -right-4 w-3 h-3 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
            <div className={`absolute -bottom-6 -right-6 w-5 h-5 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
            <div className={`absolute -bottom-4 -left-4 w-2 h-2 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
                         
            <div className={`relative ${currentTheme.imageContainer} rounded-full p-4 shadow-2xl border overflow-hidden`}>
              <div className={`absolute inset-0 ${currentTheme.imageInnerGlow1} rounded-full pointer-events-none`}></div>
              <img src={Heroimg} alt='Hero Illustration' className='w-full h-48 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110' />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full space-y-6 text-center">
            <h1 className={`${currentTheme.titleText} text-4xl font-bold leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              <span className={`block text-2xl font-light mb-2 ${currentTheme.bodyText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Hii,</span>
              I'm <span className={`${currentTheme.gradientText} italic`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {displayedText}
              </span>
            </h1>
            
            <p className={`text-xl ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              {config.subtitle}
            </p>

            {/* Social links */}
            <div className="flex gap-4 justify-center">
              <a 
                href={config.sociallink.gmail} 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiGmail size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiGithub size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-3 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiLinkedin size={24} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={openModal}
                className={`inline-flex items-center gap-3 px-8 py-4 text-lg font-bold text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 hover:shadow-cyan-500/25' : 'from-[#129990] via-[#0F7A6B] to-[#16A085] hover:from-[#16A085] hover:via-[#0F7A6B] hover:to-[#129990] hover:shadow-[#129990]/25'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group cursor-pointer`}
              >
                <span className="relative z-10" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: '600'}}>Resume</span>
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
              I'm <span className={`${currentTheme.gradientText} italic`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {displayedText}
              </span>
            </h1>
            
            <p className={`text-2xl lg:text-3xl ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              {config.subtitle}
            </p>

            {/* Social links */}
            <div className="flex gap-6">
              <a 
                href={config.sociallink.gmail} 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiGmail size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiGithub size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
              <a 
                href={config.sociallink.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`group relative p-4 ${currentTheme.skillCard} backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
              >
                <SiLinkedin size={28} className={`${currentTheme.skillText} transition-colors duration-300`} />
              </a>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={openModal}
                className={`inline-flex items-center gap-4 px-10 py-5 text-lg font-bold text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 via-blue-600 to-purple-600 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500 hover:shadow-cyan-500/25' : 'from-[#129990] via-[#0F7A6B] to-[#16A085] hover:from-[#16A085] hover:via-[#0F7A6B] hover:to-[#129990] hover:shadow-[#129990]/25'} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden group cursor-pointer`}
              >
                <span className="relative z-10" style={{fontFamily: 'Josefin Sans, sans-serif', fontWeight: '600'}}>Resume</span>
                <HiDownload className="text-2xl relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Image section */}
          <div className="w-1/2 flex justify-center animate-float">
            <div className="relative">
              {/* Multiple Layered Glow Effects */}
              <div className={`absolute inset-0 ${currentTheme.imageGlow3} rounded-full blur-3xl scale-125 animate-pulse`}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow4} rounded-full blur-2xl scale-115 animate-pulse`} style={{animationDelay: '1s'}}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow5} rounded-full blur-xl scale-105 animate-pulse`} style={{animationDelay: '2s'}}></div>
              
              {/* Animated Orbital Rings */}
              <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder3} rounded-full animate-spin`} style={{animationDuration: '20s'}}></div>
              <div className={`absolute inset-6 border ${currentTheme.imageBorder4} rounded-full animate-spin`} style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              <div className={`absolute inset-12 border ${currentTheme.imageBorder5} rounded-full animate-spin`} style={{animationDuration: '25s'}}></div>
              
              {/* Floating Particles */}
              <div className={`absolute -top-8 -left-8 w-6 h-6 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
              <div className={`absolute -top-4 -right-6 w-4 h-4 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
              <div className={`absolute -bottom-8 -right-8 w-8 h-8 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
              <div className={`absolute -bottom-6 -left-6 w-3 h-3 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
              <div className={`absolute top-1/4 -right-4 w-2 h-2 ${currentTheme.particle5} rounded-full animate-ping opacity-90`} style={{animationDelay: '2s'}}></div>
              <div className={`absolute bottom-1/4 -left-4 w-5 h-5 ${currentTheme.particle6} rounded-full animate-ping opacity-60`} style={{animationDelay: '2.5s'}}></div>
              
              <div className={`relative ${currentTheme.imageContainer} rounded-full p-10 shadow-2xl border overflow-hidden`}>
                {/* Inner magical glow */}
                <div className={`absolute inset-0 ${currentTheme.imageInnerGlow2} rounded-full pointer-events-none`}></div>
                <div className={`absolute top-4 left-4 w-16 h-16 ${currentTheme.imageInnerGlow3} rounded-full blur-xl pointer-events-none`}></div>
                <div className={`absolute bottom-4 right-4 w-20 h-20 ${currentTheme.imageInnerGlow4} rounded-full blur-2xl pointer-events-none`}></div>
                
                <img 
                  src={Heroimg} 
                  alt="Hero" 
                  className="w-full h-80 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110 saturate-110" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resume Modal - Fixed for both mobile and desktop */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            {/* Modal Content - Responsive with proper aspect ratio */}
            <div className={`relative ${currentTheme.sectionBg} rounded-xl sm:rounded-2xl shadow-2xl border w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl overflow-hidden animate-modal-in`}>
              {/* Modal Header */}
              <div className={`flex items-center justify-between p-3 sm:p-4 lg:p-6 border-b ${currentTheme.sectionBg}`}>
                <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold ${currentTheme.titleText} truncate pr-4`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                  Resume - Godson Flinto J
                </h2>
                <button
                  onClick={closeModal}
                  className={`p-2 ${currentTheme.skillCard} rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-110 border flex-shrink-0`}
                >
                  <HiX size={20} className={`${currentTheme.bodyText} sm:w-6 sm:h-6`} />
                </button>
              </div>
              
              {/* PDF Viewer Container - 9:16 aspect ratio for desktop, responsive for mobile */}
              <div className="relative">
                {/* Mobile: Full height approach */}
                <div className="block sm:hidden h-[70vh] overflow-auto bg-gray-50 dark:bg-gray-900">
                  <iframe
                    src={`${config.pdf}#view=FitV&zoom=page-width`}
                    className="w-full h-full border-0"
                    title="Resume PDF"
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
                
                {/* Desktop: 9:16 aspect ratio container */}
                <div className="hidden sm:block">
                  <div className="relative" style={{ paddingBottom: '177.78%' }}> {/* 16/9 = 1.777... so 100/1.777 = ~56.25% for 16:9, but we want 9:16 so it's 177.78% */}
                    <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
                      <iframe
                        src={`${config.pdf}#view=FitV&zoom=page-width`}
                        className="w-full h-full border-0"
                        title="Resume PDF"
                        loading="lazy"
                        allow="fullscreen"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className={`flex items-center justify-between p-3 sm:p-4 lg:p-6 border-t ${currentTheme.sectionBg} flex-wrap gap-2`}>
                <p className={`text-xs sm:text-sm ${currentTheme.bodyText} hidden sm:block`}>
                  Press <kbd className={`px-2 py-1 text-xs ${currentTheme.skillCard} rounded border`}>ESC</kbd> to close
                </p>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={closeModal}
                    className={`flex-1 sm:flex-none px-4 sm:px-6 py-2 ${currentTheme.skillCard} ${currentTheme.bodyText} rounded-lg border hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base`}
                  >
                    Close
                  </button>
                  <a
                    href={config.pdf}
                    download="Godson_Flinto_Resume.pdf"
                    className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 text-white bg-gradient-to-r ${isDarkTheme ? 'from-cyan-500 to-blue-600' : 'from-[#129990] to-[#16A085]'} rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-sm sm:text-base`}
                  >
                    <HiDownload size={16} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(0.5deg); }
            66% { transform: translateY(-5px) rotate(-0.5deg); }
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
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
            animation-delay: 1s;
          }
          
          .animate-modal-in {
            animation: modal-in 0.3s ease-out;
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
        `}</style>
      </section>
    </>
  );
}