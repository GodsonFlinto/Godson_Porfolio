import React from 'react';
import { HiAcademicCap, HiLocationMarker, HiCalendar, HiStar } from 'react-icons/hi';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeContext';

// Add Google Fonts
const GoogleFonts = () => (
 <>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
   <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
 </>
);

export default function Education() {
 const { isDarkTheme, toggleTheme } = useTheme();

 // Education data - Separated HSC and SSLC
 const educationData = [
   {
     period: "2022 - 2026 (Pursuing)",
     institution: "BANNARI AMMAN INSTITUTE OF TECHNOLOGY",
     degree: "B-Tech Information Technology",
     cgpa: "8.51",
     icon: <HiAcademicCap size={32} />
   },
   {
     period: "2020 - 2021",
     institution: "DMNS DR. SIVANTHI ADITHANAR MATRIC. HR. SEC. SCHOOL",
     degree: "Higher Secondary Certificate (HSC)",
     percentage: "94%",
     icon: <HiAcademicCap size={32} />
   },
   {
     period: "2018 - 2019",
     institution: "DMNS DR. SIVANTHI ADITHANAR MATRIC. HR. SEC. SCHOOL",
     degree: "Secondary School Leaving Certificate (SSLC)",
     percentage: "91.8%",
     icon: <HiAcademicCap size={32} />
   }
 ];

 // Theme configurations (same as Hero component)
 const darkTheme = {
   background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
   backgroundStyle: {},
   primaryText: "text-white",
   secondaryText: "text-gray-300",
   cardBg: "bg-slate-800/70",
   cardBorder: "border-slate-700/50",
   cardHoverBorder: "hover:border-cyan-400/50",
   buttonBg: "bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600",
   buttonHover: "hover:from-purple-600 hover:via-blue-600 hover:to-cyan-500",
   socialHover: "hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-600/80",
   gradientText: "bg-gradient-to-r from-cyan-400 to-blue-500",
   glowColors: {
     primary: "from-cyan-400/40 to-blue-500/40",
     secondary: "from-purple-500/30 to-pink-500/30",
     tertiary: "from-indigo-500/10 to-purple-500/10"
   },
   // Background elements
   bgElement1: "bg-gradient-to-r from-cyan-400/40 to-blue-500/40",
   bgElement2: "bg-gradient-to-r from-purple-500/30 to-pink-500/30",
   bgElement3: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
   bgElement4: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
   // Card glow effects
   cardGlow1: "bg-gradient-to-r from-cyan-400/20 to-blue-500/20",
   cardGlow2: "bg-gradient-to-l from-purple-500/15 to-pink-500/15",
   // Floating particles
   particle1: "bg-cyan-400",
   particle2: "bg-blue-500",
   particle3: "bg-purple-500",
   particle4: "bg-pink-500",
   particle5: "bg-indigo-400",
   particle6: "bg-cyan-300",
   // Icon colors
   iconBg: "bg-gradient-to-br from-cyan-400/20 to-blue-500/20",
   iconColor: "text-cyan-400"
 };

 const lightTheme = {
   background: "bg-[#FFFBDE]",
   backgroundStyle: {
     background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
   },
   primaryText: "text-slate-800",
   secondaryText: "text-slate-700",
   cardBg: "bg-white/95",
   cardBorder: "border-[#129990]/20",
   cardHoverBorder: "hover:border-[#129990]/50",
   buttonBg: "bg-gradient-to-r from-[#129990] via-[#0F7A6B] to-[#16A085]",
   buttonHover: "hover:from-[#16A085] hover:via-[#0F7A6B] hover:to-[#129990]",
   socialHover: "hover:bg-gradient-to-r hover:from-[#129990]/10 hover:to-[#129990]/15",
   gradientText: "bg-gradient-to-r from-[#129990] to-[#0F7A6B]",
   glowColors: {
     primary: "from-[#129990]/30 to-[#0F7A6B]/30",
     secondary: "from-[#129990]/25 to-[#16A085]/25",
     tertiary: "from-[#129990]/20 to-[#1ABC9C]/20"
   },
   // Background elements with teal (#129990)
   bgElement1: "bg-[#129990]/20",
   bgElement2: "bg-[#129990]/15",
   bgElement3: "bg-[#129990]/10",
   bgElement4: "bg-[#129990]/25",
   // Card glow effects
   cardGlow1: "bg-[#129990]/25",
   cardGlow2: "bg-[#129990]/20",
   // Floating particles with teal variations
   particle1: "bg-[#129990]",
   particle2: "bg-[#0F7A6B]",
   particle3: "bg-[#16A085]",
   particle4: "bg-[#129990]",
   particle5: "bg-[#0E6B5C]",
   particle6: "bg-[#1ABC9C]",
   // Icon colors
   iconBg: "bg-gradient-to-br from-[#129990]/20 to-[#0F7A6B]/20",
   iconColor: "text-[#129990]"
 };

 const currentTheme = isDarkTheme ? darkTheme : lightTheme;

 return (
   <>
     <GoogleFonts />
     <section 
       id='education'
       className={`${currentTheme.background} px-3 sm:px-6 py-20 relative overflow-hidden min-h-screen transition-all duration-500`}
       style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.backgroundStyle}}
     >
       {/* Theme Toggle Button */}
       <button
         onClick={toggleTheme}
         className={`fixed top-6 right-6 z-50 p-3 ${currentTheme.cardBg} backdrop-blur-sm rounded-full shadow-lg ${currentTheme.cardBorder} border transition-all duration-300 transform hover:scale-110 ${currentTheme.socialHover}`}
       >
         {isDarkTheme ? (
           <HiSun size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
         ) : (
           <HiMoon size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
         )}
       </button>

       {/* Simple Static Background Elements - No Animation */}
       <div className="absolute inset-0 overflow-hidden">
         <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl opacity-20`}></div>
         <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl opacity-15`}></div>
         <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg opacity-15`}></div>
         <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl opacity-10`}></div>
       </div>

       {/* Static Floating Particles - No Animation */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className={`absolute top-20 left-20 w-3 h-3 ${currentTheme.particle1} rounded-full opacity-35`}></div>
         <div className={`absolute top-40 right-32 w-2 h-2 ${currentTheme.particle2} rounded-full opacity-40`}></div>
         <div className={`absolute bottom-40 left-32 w-4 h-4 ${currentTheme.particle3} rounded-full opacity-30`}></div>
         <div className={`absolute bottom-20 right-20 w-2 h-2 ${currentTheme.particle4} rounded-full opacity-45`}></div>
         <div className={`absolute top-1/2 left-10 w-3 h-3 ${currentTheme.particle5} rounded-full opacity-35`}></div>
         <div className={`absolute top-3/4 right-10 w-2 h-2 ${currentTheme.particle6} rounded-full opacity-40`}></div>
       </div>

       <div className="relative z-10 max-w-6xl mx-auto">
         {/* Section Title */}
         <div className="text-center mb-16">
           <h2 className={`text-4xl md:text-5xl font-bold ${currentTheme.primaryText} mb-4`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
             <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Education</span>
           </h2>
           {/* <div className={`w-24 h-1 ${currentTheme.gradientText} mx-auto rounded-full`}></div> */}
         </div>

         {/* Education Cards - Grid Layout for three cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {educationData.map((edu, index) => (
             <div 
               key={index}
               className={`group relative ${currentTheme.cardBg} backdrop-blur-xl rounded-2xl p-6 shadow-xl border ${currentTheme.cardBorder} ${currentTheme.cardHoverBorder} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden`}
             >
               {/* Static Card Glow Effects - No Animation */}
               <div className={`absolute inset-0 ${currentTheme.cardGlow1} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
               <div className={`absolute inset-0 ${currentTheme.cardGlow2} rounded-2xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
               
               <div className="relative z-10 space-y-4">
                 {/* Header with Icon and Period */}
                 <div className="flex items-center justify-between">
                   <div className={`p-3 ${currentTheme.iconBg} rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                     <div className={`${currentTheme.iconColor} text-2xl`}>
                       {edu.icon}
                     </div>
                   </div>
                   <div className="flex items-center gap-2">
                     <HiCalendar className={`${currentTheme.secondaryText} text-sm`} />
                     <span className={`${currentTheme.secondaryText} text-xs font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                       {edu.period}
                     </span>
                   </div>
                 </div>
                 
                 {/* Institution */}
                 <h3 className={`text-lg md:text-xl font-bold ${currentTheme.primaryText} leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                   {edu.institution}
                 </h3>
                 
                 {/* Degree */}
                 <div className="flex items-center gap-2">
                   <HiStar className={`${currentTheme.iconColor} text-sm`} />
                   <span className={`${currentTheme.secondaryText} text-sm font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                     {edu.degree}
                   </span>
                 </div>
                 
                 {/* Grades */}
                 <div className="space-y-2">
                   {edu.cgpa && (
                     <div className={`inline-block px-3 py-2 ${currentTheme.iconBg} rounded-lg backdrop-blur-sm border ${currentTheme.cardBorder}`}>
                       <span className={`${currentTheme.primaryText} font-bold text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                         CGPA: {edu.cgpa}
                       </span>
                     </div>
                   )}
                   
                   {edu.percentage && (
                     <div className={`inline-block px-3 py-2 ${currentTheme.iconBg} rounded-lg backdrop-blur-sm border ${currentTheme.cardBorder}`}>
                       <span className={`${currentTheme.primaryText} font-bold text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                         Score: {edu.percentage}
                       </span>
                     </div>
                   )}
                 </div>
               </div>
             </div>
           ))}
         </div>

         {/* Quote */}
         <div className="mt-16 text-center relative">
           {/* Quote Symbol */}
           <div className={`text-6xl ${currentTheme.iconColor} opacity-80 mb-4`} style={{fontFamily: 'serif'}}>
             "
           </div>
           <blockquote className={`text-lg font-medium ${currentTheme.primaryText} mb-2 -mt-8`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
             <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>
               Education is the most powerful weapon which you can use to change the world.
             </span>
           </blockquote>
           <div className={`text-sm ${currentTheme.secondaryText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
             — Nelson Mandela
           </div>
         </div>
       </div>

       <style jsx>{`
         /* Smooth transitions for all interactive elements */
         .group {
           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
         }
         
         /* Enhanced hover effects for education cards */
         .group:hover {
           transform: translateY(-8px) scale(1.05);
         }
         
         /* Icon hover effects */
         .group .group-hover\\:scale-110 {
           transition: transform 0.3s ease;
         }
         
         /* Glow effects on hover */
         .group:hover .opacity-0 {
           opacity: 0.3;
         }
         
         /* Theme toggle button hover */
         button:hover {
           transform: scale(1.1);
         }
       `}</style>
     </section>
   </>
 );
}