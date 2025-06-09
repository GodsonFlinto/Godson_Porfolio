import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  // Define your themes here
  const themes = {
    dark: {
      sectionBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      sectionStyle: {},
      bgElement1: 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20',
      bgElement2: 'bg-gradient-to-r from-purple-500/15 to-pink-500/15',
      bgElement3: 'bg-cyan-400/10',
      bgElement4: 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10',
      titleText: 'text-white',
      bodyText: 'text-gray-300',
      gradientText: 'text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text',
      imageGlow1: 'bg-gradient-to-r from-cyan-400/40 to-blue-500/40',
      imageGlow2: 'bg-gradient-to-l from-purple-500/30 to-pink-500/30',
      imageGlow3: 'bg-gradient-to-r from-cyan-400/50 to-blue-500/50',
      imageGlow4: 'bg-gradient-to-l from-purple-500/40 to-pink-500/40',
      imageGlow5: 'bg-gradient-to-tr from-indigo-500/30 to-cyan-400/30',
      imageBorder1: 'border-cyan-400/50',
      imageBorder2: 'border-purple-500/30',
      imageBorder3: 'border-cyan-400/40',
      imageBorder4: 'border-blue-500/30',
      imageBorder5: 'border-purple-500/20',
      imageContainer: 'bg-gradient-to-br from-slate-800/90 to-slate-700/80 backdrop-blur-xl border-cyan-400/20',
      imageInnerGlow1: 'bg-gradient-to-br from-cyan-400/5 to-transparent',
      imageInnerGlow2: 'bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/5',
      imageInnerGlow3: 'bg-gradient-to-br from-cyan-400/20 to-transparent',
      imageInnerGlow4: 'bg-gradient-to-br from-blue-500/15 to-transparent',
      particle1: 'bg-cyan-400',
      particle2: 'bg-blue-500',
      particle3: 'bg-purple-500',
      particle4: 'bg-pink-500',
      particle5: 'bg-indigo-400',
      particle6: 'bg-cyan-300',
      skillCard: 'bg-slate-800/70 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-600/80 border-slate-700/50 hover:border-cyan-400/50 hover:shadow-cyan-500/25',
      skillText: 'text-gray-300 group-hover:text-white'
    },
    light: {
      sectionBg: 'bg-[#FFFBDE]',
      sectionStyle: {
        background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
      },
      bgElement1: 'bg-[#129990]/20',
      bgElement2: 'bg-[#129990]/15',
      bgElement3: 'bg-[#129990]/10',
      bgElement4: 'bg-[#129990]/25',
      titleText: 'text-slate-800',
      bodyText: 'text-slate-700',
      gradientText: 'text-transparent bg-gradient-to-r from-[#129990] to-[#0F7A6B] bg-clip-text',
      imageGlow1: 'bg-[#129990]/30',
      imageGlow2: 'bg-[#129990]/25',
      imageGlow3: 'bg-[#129990]/35',
      imageGlow4: 'bg-[#129990]/30',
      imageGlow5: 'bg-[#129990]/20',
      imageBorder1: 'border-[#129990]/40',
      imageBorder2: 'border-[#129990]/30',
      imageBorder3: 'border-[#129990]/45',
      imageBorder4: 'border-[#129990]/35',
      imageBorder5: 'border-[#129990]/25',
      imageContainer: 'bg-white/90 backdrop-blur-xl border-[#129990]/30 shadow-[#129990]/20',
      imageInnerGlow1: 'bg-gradient-to-br from-[#129990]/15 to-transparent',
      imageInnerGlow2: 'bg-gradient-to-br from-[#129990]/10 via-transparent to-[#129990]/5',
      imageInnerGlow3: 'bg-gradient-to-br from-[#129990]/25 to-transparent',
      imageInnerGlow4: 'bg-gradient-to-br from-[#129990]/20 to-transparent',
      particle1: 'bg-[#129990]',
      particle2: 'bg-[#0F7A6B]',
      particle3: 'bg-[#16A085]',
      particle4: 'bg-[#129990]',
      particle5: 'bg-[#0E6B5C]',
      particle6: 'bg-[#1ABC9C]',
      skillCard: 'bg-white/95 backdrop-blur-sm hover:bg-gradient-to-r hover:from-[#129990]/10 hover:to-[#129990]/15 border-[#129990]/20 hover:border-[#129990]/50 hover:shadow-[#129990]/25',
      skillText: 'text-slate-700 group-hover:text-[#129990]'
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      isDarkTheme, 
      toggleTheme 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};