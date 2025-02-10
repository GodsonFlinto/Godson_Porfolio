import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const[toggleMenu, setToggleMenu] = useState(false);
    return <header className="flex justify-between px-5 py-2 bg-primary text-red shadow-lg fixed top-0 left-0  w-full z-50">
        <a className="font-bold text-black" href="#">Godson Flinto J</a>
        <nav className="hidden md:block">
            <ul className="flex text-white ">
                <li className='hover:text-black'><a href="#">Home</a></li>
                <li className='hover:text-black'><a href="#about">About</a></li>
                <li className='hover:text-black'><a href="#projects">Projects</a></li>
                <li className='hover:text-black'><a href="#resume">Resume</a></li>
                <li className='hover:text-black'><a href="#certificates">Certificates</a></li>
                <li className='hover:text-black'><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        { toggleMenu && <nav className="block md:hidden  ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav fixed">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#certificates">Certificates</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav> }
        <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black h-5'></Bars3Icon></button>
    </header>
}