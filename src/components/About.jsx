import React, { useState } from 'react';
import AboutImg from '../assets/about.svg';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import javaLogo from '../assets/java.png';
import sqlLogo from '../assets/sql.png';
import reactLogo from '../assets/react.jpg';
import { useTheme } from './ThemeContext';

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function About() {
  const { currentTheme } = useTheme(); // Only get currentTheme from context

  const config = {
    about1:
      'A passionate and hardworking B-Tech graduate in Information Technology from Bannari Amman Institute of Technology, seeking an opportunity to utilize my skills and knowledge to contribute to the growth of a dynamic organization.',
    about2:
      "I am proficient in Frontend skills like React.js, HTML, CSS. I'm also proficient in video editing. I have good knowledge in SQL.",
  };

  const skills = [
    { name: 'HTML', img: htmlLogo },
    { name: 'CSS', img: cssLogo },
    { name: 'JavaScript', img: jsLogo },
    { name: 'Java', img: javaLogo },
    { name: 'React', img: reactLogo },
    { name: 'SQL', img: sqlLogo }
  ];

  // Theme configurations
  


  return (
    <>
      <GoogleFonts />
      <section 
        id='about' 
        className={`${currentTheme.sectionBg} px-3 sm:px-6 py-20 relative overflow-hidden min-h-screen flex items-center`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
      >
        

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl animate-pulse`}></div>
          <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl animate-bounce`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg animate-ping`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl animate-pulse`} style={{animationDuration: '5s'}}></div>
        </div>

        {/* ------------ Mobile Layout ------------ */}
        <div className='md:hidden flex flex-col items-center relative z-10 max-w-4xl mx-auto w-full'>
          {/* About Me */}
          <div className='mb-8 text-center'>
            <h1 className={`text-4xl font-bold mb-6 ${currentTheme.titleText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              About <span className={currentTheme.gradientText}>Me</span>
            </h1>
            <p className={`text-lg leading-relaxed ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{config.about1}</p>
          </div>

          {/* Image */}
          <div className="relative mb-8">
            {/* Multiple Glow Layers */}
            <div className={`absolute inset-0 ${currentTheme.imageGlow1} rounded-3xl blur-3xl scale-125 animate-pulse`}></div>
            <div className={`absolute inset-0 ${currentTheme.imageGlow2} rounded-3xl blur-2xl scale-110 animate-pulse`} style={{animationDelay: '1s'}}></div>
            
            {/* Animated Border Ring */}
            <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder1} rounded-3xl animate-spin`} style={{animationDuration: '15s'}}></div>
            <div className={`absolute inset-2 border ${currentTheme.imageBorder2} rounded-3xl animate-spin`} style={{animationDuration: '20s', animationDirection: 'reverse'}}></div>
            
            {/* Floating Particles */}
            <div className={`absolute -top-6 -left-6 w-4 h-4 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
            <div className={`absolute -top-4 -right-4 w-3 h-3 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
            <div className={`absolute -bottom-6 -right-6 w-5 h-5 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
            <div className={`absolute -bottom-4 -left-4 w-2 h-2 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
            
            <div className={`relative ${currentTheme.imageContainer} rounded-3xl p-8 shadow-2xl border overflow-hidden`}>
              {/* Inner glow effect */}
              <div className={`absolute inset-0 ${currentTheme.imageInnerGlow1} rounded-3xl pointer-events-none`}></div>
              <img src={AboutImg} alt='About Illustration' className='w-full h-64 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110' />
            </div>
          </div>

          {/* Skills */}
          <div className='w-full'>
            <h2 className={`text-3xl font-bold mb-6 ${currentTheme.titleText} text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              My <span className={currentTheme.gradientText}>Skills</span>
            </h2>
            <div className='grid grid-cols-3 gap-4'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col items-center justify-center ${currentTheme.skillCard} rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
                >
                  <img src={skill.img} alt={skill.name} className='h-10 w-8 mb-2 group-hover:scale-110 transition-transform duration-300 filter brightness-110' />
                  <p className={`text-sm text-center font-medium ${currentTheme.skillText} transition-colors duration-300`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------ Desktop Layout ------------ */}
        <div className='hidden md:flex flex-row items-center justify-center gap-12 md:gap-20 max-w-7xl mx-auto w-full pb-16 relative z-10'>
          {/* Image */}
          <div className='w-1/2 flex justify-center animate-float'>
            <div className="relative">
              {/* Multiple Layered Glow Effects */}
              <div className={`absolute inset-0 ${currentTheme.imageGlow3} rounded-3xl blur-3xl scale-125 animate-pulse`}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow4} rounded-3xl blur-2xl scale-115 animate-pulse`} style={{animationDelay: '1s'}}></div>
              <div className={`absolute inset-0 ${currentTheme.imageGlow5} rounded-3xl blur-xl scale-105 animate-pulse`} style={{animationDelay: '2s'}}></div>
              
              {/* Animated Orbital Rings */}
              <div className={`absolute inset-0 border-2 ${currentTheme.imageBorder3} rounded-full animate-spin`} style={{animationDuration: '20s'}}></div>
              <div className={`absolute inset-6 border ${currentTheme.imageBorder4} rounded-full animate-spin`} style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              <div className={`absolute inset-12 border ${currentTheme.imageBorder5} rounded-full animate-spin`} style={{animationDuration: '25s'}}></div>
              
              {/* Floating Particles */}
              <div className={`absolute -top-8 -left-8 w-6 h-6 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
              <div className={`absolute -top-4 -right-6 w-4 h-4 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
              <div className={`absolute -bottom-8 -right-8 w-8 h-8 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
              <div className={`absolute -bottom-6 -left-6 w-3 h-3 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
              <div className={`absolute top-1/4 -right-4 w-2 h-2 ${currentTheme.particle5} rounded-full animate-ping opacity-90`} style={{animationDelay: '2s'}}></div>
              <div className={`absolute bottom-1/4 -left-4 w-5 h-5 ${currentTheme.particle6} rounded-full animate-ping opacity-60`} style={{animationDelay: '2.5s'}}></div>
              
              <div className={`relative ${currentTheme.imageContainer} rounded-3xl p-10 shadow-2xl border overflow-hidden`}>
                {/* Inner magical glow */}
                <div className={`absolute inset-0 ${currentTheme.imageInnerGlow2} rounded-3xl pointer-events-none`}></div>
                <div className={`absolute top-4 left-4 w-16 h-16 ${currentTheme.imageInnerGlow3} rounded-full blur-xl pointer-events-none`}></div>
                <div className={`absolute bottom-4 right-4 w-20 h-20 ${currentTheme.imageInnerGlow4} rounded-full blur-2xl pointer-events-none`}></div>
                
                <img src={AboutImg} alt='About Illustration' className='w-full h-80 object-contain relative z-10 drop-shadow-2xl filter brightness-110 contrast-110 saturate-110' />
              </div>
            </div>
          </div>

          {/* About + Skills */}
          <div className='w-1/2 space-y-8'>
            <div>
              <h1 className={`text-5xl font-bold mb-6 ${currentTheme.titleText} leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                About <span className={`${currentTheme.gradientText} italic`}>Me</span>
              </h1>
              <p className={`text-xl leading-relaxed ${currentTheme.bodyText} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{config.about1}</p>
            </div>

            {/* Skills */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${currentTheme.titleText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                My <span className={currentTheme.gradientText}>Skills</span>
              </h2>
              <div className='grid grid-cols-3 gap-6'>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group relative flex flex-col items-center justify-center ${currentTheme.skillCard} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 border`}
                  >
                    <img src={skill.img} alt={skill.name} className='h-12 w-10 mb-3 group-hover:scale-110 transition-transform duration-300 filter brightness-110' />
                    <p className={`text-sm font-medium ${currentTheme.skillText} transition-colors duration-300`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-10px) rotate(0.5deg); }
            66% { transform: translateY(-5px) rotate(-0.5deg); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
            animation-delay: 1s;
          }
        `}</style>
      </section>
    </>
  );
}