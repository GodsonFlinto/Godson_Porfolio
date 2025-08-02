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
import { useTheme } from './ThemeContext';

// Add Google Fonts
const GoogleFonts = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  </>
);

export default function Contact() {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const config = {
    gmail: "godsonflinto.it22@bitsathy.ac.in",
    email: "mailto:flintogodson@gmail.com",
    phone: "tel:8072017039",
    call: "8072017039",
    location: "Thoothukudi, Tamilnadu, India",
    sociallink: {
      gmail: "mailto:flintogodson@gmail.com",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/godson-flinto-j-516867267",
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <GoogleFonts />
      <section
        id="contact"
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

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold ${currentTheme.titleText} mb-6 tracking-tight`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
              Get In <span className={`${currentTheme.gradientText} italic`}>Touch</span>
            </h1>
            <div className={`w-32 h-1 ${currentTheme.gradientText} mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500`}></div>
          </div>

          {/* ------------ Mobile Layout ------------ */}
          <div className='md:hidden flex flex-col space-y-8'>
            {/* Contact Information */}
            <div className={`${currentTheme.skillCard} rounded-3xl p-6 shadow-lg border transition-all duration-500`}>
              <h2 className={`text-2xl font-bold ${currentTheme.titleText} mb-6 flex items-center gap-3 justify-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                <FiSend className={`${currentTheme.gradientText.includes('cyan') ? 'text-cyan-400' : 'text-teal-500'}`} size={24} />
                Contact Information
              </h2>
              
              <div className="space-y-4">
                {/* Email */}
                <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                  <div className={`bg-gradient-to-r ${currentTheme.gradientText.includes('cyan') ? 'from-cyan-500 to-blue-500' : 'from-teal-500 to-teal-600'} p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <FiMail className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`${currentTheme.titleText} font-semibold mb-1 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</h3>
                    <a 
                      href={config.email} 
                      className={`${currentTheme.bodyText} text-sm hover:text-cyan-400 transition-colors duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    >
                      {config.gmail}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                  <div className={`bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <FiPhoneCall className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`${currentTheme.titleText} font-semibold mb-1 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Phone</h3>
                    <a 
                      href={config.phone} 
                      className={`${currentTheme.bodyText} text-sm hover:text-green-400 transition-colors duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    >
                      {config.call}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                  <div className={`bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <FiMapPin className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`${currentTheme.titleText} font-semibold mb-1 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Location</h3>
                    <p className={`${currentTheme.bodyText} text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{config.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`${currentTheme.skillCard} rounded-3xl p-6 shadow-lg border transition-all duration-500`}>
              <h3 className={`text-xl font-bold ${currentTheme.titleText} mb-6 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Connect With Me</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentTheme.skillCard} p-3 rounded-xl ${currentTheme.titleText} border hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10`}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${currentTheme.skillCard} rounded-3xl p-6 shadow-lg border transition-all duration-500`}>
              <h2 className={`text-2xl font-bold ${currentTheme.titleText} mb-6 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  />
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  />
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  />
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2 text-sm`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r ${currentTheme.gradientText.includes('cyan') ? 'from-cyan-500 to-blue-500' : 'from-teal-500 to-teal-600'} text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300`}
                  style={{fontFamily: 'Josefin Sans, sans-serif'}}
                >
                  <FiSend size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* ------------ Desktop Layout ------------ */}
          <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-3">
              <div className={`${currentTheme.skillCard} rounded-3xl p-4 shadow-lg border transition-all duration-500`}>
                <h2 className={`text-3xl font-bold ${currentTheme.titleText} mb-8 flex items-center gap-3`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>
                  <FiSend className={`${currentTheme.gradientText.includes('cyan') ? 'text-cyan-400' : 'text-teal-500'}`} size={28} />
                  Contact Information
                </h2>
                
                <div className="space-y-3">
                  {/* Email */}
                  <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                    <div className={`bg-gradient-to-r ${currentTheme.gradientText.includes('cyan') ? 'from-cyan-500 to-blue-500' : 'from-teal-500 to-teal-600'} p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiMail className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</h3>
                      <a 
                        href={config.email} 
                        className={`${currentTheme.bodyText} hover:text-cyan-400 transition-colors duration-300`}
                        style={{fontFamily: 'Josefin Sans, sans-serif'}}
                      >
                        {config.gmail}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                    <div className={`bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiPhoneCall className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Phone</h3>
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
                  <div className={`flex items-start gap-4 p-4 rounded-2xl ${currentTheme.skillCard} transition-all duration-300 border hover:shadow-lg hover:scale-105 cursor-pointer group`}>
                    <div className={`bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                      <FiMapPin className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className={`${currentTheme.titleText} font-semibold mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Location</h3>
                      <p className={currentTheme.bodyText} style={{fontFamily: 'Josefin Sans, sans-serif'}}>{config.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className={`${currentTheme.skillCard} rounded-3xl p-6 shadow-lg border transition-all duration-500`}>
                <h3 className={`text-2xl font-bold ${currentTheme.titleText} mb-6 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Connect With Me</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${currentTheme.skillCard} p-4 rounded-2xl ${currentTheme.titleText} border hover:scale-110 hover:shadow-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10`}
                      title={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${currentTheme.skillCard} rounded-3xl p-4 shadow-lg border transition-all duration-500`}>
              <h2 className={`text-3xl font-bold ${currentTheme.titleText} mb-8 text-center`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    />
                  </div>
                  <div>
                    <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                      style={{fontFamily: 'Josefin Sans, sans-serif'}}
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  />
                </div>
                
                <div>
                  <label className={`block ${currentTheme.titleText} font-medium mb-2`} style={{fontFamily: 'Josefin Sans, sans-serif'}}>Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className={`w-full px-4 py-3 ${currentTheme.skillCard} border rounded-xl ${currentTheme.skillText} placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none`}
                    style={{fontFamily: 'Josefin Sans, sans-serif'}}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`w-full bg-gradient-to-r ${currentTheme.gradientText.includes('cyan') ? 'from-cyan-500 to-blue-500' : 'from-teal-500 to-teal-600'} text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300`}
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