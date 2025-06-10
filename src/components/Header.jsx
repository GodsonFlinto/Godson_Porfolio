import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Home, User, Briefcase, Mail, Award, TrophyIcon, GraduationCap } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { SiEducative } from 'react-icons/si';
import { RiCollageLine } from 'react-icons/ri';
import { WiDegrees } from 'react-icons/wi';

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [activeSection, setActiveSection] = useState('home');
 const { isDarkTheme, toggleTheme, currentTheme } = useTheme();

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
   }
 };

 const headerTheme = isDarkTheme ? headerThemes.dark : headerThemes.light;

 const navItems = [
   { id: 'hero', label: 'Home', icon: Home },
   { id: 'about', label: 'About', icon: User },
   { id: 'education', label: 'Education', icon: GraduationCap },
   { id: 'projects', label: 'Projects', icon: Briefcase },
   { id: 'achievements', label: 'Achievements', icon: TrophyIcon },
   { id: 'certificates', label: 'Certificates', icon: Award },
   { id: 'contact', label: 'Contact', icon: Mail },
 ];

 const scrollToSection = (sectionId) => {
   const element = document.getElementById(sectionId);
   if (element) {
     element.scrollIntoView({ behavior: 'smooth' });
     setActiveSection(sectionId);
     setIsMenuOpen(false);
   }
 };

 return (
   <>
     <header className={`fixed top-0 left-0 right-0 z-50 ${headerTheme.headerBg} border-b transition-all duration-300`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="flex items-center justify-between h-16">
           {/* Logo */}
           <div className="flex-shrink-0">
             <h1 className={`text-2xl font-bold italic ${headerTheme.gradientText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
               GF^
             </h1>
           </div>

           {/* Desktop Navigation */}
           <nav className="hidden md:flex items-center space-x-1">
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

           {/* Theme Toggle & Mobile Menu */}
           <div className="flex items-center space-x-4">
             {/* Theme Toggle Button */}
             
             {/* Mobile Menu Button */}
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className={`md:hidden p-2 rounded-lg ${headerTheme.headerText} ${headerTheme.headerTextHover} transition-colors duration-300`}
               aria-label="Toggle menu"
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>
         </div>
       </div>

       {/* Mobile Navigation */}
       {isMenuOpen && (
         <div className={`md:hidden ${headerTheme.mobileMenuBg} backdrop-blur-md border-t ${isDarkTheme ? 'border-slate-700/50' : 'border-[#129990]/20'}`}>
           <div className="px-4 pt-2 pb-4 space-y-2">
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
         </div>
       )}
     </header>

     {/* Spacer for fixed header */}
     {/* <div className="h-16"></div> */}
   </>
 );
};

export default Header;