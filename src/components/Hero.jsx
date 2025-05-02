import Heroimg from '../assets/hero.svg';
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import { HiDownload } from 'react-icons/hi';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Hero() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const config = {
    link: "https://pdflink.to/godresume3/",
    subtitle: "I'm a Front End Developer",
    sociallink: {
      gmail: "mailto:godsonflinto.it22@bitsathy.ac.in",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/godson-flinto-j-516867267/"
    }
  };

  return (
    <section className='bg-gray-900 px-4 sm:px-6 py-20 relative'>

      {/* Flex wrapper */}
      <div className='flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 max-w-6xl mx-auto px-4 pt-40'>
        
        {/* Text section */}
        <div className='w-full sm:w-1/2'>
          <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl italic leading-tight'>
            Hi <br />
            I'm <span className='text-[#37C8B7] font-hero-font'>Godson Flinto J</span>
          </h1>
          <p className='text-2xl mt-4 text-white'>{config.subtitle}</p>
          
          <div className='flex py-6'>
            <a href={config.sociallink.gmail} className='pr-4 text-white hover:text-[#37C8B7]'><SiGmail size={30} /></a>
            <a href={config.sociallink.github} target='_blank' className='pr-4 text-white hover:text-[#37C8B7]'><SiGithub size={30} /></a>
            <a href={config.sociallink.linkedin} target='_blank' className='pr-4 text-white hover:text-[#37C8B7]'><SiLinkedin size={30} /></a>
          </div>

          <div>
            <a
              className="flex items-center gap-2 w-fit px-6 py-2 text-sm text-white bg-[#37C8B7] hover:bg-[#166359] rounded-md transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              href={config.link}
            >
              Resume <HiDownload className="text-base" />
            </a>
          </div>
        </div>

        {/* Image section */}
        <div className='w-full sm:w-1/2 flex justify-center sm:justify-end'>
          <img className='w-64 sm:w-72 md:w-80 lg:w-96' src={Heroimg} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
