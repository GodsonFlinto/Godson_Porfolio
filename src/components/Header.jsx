import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md px-5 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-[#37C8B7]">GF</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-5 text-base font-medium text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-[#37C8B7] hover:underline underline-offset-4 transition-all duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button onClick={() => setToggleMenu(!toggleMenu)} className="md:hidden focus:outline-none">
          <Bars3Icon className="text-white h-6 w-6" />
        </button>
      </header>

      {/* Mobile Menu Dropdown */}
      {toggleMenu && (
        <nav className="fixed top-16 left-0 right-0 z-40 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md px-4 py-6">
          <ul className="flex flex-col justify-center items-center gap-4 text-[#37C8B7] font-semibold">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setToggleMenu(false)}
                  className="text-lg hover:text-white transition-all duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
