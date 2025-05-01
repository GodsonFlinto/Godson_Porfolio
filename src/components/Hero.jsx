import Heroimg from '../assets/hero.svg'
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
import ResumeImg from '../assets/resume.svg'
import { HiDownload } from 'react-icons/hi';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Hero(){
    const [toggleMenu, setToggleMenu] = useState(false);

    const config = {
        link:"https://pdflink.to/godresume3/",
        subtitle: "I'm a Front End Developer",
        sociallink: {
            gmail:"mailto:godsonflinto.it22@bitsathy.ac.in",
            github:"https://github.com/GodsonFlinto",
            linkedin:"https://www.linkedin.com/in/godson-flinto-j-516867267/"
        }
    }
    return <section className='flex flex-col md:flex-row px-6 py-40 bg-secondary justify-center bg-gray-900'> 
        <div className='md:w-1/2 flex flex-col py-16'>
        <h1 className='text-[white] text-6xl italic'>Hi <br/>I'm <span className='text-[#37C8B7] font-hero-font text-6xl italic'> Godson Flinto J</span>
        <p className='text-2xl text' >{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.sociallink.gmail} className='pr-4 text-[white] hover:text-[#37C8B7]'><SiGmail size={30} /></a>
            <a href={config.sociallink.github} target='_blank' className='pr-4 text-[white] hover:text-[#37C8B7]'><SiGithub size={30}/></a>
            <a href={config.sociallink.linkedin} target='_blank' className='pr-4 text-[white] hover:text-[#37C8B7]'><SiLinkedin size={30}/></a>
        </div>
        <div className="mt-2">
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
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden absolute top-6 left-6'>
                <Bars3Icon className='text-white h-6' />
            </button>

        <img size={30} className='md:w-1/3 py-4' src={Heroimg}/>
    </section>
}