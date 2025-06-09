import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Home, User, Briefcase, Mail, Award } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkTheme, toggleTheme, currentTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
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
      <header className={`fixed top-0 left-0 right-0 z-50 ${currentTheme.headerBg} border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold italic ${currentTheme.headerText} ${currentTheme.gradientText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                GF
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
                        ? currentTheme.navLinkActive 
                        : `${currentTheme.headerText} ${currentTheme.navLinkHover}`
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
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg ${currentTheme.themeButtonBg} border transition-all duration-300 shadow-sm hover:shadow-md`}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? (
                  <Sun size={20} className={currentTheme.themeButtonIcon} />
                ) : (
                  <Moon size={20} className={currentTheme.themeButtonIcon} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${currentTheme.headerText} ${currentTheme.headerTextHover} transition-colors duration-300`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden ${currentTheme.mobileMenuBg} backdrop-blur-md border-t ${currentTheme.headerBg.includes('slate') ? 'border-slate-700/50' : 'border-[#129990]/20'}`}>
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? currentTheme.navLinkActive 
                        : `${currentTheme.headerText} ${currentTheme.navLinkHover}`
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
      <div className="h-16"></div>
    </>
  );
};

export default Header;