import Heroimg from '../assets/hero.svg'
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero(){
    const config = {
        subtitle: "I'm a Front End Developer",
        sociallink: {
            gmail:"mailto:godsonflinto.it22@bitsathy.ac.in",
            github:"https://github.com/GodsonFlinto",
            linkedin:"https://www.linkedin.com/in/godson-flinto-j-516867267/"
        }
    }
    return <section className='flex flex-col md:flex-row px-6 py-40 bg-secondary justify-center'> 
        <div className='md:w-1/2 flex flex-col py-16'>
        <h1 className=' text-6xl font-hero-font'>Hi <br/>I'm <span className='text-[#37C8B7]'> Godson Flinto J</span>
        <p className='text-2xl text' >{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href={config.sociallink.gmail} className='pr-4 hover:text-[#37C8B7]'><SiGmail size={30} /></a>
            <a href={config.sociallink.github} target='_blank' className='pr-4 hover:text-[#37C8B7]'><SiGithub size={30}/></a>
            <a href={config.sociallink.linkedin} target='_blank' className='pr-4 hover:text-[#37C8B7]'><SiLinkedin size={30}/></a>
        </div>
        </div>
        <img className='md:w-1/3 py-8' src={Heroimg}/>
    </section>
}