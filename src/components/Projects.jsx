import React from 'react';
import { MdDescription } from 'react-icons/md';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from './ThemeContext';
import websiteImg from '../assets/project1.png';
import websiteImg2 from '../assets/project2.jpg';
import websiteImg3 from '../assets/project3.png';

// Add Google Fonts
const GoogleFonts = () => (
 <>
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
   <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
 </>
);

export default function Projects() {
 const { isDarkTheme, toggleTheme } = useTheme();

 const config = {
   projects: [
     {
       image: websiteImg,
       title: "Contact Management System",
       description: "A web-based platform for managing and accessing student and alumni contact information, designed to assist placement coordinators.",
       link: "https://github.com/GodsonFlinto/Contact-Management-System",
       tech: ['HTML', 'Laravel', 'MySQL'],
     },
     {
       image: websiteImg2,
       title: "Cric Store",
       description: "An e-commerce site tailored for cricket gear, allowing users to browse, select, and order sports equipment with Firebase-powered authentication.",
       link: "https://github.com/GodsonFlinto/cricketstore",
       tech: ['React', 'CSS', 'Firebase'],
     },
     {
       image: websiteImg3,
       title: "Haircut Booking System",
       description: "An intuitive web application for users to book haircut appointments, featuring user authentication, scheduling, and stylist management.",
       link: "https://github.com/GodsonFlinto/sheartime",
       tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
     }
   ]
 };

 // Theme configurations
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
   techTagBg: "bg-slate-700/50",
   techTagText: "text-cyan-400",
   techTagBorder: "border-cyan-400/20",
   techTagHover: "group-hover:bg-cyan-400/10 group-hover:border-cyan-400/40",
   linkColor: "text-cyan-400",
   linkHover: "hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600",
   linkBorder: "border-cyan-400/30",
   cardGlow: "bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5",
   cardShadow: "hover:shadow-cyan-500/25",
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
   techTagBg: "bg-[#129990]/10",
   techTagText: "text-[#129990]",
   techTagBorder: "border-[#129990]/30",
   techTagHover: "group-hover:bg-[#129990]/20 group-hover:border-[#129990]/50",
   linkColor: "text-[#129990]",
   linkHover: "hover:text-white hover:bg-gradient-to-r hover:from-[#129990] hover:to-[#0F7A6B]",
   linkBorder: "border-[#129990]/30",
   cardGlow: "bg-gradient-to-br from-[#129990]/5 via-transparent to-[#129990]/8",
   cardShadow: "hover:shadow-[#129990]/25",
 };

 const currentTheme = isDarkTheme ? darkTheme : lightTheme;

 return (
   <>
     <GoogleFonts />
     <section 
       id='projects' 
       className={`${currentTheme.background} px-3 sm:px-6 py-20 relative overflow-hidden min-h-screen flex items-center transition-all duration-300`}
       style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.backgroundStyle}}
     >
       {/* Theme Toggle Button */}
       <button
         onClick={toggleTheme}
         className={`fixed top-6 right-6 z-50 p-3 ${currentTheme.cardBg} backdrop-blur-sm rounded-full shadow-lg ${currentTheme.cardBorder} border transition-all duration-300 hover:scale-105 ${currentTheme.socialHover}`}
       >
         {isDarkTheme ? (
           <HiSun size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
         ) : (
           <HiMoon size={24} className={`${currentTheme.secondaryText} transition-colors duration-300`} />
         )}
       </button>

       <div className="w-full relative z-10 max-w-7xl mx-auto">
         {/* Title */}
         <div className="text-center mb-16">
           <h1 className={`text-5xl md:text-5xl font-bold ${currentTheme.primaryText} mb-4`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
             <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Projects</span>
           </h1>
           {/* <div className={`w-24 h-1 ${currentTheme.gradientText} mx-auto rounded-full`}></div> */}
         </div>

         {/* Project Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
           {config.projects.map((project, index) => (
             <div
               key={index}
               className={`group relative ${currentTheme.cardBg} backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border ${currentTheme.cardBorder} ${currentTheme.cardHoverBorder} transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${currentTheme.cardShadow}`}
             >
               {/* Card Glow Effect */}
               <div className={`absolute inset-0 ${currentTheme.cardGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
               
               {/* Image Container */}
               <div className="relative overflow-hidden">
                 <div className={`absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                 <img
                   src={project.image}
                   alt={project.title}
                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                 />
               </div>

               {/* Content */}
               <div className="p-6 relative z-10">
                 <h2 className={`text-xl font-bold ${currentTheme.primaryText} mb-3 transition-all duration-300`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                   {project.title}
                 </h2>
                 
                 <p className={`${currentTheme.secondaryText} text-sm leading-relaxed mb-4 transition-colors duration-300`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                   {project.description}
                 </p>

                 {/* Tech Stack Tags */}
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tech.map((tech, idx) => (
                     <span 
                       key={idx} 
                       className={`${currentTheme.techTagBg} ${currentTheme.techTagText} px-3 py-1 text-xs rounded-full border ${currentTheme.techTagBorder} ${currentTheme.techTagHover} transition-all duration-300`}
                       style={{fontFamily: 'Josefin Sans, sans-serif'}}
                     >
                       {tech}
                     </span>
                   ))}
                 </div>

                 {/* Project Link */}
                 {project.link && (
                   <a
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`inline-flex items-center gap-2 ${currentTheme.linkColor} font-semibold ${currentTheme.linkHover} px-4 py-2 rounded-full border ${currentTheme.linkBorder} hover:border-transparent transition-all duration-300 group-hover:shadow-lg ${currentTheme.cardShadow}`}
                     style={{fontFamily: 'Josefin Sans, sans-serif'}}
                   >
                     <MdDescription className="text-lg" />
                     Get Project
                   </a>
                 )}
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   </>
 );
}