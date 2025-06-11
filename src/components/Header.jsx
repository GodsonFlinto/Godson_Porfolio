import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Briefcase, Mail, Award, TrophyIcon, GraduationCap } from 'lucide-react';
import { useTheme } from './ThemeContext';
import profile from '../assets/godson.jpg';

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [activeSection, setActiveSection] = useState('hero');
 const { isDarkTheme, toggleTheme, currentTheme } = useTheme();

 // Enhanced scroll detection
 useEffect(() => {
   const handleScroll = () => {
     const sections = ['hero', 'about', 'education', 'projects', 'achievements', 'certificates', 'contact'];
     const scrollPosition = window.scrollY + 100; // Offset for header height

     for (let i = sections.length - 1; i >= 0; i--) {
       const element = document.getElementById(sections[i]);
       if (element && element.offsetTop <= scrollPosition) {
         setActiveSection(sections[i]);
         break;
       }
     }
   };

   window.addEventListener('scroll', handleScroll, { passive: true });
   handleScroll(); // Check initial position
   
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 // Extended theme configurations for header
 const headerThemes = {
   dark: {
     headerBg: 'bg-slate-900/95 backdrop-blur-md border-slate-700/50',
     headerText: 'text-slate-300',
     headerTextHover: 'hover:text-white',
     gradientText: 'text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text',
     navLinkActive: 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border border-cyan-400/30',
     navLinkHover: 'hover:bg-slate-800/50 hover:text-white',
     themeButtonBg: 'bg-slate-800/70 border-slate-700/50 hover:border-cyan-400/50',
     themeButtonIcon: 'text-gray-300',
     mobileMenuBg: 'bg-slate-900/95',
     logoText: 'text-white',
     profileRing: 'ring-cyan-400/50',
     sidebarBg: 'bg-slate-900/98',
     sidebarBorder: 'border-slate-700/50',
   },
   light: {
     headerBg: 'bg-white/95 backdrop-blur-md border-[#129990]/20',
     headerText: 'text-slate-700',
     headerTextHover: 'hover:text-slate-900',
     gradientText: 'text-transparent bg-gradient-to-r from-[#129990] to-[#0F7A6B] bg-clip-text',
     navLinkActive: 'bg-gradient-to-r from-[#129990]/20 to-[#0F7A6B]/20 text-slate-900 border border-[#129990]/30',
     navLinkHover: 'hover:bg-[#129990]/10 hover:text-slate-900',
     themeButtonBg: 'bg-white/70 border-[#129990]/30 hover:border-[#129990]/50',
     themeButtonIcon: 'text-slate-700',
     mobileMenuBg: 'bg-white/95',
     logoText: 'text-slate-900',
     profileRing: 'ring-[#129990]/50',
     sidebarBg: 'bg-white/98',
     sidebarBorder: 'border-[#129990]/20',
   }
 };

 const headerTheme = isDarkTheme ? headerThemes.dark : headerThemes.light;

 const navItems = [
   { id: 'hero', label: 'Home', icon: Home },
   { id: 'about', label: 'About', icon: User },
   { id: 'education', label: 'Education', icon: GraduationCap },
   { id: 'projects', label: 'Projects', icon: Briefcase },
   { id: 'achievement', label: 'Achievements', icon: TrophyIcon },
   { id: 'certificates', label: 'Certificates', icon: Award },
   { id: 'contact', label: 'Contact', icon: Mail },
 ];

 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId);
   if (element) {
     const headerOffset = 80;
     const elementPosition = element.offsetTop;
     const offsetPosition = elementPosition - headerOffset;

     window.scrollTo({
       top: offsetPosition,
       behavior: 'smooth'
     });
     
     setActiveSection(sectionId);
     setIsMenuOpen(false);
   }
 };

 // Profile photo component - replace src with your actual photo
 const ProfilePhoto = ({ size = "w-10 h-10" }) => (
   <div className={`${size} rounded-full ring-2 ${headerTheme.profileRing} overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0`}>
     <img 
       src={profile} // Replace with your photo path
       alt="Profile" 
       className="w-full h-full object-cover"
       onError={(e) => {
         // Fallback if image fails to load
         e.target.style.display = 'none';
         e.target.parentNode.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-bold text-lg">GF</div>';
       }}
     />
   </div>
 );

 return (
   <>
     <header className={`fixed top-0 left-0 right-0 z-50 ${headerTheme.headerBg} border-b transition-all duration-300`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
           {/* Mobile Menu Button - Left Side */}
           <button
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className={`md:hidden p-2 rounded-lg ${headerTheme.headerText} ${headerTheme.headerTextHover} transition-colors duration-300`}
             aria-label="Toggle menu"
           >
             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
           </button>

           {/* Logo with Profile Photo - Desktop Left */}
           <div className="hidden md:flex items-center space-x-3">
             <ProfilePhoto />
             <h1 className={`text-2xl font-bold italic ${headerTheme.gradientText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
               GF^
             </h1>
           </div>

           {/* Logo with Profile Photo - Mobile Center */}
           <div className="md:hidden flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
             <ProfilePhoto size="w-8 h-8" />
             <h1 className={`text-xl font-bold italic ${headerTheme.gradientText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
               GF^
             </h1>
           </div>

           {/* Desktop Navigation */}
           <nav className="mr-20 hidden md:flex items-center space-x-1">
             {navItems.map((item) => {
               const Icon = item.icon;
               return (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                     activeSection === item.id 
                       ? headerTheme.navLinkActive 
                       : `${headerTheme.headerText} ${headerTheme.navLinkHover}`
                   }`}
                   style={{fontFamily: 'Josefin Sans, sans-serif'}}
                 >
                   <Icon size={18} />
                   <span className="font-medium">{item.label}</span>
                 </button>
               );
             })}
           </nav>

           {/* Theme Toggle Button - Right Side */}
           {/* <button
             onClick={toggleTheme}
             className={`p-2 rounded-lg border transition-all duration-300 ${headerTheme.themeButtonBg}`}
             aria-label="Toggle theme"
           >
             {isDarkTheme ? (
               <Sun size={20} className={headerTheme.themeButtonIcon} />
             ) : (
               <Moon size={20} className={headerTheme.themeButtonIcon} />
             )}
           </button> */}
         </div>
       </div>
     </header>

     {/* Mobile Sidebar Navigation */}
     {isMenuOpen && (
       <>
         {/* Backdrop */}
         <div 
           className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
           onClick={() => setIsMenuOpen(false)}
         />
         
         {/* Sidebar */}
         <div className={`fixed top-0 left-0 h-full w-64 ${headerTheme.sidebarBg} backdrop-blur-md border-r ${headerTheme.sidebarBorder} z-50 md:hidden transform transition-transform duration-300 ease-in-out`}>
           {/* Sidebar Header */}
           <div className="flex items-center justify-between p-4 border-b border-current border-opacity-20">
             <div className="flex items-center space-x-3">
               <ProfilePhoto />
               <h1 className={`text-xl font-bold italic ${headerTheme.gradientText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                 GF^
               </h1>
             </div>
             <button
               onClick={() => setIsMenuOpen(false)}
               className={`p-2 rounded-lg ${headerTheme.headerText} ${headerTheme.headerTextHover} transition-colors duration-300`}
             >
               <X size={20} />
             </button>
           </div>

           {/* Sidebar Navigation */}
           <div className="pt-4 pb-4 space-y-2 px-4">
             {navItems.map((item) => {
               const Icon = item.icon;
               return (
                 <button
                   key={item.id}
                   onClick={() => scrollToSection(item.id)}
                   className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                     activeSection === item.id 
                       ? headerTheme.navLinkActive 
                       : `${headerTheme.headerText} ${headerTheme.navLinkHover}`
                   }`}
                   style={{fontFamily: 'Josefin Sans, sans-serif'}}
                 >
                   <Icon size={20} />
                   <span className="font-medium">{item.label}</span>
                 </button>
               );
             })}
           </div>

           {/* Theme Toggle in Sidebar */}
           <div className="absolute bottom-4 left-4 right-4">
             <button
               onClick={toggleTheme}
               className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg border transition-all duration-300 ${headerTheme.themeButtonBg}`}
               style={{fontFamily: 'Josefin Sans, sans-serif'}}
             >
               {isDarkTheme ? (
                 <Sun size={20} className={headerTheme.themeButtonIcon} />
               ) : (
                 <Moon size={20} className={headerTheme.themeButtonIcon} />
               )}
               <span className={`font-medium ${headerTheme.headerText}`}>
                 {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
               </span>
             </button>
           </div>
         </div>
       </>
     )}

     {/* Spacer for fixed header */}
     <div className="h-16"></div>
   </>
 );
};

export default Header;