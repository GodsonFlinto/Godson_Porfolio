import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import iot from '../assets/iot.jpg';
import python from '../assets/python.jpg';
import cprogram from '../assets/cpro.jpg';

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Certificates() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { 
      image: iot, 
      title: 'Internet of Things',
      subtitle: 'IoT Development',
      color: 'from-blue-500 to-cyan-400',
      lightColor: 'from-[#129990] to-[#16A085]'
    },
    { 
      image: python, 
      title: 'Python Programming',
      subtitle: 'Advanced Python',
      color: 'from-green-500 to-emerald-400',
      lightColor: 'from-[#0F7A6B] to-[#129990]'
    },
    { 
      image: cprogram, 
      title: 'C Programming',
      subtitle: 'System Programming',
      color: 'from-purple-500 to-pink-400',
      lightColor: 'from-[#16A085] to-[#1ABC9C]'
    },
  ];

  // Theme configurations matching Achievement component
  const themes = {
    dark: {
      sectionBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      sectionStyle: {},
      // Background elements
      bgElement1: 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20',
      bgElement2: 'bg-gradient-to-r from-purple-500/15 to-pink-500/15',
      bgElement3: 'bg-cyan-400/10',
      bgElement4: 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10',
      // Text colors
      titleText: 'text-white',
      subtitleText: 'text-gray-300',
      bodyText: 'text-gray-300',
      gradientText: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      cardTitleText: 'text-white',
      cardSubText: 'text-gray-300',
      // Cards
      cardBg: 'bg-slate-800/70',
      cardBorder: 'border-slate-700/50 hover:border-cyan-400/50',
      cardShadow: 'hover:shadow-cyan-500/25',
      cardOverlay: 'bg-gradient-to-t from-slate-900/60 to-transparent',
      cardHoverOverlay: 'bg-gradient-to-t from-slate-900/20 to-transparent',
      // Modal
      modalBg: 'bg-black/80',
      modalCard: 'bg-slate-800/95',
      modalBorder: 'border-slate-700/50',
      modalText: 'text-gray-300',
      modalSubText: 'text-gray-400',
      modalTitle: 'text-transparent',
      // Progress bar
      progressBg: 'bg-slate-700/50',
      // Buttons
      closeButtonBg: 'bg-slate-800/70 hover:bg-red-500/20',
      closeButtonBorder: 'border-slate-700/50 hover:border-red-500/50',
      closeButtonText: 'text-white',
      // Certificate badge
      badgeText: 'text-white',
      // Divider
      dividerBg: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      // Dots
      dotColors: ['from-cyan-400 to-blue-500', 'from-green-500 to-emerald-400', 'from-purple-500 to-pink-400'],
      // Theme toggle
      socialHover: 'hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-600/80',
      secondaryText: 'text-gray-300',
    },
    light: {
      sectionBg: 'bg-[#FFFBDE]',
      sectionStyle: {
        background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
      },
      // Background elements with teal
      bgElement1: 'bg-[#129990]/20',
      bgElement2: 'bg-[#129990]/15',
      bgElement3: 'bg-[#129990]/10',
      bgElement4: 'bg-[#129990]/25',
      // Text colors
      titleText: 'text-slate-800',
      subtitleText: 'text-slate-700',
      bodyText: 'text-slate-700',
      gradientText: 'bg-gradient-to-r from-[#129990] to-[#0F7A6B]',
      cardTitleText: 'text-slate-800',
      cardSubText: 'text-slate-700',
      // Cards
      cardBg: 'bg-white/95',
      cardBorder: 'border-[#129990]/20 hover:border-[#129990]/50',
      cardShadow: 'hover:shadow-[#129990]/25',
      cardOverlay: 'bg-gradient-to-t from-white/60 to-transparent',
      cardHoverOverlay: 'bg-gradient-to-t from-white/20 to-transparent',
      // Modal
      modalBg: 'bg-slate-900/60',
      modalCard: 'bg-white/95',
      modalBorder: 'border-[#129990]/30',
      modalText: 'text-slate-700',
      modalSubText: 'text-slate-600',
      modalTitle: 'text-transparent',
      // Progress bar
      progressBg: 'bg-[#129990]/20',
      // Buttons
      closeButtonBg: 'bg-white/70 hover:bg-red-500/20',
      closeButtonBorder: 'border-[#129990]/30 hover:border-red-500/50',
      closeButtonText: 'text-slate-800',
      // Certificate badge
      badgeText: 'text-white',
      // Divider
      dividerBg: 'bg-gradient-to-r from-[#129990] to-[#0F7A6B]',
      // Dots
      dotColors: ['from-[#129990] to-[#16A085]', 'from-[#0F7A6B] to-[#129990]', 'from-[#16A085] to-[#1ABC9C]'],
      // Theme toggle
      socialHover: 'hover:bg-gradient-to-r hover:from-[#129990]/10 hover:to-[#129990]/15',
      secondaryText: 'text-slate-700',
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  return (
    <>
      <GoogleFonts />
      <section 
        id="certificates" 
        className={`${currentTheme.sectionBg} px-6 py-24 relative overflow-hidden min-h-screen flex items-center transition-all duration-500`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
      >
        {/* Theme Toggle Button - Matching Achievement component */}
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className={`fixed top-6 right-6 z-50 p-3 ${currentTheme.cardBg} backdrop-blur-sm rounded-full shadow-lg ${currentTheme.cardBorder} border transition-all duration-300 transform hover:scale-110 ${currentTheme.socialHover}`}
        >
          {isDarkTheme ? (
            <HiSun size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
          ) : (
            <HiMoon size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
          )}
        </button>

        {/* Animated Background Elements - Matching Achievement component */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl animate-pulse`}></div>
          <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl animate-bounce`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg animate-ping`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl animate-pulse`} style={{animationDuration: '5s'}}></div>
        </div>

        <div className="w-full relative z-10 max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 className={`text-6xl md:text-5xl font-bold ${currentTheme.titleText} mb-6 tracking-tight`}>
              <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Certificates</span>
            </h1>
            <div className={`w-32 h-1 ${currentTheme.dividerBg} mx-auto rounded-full`}></div>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Main Card */}
                <div className={`relative ${currentTheme.cardBg} backdrop-blur-xl rounded-3xl overflow-hidden border ${currentTheme.cardBorder} transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${currentTheme.cardShadow}`}>
                  
                  {/* Animated Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl`}></div>
                  
                  {/* Border Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl p-px`}>
                    <div className={`w-full h-full ${isDarkTheme ? 'bg-slate-800' : 'bg-white'} rounded-3xl`}></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Image Container */}
                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                      <div className={`absolute inset-0 ${currentTheme.cardOverlay} z-10`}></div>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-65 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Floating Badge */}
                      <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} ${currentTheme.badgeText} px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                        Certified
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${hoveredIndex === index ? `text-transparent bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} bg-clip-text` : currentTheme.cardTitleText}`}>
                          {cert.title}
                        </h3>
                        <p className={`text-lg font-medium ${currentTheme.cardSubText}`}>
                          {cert.subtitle}
                        </p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className={`w-full ${currentTheme.progressBg} rounded-full h-2`}>
                          <div className={`bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} h-2 rounded-full transition-all duration-1000 group-hover:w-full`}
                               style={{width: hoveredIndex === index ? '100%' : '70%'}}></div>
                        </div>
                        <span className={`${currentTheme.bodyText} text-sm mt-2 block`}>Mastery Level</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 ${currentTheme.cardHoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
                </div>

                {/* Floating Elements */}
                <div className={`absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 animate-pulse`} style={{animationDelay: '0.5s'}}></div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-20">
            <p className={`${currentTheme.bodyText} text-lg font-light`}>
              Continuously expanding knowledge through professional development
            </p>
            <div className="flex justify-center items-center gap-4 mt-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${isDarkTheme ? currentTheme.dotColors[index] : cert.lightColor} opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className={`fixed inset-0 ${currentTheme.modalBg} backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn`}>
            <div className={`relative ${currentTheme.modalCard} backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-auto border ${currentTheme.modalBorder} shadow-2xl`}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-6 right-6 z-10 w-10 h-10 ${currentTheme.closeButtonBg} ${currentTheme.closeButtonText} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border ${currentTheme.closeButtonBorder}`}
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} opacity-20 rounded-2xl blur-xl`}></div>
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className={`w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10 border ${isDarkTheme ? 'border-slate-700/30' : 'border-[#129990]/20'}`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6">
                    <div>
                      <h2 className={`text-4xl font-bold mb-4 ${currentTheme.modalTitle} bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} bg-clip-text`}>
                        {selectedCert.title}
                      </h2>
                      <p className={`${currentTheme.modalText} text-xl font-medium mb-6`}>
                        {selectedCert.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={currentTheme.modalSubText}>Professional Certification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={currentTheme.modalSubText}>Industry Recognized</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={currentTheme.modalSubText}>Advanced Skill Level</span>
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => setSelectedCert(null)}
                        className={`px-8 py-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isDarkTheme ? 'hover:shadow-cyan-500/25' : 'hover:shadow-[#129990]/25'}`}
                      >
                        View Original Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Custom CSS for additional animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
          
          .group:hover .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}