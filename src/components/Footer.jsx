import React, { useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeContext'; // Adjust path as needed

// Add Google Fonts
const GoogleFonts = () => (
 <>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
   <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
 </>
);

export default function Footer() {
 const { currentTheme, isDarkTheme, toggleTheme } = useTheme();

 // Extended theme configurations for footer
 const footerThemes = {
   dark: {
     footerBg: 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900',
     borderColor: 'border-slate-700/50',
     textColor: 'text-slate-300',
     gradientText: 'text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text',
     dotBg: 'bg-gradient-to-r from-cyan-400 to-blue-500',
     decorationBg: 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent',
     toggleBg: 'bg-slate-800/70',
     toggleBorder: 'border-slate-700/50 hover:border-cyan-400/50',
     toggleText: 'text-gray-300',
     socialHover: 'hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-600/80',
   },
   light: {
     footerBg: 'bg-[#FFFBDE]',
     borderColor: 'border-[#129990]/20',
     textColor: 'text-slate-700',
     gradientText: 'text-transparent bg-gradient-to-r from-[#129990] to-[#0F7A6B] bg-clip-text',
     dotBg: 'bg-gradient-to-r from-[#129990] to-[#0F7A6B]',
     decorationBg: 'bg-gradient-to-r from-transparent via-[#129990]/50 to-transparent',
     toggleBg: 'bg-white/95',
     toggleBorder: 'border-[#129990]/20 hover:border-[#129990]/50',
     toggleText: 'text-slate-700',
     socialHover: 'hover:bg-gradient-to-r hover:from-[#129990]/10 hover:to-[#129990]/15',
   }
 };

 const footerTheme = isDarkTheme ? footerThemes.dark : footerThemes.light;

 return (
   <>
     <GoogleFonts />
     <footer 
       className={`${footerTheme.footerBg} py-4 border-t ${footerTheme.borderColor} relative transition-all duration-500`}
       style={{
         fontFamily: 'Josefin Sans, sans-serif',
         ...(isDarkTheme ? {} : { background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)' })
       }}
     >
       {/* Central Theme Toggle Button */}
       <button
         onClick={toggleTheme}
         className={`fixed top-6 right-6 z-50 p-3 ${footerTheme.toggleBg} backdrop-blur-sm rounded-full shadow-lg ${footerTheme.toggleBorder} border transition-all duration-300 transform hover:scale-110 ${footerTheme.socialHover}`}
       >
         {isDarkTheme ? (
           <HiSun size={24} className={`${footerTheme.toggleText} transition-colors duration-300`} />
         ) : (
           <HiMoon size={24} className={`${footerTheme.toggleText} transition-colors duration-300`} />
         )}
       </button>

       <div className="max-w-6xl mx-auto px-6">
         <div className="flex items-center justify-center gap-3">
           <div className={`w-2 h-2 ${footerTheme.dotBg} rounded-full animate-pulse`}></div>
           <p className={`${footerTheme.textColor} font-medium text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
             &copy; 2025 <span className={`${footerTheme.gradientText} font-semibold`}>GodsonFlinto</span>
           </p>
         </div>
       </div>

       <div className={`absolute bottom-0 left-0 w-full h-px ${footerTheme.decorationBg}`}></div>
     </footer>
   </>
 );
}