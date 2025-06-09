import React, { useState } from 'react';
import { HiSun, HiMoon, HiPlay } from 'react-icons/hi';
import { useTheme } from './ThemeContext';
import Flinto from '../assets/Flinto.mp4';
import CoverImage from '../assets/video-cover.jpg'; // Add your cover image here

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Achievement() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const cricketAchievement = {
    year: "2023",
    title: "VYUGAM 23 - Cricket Champion",
    description: "Secured 1st prize in the Inter-Department Cricket Tournament, showcasing Leadership, Teamwork, and Sportsmanship. Led the team to victory through strategic gameplay and exceptional coordination.",
    highlights: [
      "Team Captain & Leader",
      "Highest Individual Score",
      "Best Sportsmanship Award",
      "Tournament MVP"
    ]
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  // Theme configurations
  const themes = {
    dark: {
      sectionBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      sectionStyle: {},
      // Background elements
      bgElement1: 'bg-gradient-to-r from-cyan-400/20 to-blue-500/20',
      bgElement2: 'bg-gradient-to-r from-purple-500/15 to-pink-500/15',
      bgElement3: 'bg-cyan-400/10',
      bgElement4: 'bg-gradient-to-r from-indigo-500/10 to-purple-500/10',
      // Text colors
      titleText: 'text-white',
      bodyText: 'text-gray-300',
      gradientText: 'bg-gradient-to-r from-cyan-400 to-blue-500',
      // Achievement card
      achievementCard: 'bg-slate-800/70 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 hover:shadow-cyan-500/25',
      achievementYear: 'text-cyan-400',
      achievementTitle: 'text-white',
      achievementDesc: 'text-gray-300',
      // Highlights
      highlightCard: 'bg-slate-700/50 border-cyan-400/30 hover:border-cyan-400/50',
      highlightText: 'text-gray-200',
      // Video container
      videoContainer: 'bg-slate-800/90 backdrop-blur-xl border-cyan-400/30',
      videoGlow1: 'bg-gradient-to-r from-cyan-400/30 to-blue-500/30',
      videoGlow2: 'bg-gradient-to-l from-purple-500/25 to-pink-500/25',
      videoBorder1: 'border-cyan-400/40',
      videoBorder2: 'border-purple-500/30',
      // Floating particles
      particle1: 'bg-cyan-400',
      particle2: 'bg-blue-500',
      particle3: 'bg-purple-500',
      particle4: 'bg-pink-500',
      // Theme toggle
      cardBg: 'bg-slate-800/70',
      cardBorder: 'border-slate-700/50',
      socialHover: 'hover:bg-gradient-to-r hover:from-cyan-500/80 hover:to-blue-600/80',
      secondaryText: 'text-gray-300',
      // Play button
      playButton: 'bg-cyan-500/90 hover:bg-cyan-400 text-white',
      playButtonShadow: 'shadow-cyan-500/50',
    },
    light: {
      sectionBg: 'bg-[#FFFBDE]',
      sectionStyle: {
        background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
      },
      // Background elements with teal (#129990)
      bgElement1: 'bg-[#129990]/20',
      bgElement2: 'bg-[#129990]/15',
      bgElement3: 'bg-[#129990]/10',
      bgElement4: 'bg-[#129990]/25',
      // Text colors
      titleText: 'text-slate-800',
      bodyText: 'text-slate-700',
      gradientText: 'bg-gradient-to-r from-[#129990] to-[#0F7A6B]',
      // Achievement card
      achievementCard: 'bg-white/95 backdrop-blur-sm border-[#129990]/20 hover:border-[#129990]/50 hover:shadow-[#129990]/25',
      achievementYear: 'text-[#129990]',
      achievementTitle: 'text-slate-800',
      achievementDesc: 'text-slate-700',
      // Highlights
      highlightCard: 'bg-[#129990]/10 border-[#129990]/30 hover:border-[#129990]/50',
      highlightText: 'text-slate-700',
      // Video container
      videoContainer: 'bg-white/95 backdrop-blur-xl border-[#129990]/30 shadow-[#129990]/20',
      videoGlow1: 'bg-[#129990]/25',
      videoGlow2: 'bg-[#129990]/20',
      videoBorder1: 'border-[#129990]/35',
      videoBorder2: 'border-[#129990]/25',
      // Floating particles
      particle1: 'bg-[#129990]',
      particle2: 'bg-[#0F7A6B]',
      particle3: 'bg-[#16A085]',
      particle4: 'bg-[#1ABC9C]',
      // Theme toggle
      cardBg: 'bg-white/95',
      cardBorder: 'border-[#129990]/20',
      socialHover: 'hover:bg-gradient-to-r hover:from-[#129990]/10 hover:to-[#129990]/15',
      secondaryText: 'text-slate-700',
      // Play button
      playButton: 'bg-[#129990]/90 hover:bg-[#129990] text-white',
      playButtonShadow: 'shadow-[#129990]/50',
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  // Video Component with Cover Image
  const VideoWithCover = ({ isMobile = false }) => {
    const videoRef = React.useRef(null);
    const [showCover, setShowCover] = useState(true);

    const handlePlayClick = () => {
      setShowCover(false);
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    const handleVideoEnded = () => {
      setShowCover(true);
    };

    const handleVideoPaused = () => {
      setShowCover(true);
    };

    return (
      <div className="relative" style={{aspectRatio: '9/16', width: isMobile ? '100%' : '300px'}}>
        {/* Video Element */}
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover rounded-2xl shadow-2xl ${showCover ? 'invisible' : 'visible'}`}
          controls={!showCover}
          onEnded={handleVideoEnded}
          onPause={handleVideoPaused}
          poster={CoverImage}
        >
          <source src={Flinto} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Cover Image with Play Button */}
        {showCover && (
          <div className="absolute inset-0 cursor-pointer group" onClick={handlePlayClick}>
            <img 
              src={CoverImage} 
              alt="Video Cover" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              onError={(e) => {
                // Fallback to a gradient if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback gradient background */}
            <div 
              className={`w-full h-full object-cover rounded-2xl shadow-2xl ${currentTheme.gradientText} hidden`}
              style={{display: 'none'}}
            ></div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-start justify-end bg-black/20 rounded-2xl group-hover:bg-black/30 transition-all duration-300">
              <div className={`${currentTheme.playButton} ${currentTheme.playButtonShadow} p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300`}>
                <HiPlay size={isMobile ? 32 : 40} />
              </div>
            </div>
            
            {/* Video Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <h4 className="text-white font-semibold text-sm">
                  🏆 VYUGAM 23 - Cricket Championship Victory
                </h4>
                <p className="text-gray-200 text-xs mt-1">
                  Watch the highlights of our championship win
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <GoogleFonts />
      <section 
        id='achievement' 
        className={`${currentTheme.sectionBg} px-3 sm:px-6 py-20 relative overflow-hidden min-h-screen flex items-center transition-all duration-500`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
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

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-32 right-10 w-32 h-32 ${currentTheme.bgElement1} rounded-full blur-xl animate-pulse`}></div>
          <div className={`absolute bottom-20 left-16 w-40 h-40 ${currentTheme.bgElement2} rounded-full blur-2xl animate-bounce`} style={{animationDuration: '4s'}}></div>
          <div className={`absolute top-1/4 left-1/4 w-24 h-24 ${currentTheme.bgElement3} rounded-full blur-lg animate-ping`} style={{animationDuration: '3s'}}></div>
          <div className={`absolute top-1/2 right-1/3 w-28 h-28 ${currentTheme.bgElement4} rounded-full blur-2xl animate-pulse`} style={{animationDuration: '5s'}}></div>
        </div>

        {/* ------------ Mobile Layout ------------ */}
        <div className='lg:hidden flex flex-col items-center relative z-10 max-w-4xl mx-auto w-full space-y-8'>
          {/* Title */}
          <div className='text-center'>
            <h1 className={`text-4xl font-bold mb-4 ${currentTheme.titleText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              My <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Achievement</span>
            </h1>
            <div className={`w-24 h-1 ${currentTheme.gradientText} mx-auto rounded-full mb-6`}></div>
          </div>

          {/* Video Container */}
          <div className="relative w-full max-w-sm mx-auto">
            {/* Glow Effects */}
            <div className={`absolute inset-0 ${currentTheme.videoGlow1} rounded-3xl blur-2xl scale-110 animate-pulse`}></div>
            <div className={`absolute inset-0 ${currentTheme.videoGlow2} rounded-3xl blur-xl scale-105 animate-pulse`} style={{animationDelay: '1s'}}></div>
            
            {/* Floating Particles */}
            <div className={`absolute -top-4 -left-4 w-3 h-3 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
            <div className={`absolute -top-2 -right-2 w-2 h-2 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
            <div className={`absolute -bottom-4 -right-4 w-4 h-4 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
            <div className={`absolute -bottom-2 -left-2 w-2 h-2 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
            
            <div className={`relative ${currentTheme.videoContainer} rounded-3xl p-4 shadow-2xl border overflow-hidden`}>
              <VideoWithCover isMobile={true} />
            </div>
          </div>

          {/* Achievement Details */}
          <div className={`${currentTheme.achievementCard} rounded-3xl p-6 shadow-xl border transition-all duration-300 w-full`}>
            <div className="text-center space-y-4">
              <div className="text-6xl mb-4">🏆</div>
              <div className={`text-lg font-bold ${currentTheme.achievementYear}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {cricketAchievement.year}
              </div>
              <h3 className={`text-2xl font-bold ${currentTheme.achievementTitle}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {cricketAchievement.title}
              </h3>
              <p className={`text-base leading-relaxed ${currentTheme.achievementDesc} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                {cricketAchievement.description}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="w-full">
            <h3 className={`text-2xl font-bold mb-4 ${currentTheme.titleText} text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              Key <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Highlights</span>
            </h3>
            <div className={`w-20 h-1 ${currentTheme.gradientText} mx-auto rounded-full mb-6`}></div>
            <div className="grid grid-cols-2 gap-3">
              {cricketAchievement.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`${currentTheme.highlightCard} rounded-xl p-3 border transition-all duration-300 text-center`}
                >
                  <p className={`text-sm font-medium ${currentTheme.highlightText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------ Desktop Layout ------------ */}
        <div className='hidden lg:flex flex-row items-center justify-center gap-16 max-w-7xl mx-auto w-full relative z-10'>
          {/* Left Side - Achievement Details & Quotes */}
          <div className='w-3/5 space-y-8'>
            {/* Title */}
            <div>
              <h1 className={`text-5xl font-bold mb-4 ${currentTheme.titleText} leading-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Achievement</span>
              </h1>
           <div className={`w-24 h-1 ${currentTheme.gradientText} mx-auto rounded-full`}></div>
            </div>

            {/* Achievement Card */}
            <div className={`${currentTheme.achievementCard} rounded-3xl p-8 shadow-xl border transition-all duration-300 hover:scale-105`}>
              <div className="flex items-start space-x-6">
                <div className="text-8xl">🏆</div>
                <div className="flex-1 space-y-4">
                  <div className={`text-xl font-bold ${currentTheme.achievementYear}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    {cricketAchievement.year}
                  </div>
                  <h3 className={`text-3xl font-bold ${currentTheme.achievementTitle}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    {cricketAchievement.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${currentTheme.achievementDesc} font-medium`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                    {cricketAchievement.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${currentTheme.titleText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                Key <span className={`text-transparent ${currentTheme.gradientText} bg-clip-text`}>Highlights</span>
              </h3>
              <div className={`w-20 h-1 ${currentTheme.gradientText} rounded-full mb-6`}></div>
              <div className="grid grid-cols-2 gap-4">
                {cricketAchievement.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`${currentTheme.highlightCard} rounded-xl p-4 border transition-all duration-300 hover:scale-105 text-center`}
                  >
                    <p className={`text-base font-medium ${currentTheme.highlightText}`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Video */}
          <div className='w-2/5 flex justify-center animate-float'>
            <div className="relative">
              {/* Multiple Layered Glow Effects */}
              <div className={`absolute inset-0 ${currentTheme.videoGlow1} rounded-3xl blur-3xl scale-110 animate-pulse`}></div>
              <div className={`absolute inset-0 ${currentTheme.videoGlow2} rounded-3xl blur-2xl scale-105 animate-pulse`} style={{animationDelay: '1s'}}></div>
              
              {/* Animated Border Rings */}
              <div className={`absolute inset-0 border-2 ${currentTheme.videoBorder1} rounded-3xl animate-spin`} style={{animationDuration: '20s'}}></div>
              <div className={`absolute inset-4 border ${currentTheme.videoBorder2} rounded-3xl animate-spin`} style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              
              {/* Floating Particles */}
              <div className={`absolute -top-6 -left-6 w-4 h-4 ${currentTheme.particle1} rounded-full animate-ping opacity-70`}></div>
              <div className={`absolute -top-4 -right-4 w-3 h-3 ${currentTheme.particle2} rounded-full animate-ping opacity-60`} style={{animationDelay: '0.5s'}}></div>
              <div className={`absolute -bottom-6 -right-6 w-5 h-5 ${currentTheme.particle3} rounded-full animate-ping opacity-50`} style={{animationDelay: '1s'}}></div>
              <div className={`absolute -bottom-4 -left-4 w-2 h-2 ${currentTheme.particle4} rounded-full animate-ping opacity-80`} style={{animationDelay: '1.5s'}}></div>
              
              <div className={`relative ${currentTheme.videoContainer} rounded-3xl p-6 shadow-2xl border overflow-hidden`}>
                <VideoWithCover />
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