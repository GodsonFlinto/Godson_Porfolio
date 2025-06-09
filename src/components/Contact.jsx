import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiWhatsapp,
  SiFacebook
} from "react-icons/si";

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Contact() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const config = {
    gmail: "godsonflinto.it22@bitsathy.ac.in",
    email: "mailto:flintogodson@gmail.com",
    phone: "tel:8072017039",
    call: "8072017039",
    location: "Bilimora, Gujarat, India",
    sociallink: {
      gmail: "mailto:flintogodson@gmail.com",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/your-link-here",
      whatsapp: "https://wa.me/918072017039",
      instagram: "https://instagram.com/godsonflinto3",
      facebook: "https://facebook.com/"
    }
  };

  const socialLinks = [
    { icon: SiGithub, href: config.sociallink.github, label: "GitHub" },
    { icon: SiLinkedin, href: config.sociallink.linkedin, label: "LinkedIn" },
    { icon: SiWhatsapp, href: config.sociallink.whatsapp, label: "WhatsApp" },
    { icon: SiInstagram, href: config.sociallink.instagram, label: "Instagram" },
    { icon: SiFacebook, href: config.sociallink.facebook, label: "Facebook" }
  ];

  // Theme configurations
  const themes = {
    dark: {
      sectionBg: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
      sectionStyle: {},
      // Background elements
      bgElement1: 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10',
      bgElement2: 'bg-gradient-to-r from-purple-500/8 to-pink-500/8',
      // Text colors
      titleText: 'text-white',
      bodyText: 'text-slate-400',
      gradientText: 'text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text',
      // Cards
      cardBg: 'bg-slate-900/50 border-slate-800/50 hover:border-slate-700/50',
      cardHover: 'hover:bg-slate-800/50',
      // Form elements
      inputBg: 'bg-slate-800/50 border-slate-700/50',
      inputText: 'text-white placeholder-slate-400',
      inputFocus: 'focus:border-cyan-400 focus:ring-cyan-400/20',
      // Social icons
      socialBg: 'bg-slate-800/50 hover:bg-slate-700/50',
      socialHover: 'group-hover:from-cyan-400/20 group-hover:to-blue-500/20',
      // Contact info gradients
      emailGradient: 'from-cyan-500 to-blue-500',
      phoneGradient: 'from-green-500 to-emerald-500',
      locationGradient: 'from-purple-500 to-pink-500',
      // Button
      buttonGradient: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
      buttonShadow: 'hover:shadow-cyan-500/25'
    },
    light: {
      sectionBg: 'bg-[#FFFBDE]',
      sectionStyle: {
        background: 'linear-gradient(135deg, #FFFBDE 0%, #FFF8D1 50%, #FFFBDE 100%)'
      },
      // Background elements with teal (#129990)
      bgElement1: 'bg-[#129990]/15',
      bgElement2: 'bg-[#129990]/10',
      // Text colors
      titleText: 'text-slate-800',
      bodyText: 'text-slate-600',
      gradientText: 'text-transparent bg-gradient-to-r from-[#129990] to-[#0F7A6B] bg-clip-text',
      // Cards
      cardBg: 'bg-white/95 border-[#129990]/20 hover:border-[#129990]/40',
      cardHover: 'hover:bg-[#129990]/5',
      // Form elements
      inputBg: 'bg-white/80 border-[#129990]/20',
      inputText: 'text-slate-800 placeholder-slate-500',
      inputFocus: 'focus:border-[#129990] focus:ring-[#129990]/20',
      // Social icons
      socialBg: 'bg-white/80 hover:bg-[#129990]/10',
      socialHover: 'group-hover:from-[#129990]/15 group-hover:to-[#129990]/10',
      // Contact info gradients
      emailGradient: 'from-[#129990] to-[#0F7A6B]',
      phoneGradient: 'from-[#16A085] to-[#1ABC9C]',
      locationGradient: 'from-[#129990] to-[#16A085]',
      // Button
      buttonGradient: 'from-[#129990] to-[#0F7A6B] hover:from-[#0F7A6B] hover:to-[#129990]',
      buttonShadow: 'hover:shadow-[#129990]/25'
    }
  };

  const currentTheme = isDarkTheme ? themes.dark : themes.light;

  return (
    <>
      <GoogleFonts />
      <section
        id="contact"
        className={`${currentTheme.sectionBg} py-24 px-6 flex flex-col items-center relative overflow-hidden`}
        style={{fontFamily: 'Josefin Sans, sans-serif', ...currentTheme.sectionStyle}}
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

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-12 w-72 h-72 ${currentTheme.bgElement1} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute bottom-32 left-20 w-80 h-80 ${currentTheme.bgElement2} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl md:text-5xl font-bold ${currentTheme.titleText} mb-6 tracking-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              Get In <span className={`${currentTheme.gradientText} italic`}>Touch</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`${currentTheme.cardBg} backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500`}>
                <h2 className={`text-3xl font-bold ${currentTheme.titleText} mb-8 flex items-center gap-3`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                  <FiSend className="text-cyan-400" size={28} />
                  Contact Information
                </h2>
                
                <div className="space-y-2">
                  {/* Email */}
                  <div className={`group flex items-start gap-4 p-4 rounded-2xl ${currentTheme.cardHover} transition-all duration-300`}>
                    <div className={`bg-gradient-to-r ${currentTheme.emailGradient} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiMail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-1`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</h3>
                      <a 
                        href={config.email} 
                        className={`${currentTheme.bodyText} hover:text-cyan-400 transition-colors duration-300 break-words`}
                        style={{fontFamily: 'Josefin Sans, sans-serif'}}
                      >
                        {config.gmail}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={`group flex items-start gap-4 p-4 rounded-2xl ${currentTheme.cardHover} transition-all duration-300`}>
                    <div className={`bg-gradient-to-r ${currentTheme.phoneGradient} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiPhoneCall className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-1`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Phone</h3>
                      <a 
                        href={config.phone} 
                        className={`${currentTheme.bodyText} hover:text-green-400 transition-colors duration-300`}
                        style={{fontFamily: 'Josefin Sans, sans-serif'}}
                      >
                        {config.call}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={`group flex items-start gap-4 p-4 rounded-2xl ${currentTheme.cardHover} transition-all duration-300`}>
                    <div className={`bg-gradient-to-r ${currentTheme.locationGradient} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiMapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-1`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Location</h3>
                      <p className={currentTheme.bodyText} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{config.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`${currentTheme.cardBg} backdrop-blur-xl rounded-3xl p-7 border transition-all duration-500`}>
                <h3 className={`text-2xl font-bold ${currentTheme.titleText} mb-6 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Connect With Me</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group relative ${currentTheme.socialBg} p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${currentTheme.titleText}`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${currentTheme.socialHover} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${currentTheme.cardBg} backdrop-blur-xl rounded-3xl p-8 border transition-all duration-500`}>
              <h2 className={`text-3xl font-bold ${currentTheme.titleText} mb-8 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Send Message</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 ${currentTheme.inputBg} border rounded-xl ${currentTheme.inputText} focus:outline-none ${currentTheme.inputFocus} focus:ring-2 transition-all duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    />
                  </div>
                  <div>
                    <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 ${currentTheme.inputBg} border rounded-xl ${currentTheme.inputText} focus:outline-none ${currentTheme.inputFocus} focus:ring-2 transition-all duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Subject</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className={`w-full px-4 py-3 ${currentTheme.inputBg} border rounded-xl ${currentTheme.inputText} focus:outline-none ${currentTheme.inputFocus} focus:ring-2 transition-all duration-300`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  />
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Message</label>
                  <textarea
                    rows="5"
                    placeholder="Your message..."
                    className={`w-full px-4 py-3 ${currentTheme.inputBg} border rounded-xl ${currentTheme.inputText} focus:outline-none ${currentTheme.inputFocus} focus:ring-2 transition-all duration-300 resize-none`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r ${currentTheme.buttonGradient} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${currentTheme.buttonShadow} flex items-center justify-center gap-3`}
                  style={{fontFamily: 'Josefin Sans, sans-serif'}}
                >
                  <FiSend size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}