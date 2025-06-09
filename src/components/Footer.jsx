import React, { useState } from 'react';

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Footer() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Theme configurations
  const themes = {
    dark: {
      footerBg: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
      footerStyle: {},
      textColor: 'text-slate-300',
      borderColor: 'border-slate-700/50',
      gradientText: 'text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text',
      dotBg: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      decorationBg: 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent'
    },
    light: {
      footerBg: 'bg-[#FFFBDE]',
      footerStyle: {
        background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
      },
      textColor: 'text-slate-700',
      borderColor: 'border-[#129990]/20',
      gradientText: 'text-transparent bg-gradient-to-r from-[#129990] to-[#0F7A6B] bg-clip-text',
      dotBg: 'bg-gradient-to-r from-[#129990] to-[#0F7A6B]',
      decorationBg: 'bg-gradient-to-r from-transparent via-[#129990]/50 to-transparent'
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  return (
    <>
      <GoogleFonts />
      <footer 
        className={`${currentTheme.footerBg} py-4 border-t ${currentTheme.borderColor} relative`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.footerStyle}}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg"
        >
          {isDarkTheme ? (
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        <div className="max-w-6xl mx-auto px-6">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Copyright Section - Centered */}
            <div className="flex items-center justify-center gap-3">
              <div className={`w-2 h-2 ${currentTheme.dotBg} rounded-full animate-pulse`}></div>
              <p className={`${currentTheme.textColor} font-medium text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                &copy; 2025 <span className={`${currentTheme.gradientText} font-semibold`}>GodsonFlinto</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className={`absolute bottom-0 left-0 w-full h-px ${currentTheme.decorationBg}`}></div>
      </footer>
    </>
  );
}