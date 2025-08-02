import { useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeContext'; // Adjust path as needed
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
  const { currentTheme, isDarkTheme, toggleTheme } = useTheme();
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

  // Extended theme configurations for certificates
  const certificateThemes = {
    dark: {
      // Card styles
      cardBg: 'bg-slate-800/70',
      cardBorder: 'border-slate-700/50 hover:border-cyan-400/50',
      cardShadow: 'hover:shadow-cyan-500/25',
      cardOverlay: 'bg-gradient-to-t from-slate-900/60 to-transparent',
      cardHoverOverlay: 'bg-gradient-to-t from-slate-900/20 to-transparent',
      cardTitleText: 'text-white',
      cardSubText: 'text-gray-300',
      // Modal styles
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
      // Card styles
      cardBg: 'bg-white/95',
      cardBorder: 'border-[#129990]/20 hover:border-[#129990]/50',
      cardShadow: 'hover:shadow-[#129990]/25',
      cardOverlay: 'bg-gradient-to-t from-white/60 to-transparent',
      cardHoverOverlay: 'bg-gradient-to-t from-white/20 to-transparent',
      cardTitleText: 'text-slate-800',
      cardSubText: 'text-slate-700',
      // Modal styles
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

  const certTheme = isDarkTheme ? certificateThemes.dark : certificateThemes.light;

  return (
    <>
      <GoogleFonts />
      <section 
        id="certificates" 
        className={`${currentTheme.sectionBg} px-6 py-24 relative overflow-hidden min-h-screen flex items-center transition-all duration-500`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-3 ${certTheme.cardBg} backdrop-blur-sm rounded-full shadow-lg ${certTheme.cardBorder} border transition-all duration-300 transform hover:scale-110 ${certTheme.socialHover}`}
        >
          {isDarkTheme ? (
            <HiSun size={24} className={`${certTheme.secondaryText} transition-colors duration-300`} />
          ) : (
            <HiMoon size={24} className={`${certTheme.secondaryText} transition-colors duration-300`} />
          )}
        </button>

        <div className="w-full relative z-10 max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-20">
            <h1 className={`text-5xl md:text-5xl font-bold ${currentTheme.titleText} mb-6 tracking-tight`}>
              <span className={`${currentTheme.gradientText}`}>Certificates</span>
            </h1>
            {/* <div className={`w-32 h-1 ${certTheme.dividerBg} mx-auto rounded-full`}></div> */}
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
                <div className={`relative ${certTheme.cardBg} backdrop-blur-xl rounded-3xl overflow-hidden border ${certTheme.cardBorder} transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${certTheme.cardShadow}`}>
                  
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
                      <div className={`absolute inset-0 ${certTheme.cardOverlay} z-10`}></div>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-65 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Floating Badge */}
                      <div className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} ${certTheme.badgeText} px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 group-hover:scale-110`}>
                        Certified
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 transition-all duration-300 ${hoveredIndex === index ? `text-transparent bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} bg-clip-text` : certTheme.cardTitleText}`}>
                          {cert.title}
                        </h3>
                        <p className={`text-lg font-medium ${certTheme.cardSubText}`}>
                          {cert.subtitle}
                        </p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className={`w-full ${certTheme.progressBg} rounded-full h-2`}>
                          <div className={`bg-gradient-to-r ${isDarkTheme ? cert.color : cert.lightColor} h-2 rounded-full transition-all duration-1000 group-hover:w-full`}
                               style={{width: hoveredIndex === index ? '100%' : '70%'}}></div>
                        </div>
                        <span className={`${currentTheme.bodyText} text-sm mt-2 block`}>Mastery Level</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 ${certTheme.cardHoverOverlay} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
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
                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${isDarkTheme ? certTheme.dotColors[index] : cert.lightColor} opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Modal */}
        {selectedCert && (
          <div className={`fixed inset-0 ${certTheme.modalBg} backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn`}>
            <div className={`relative ${certTheme.modalCard} backdrop-blur-xl rounded-3xl max-w-2xl md:max-w-4xl w-full max-h-[85vh] md:max-h-[90vh] overflow-auto border ${certTheme.modalBorder} shadow-2xl`}>
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className={`absolute top-4 right-4 md:top-6 md:right-6 z-10 w-8 h-8 md:w-10 md:h-10 ${certTheme.closeButtonBg} ${certTheme.closeButtonText} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border ${certTheme.closeButtonBorder} text-lg md:text-xl`}
              >
                ×
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                  {/* Image Section */}
                  <div className="relative order-2 md:order-1">
                    <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} opacity-20 rounded-2xl blur-xl`}></div>
                    <img
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      className={`w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10 border ${isDarkTheme ? 'border-slate-700/30' : 'border-[#129990]/20'}`}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4 md:space-y-6 order-1 md:order-2">
                    <div>
                      <h2 className={`text-2xl md:text-4xl font-bold mb-3 md:mb-4 ${certTheme.modalTitle} bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} bg-clip-text`}>
                        {selectedCert.title}
                      </h2>
                      <p className={`${certTheme.modalText} text-lg md:text-xl font-medium mb-4 md:mb-6`}>
                        {selectedCert.subtitle}
                      </p>
                    </div>

                    <div className="space-y-3 md:space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={`${certTheme.modalSubText} text-sm md:text-base`}>Professional Certification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={`${certTheme.modalSubText} text-sm md:text-base`}>Industry Recognized</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} rounded-full`}></div>
                        <span className={`${certTheme.modalSubText} text-sm md:text-base`}>Advanced Skill Level</span>
                      </div>
                    </div>

                    <div className="pt-4 md:pt-6">
                      {/* <button
                        onClick={() => setSelectedCert(null)}
                        className={`w-full md:w-auto px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r ${isDarkTheme ? selectedCert.color : selectedCert.lightColor} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isDarkTheme ? 'hover:shadow-cyan-500/25' : 'hover:shadow-[#129990]/25'} text-sm md:text-base`}
                      >
                        View Original Certificate
                      </button> */}
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