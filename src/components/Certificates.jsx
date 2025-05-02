import { useState, useEffect } from 'react';
import iot from '../assets/iot.jpg';
import python from '../assets/python.jpg';
import cprogram from '../assets/cpro.jpg';

export default function Certificates() {
  const certificates = [
    { image: iot, title: 'INTERNET OF THINGS' },
    { image: python, title: 'PYTHON PROGRAMMING' },
    { image: cprogram, title: 'C PROGRAMMING' },
  ];

  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % certificates.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);

  useEffect(() => {
    const timer = setInterval(next, 1500);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section id="certificates" className="bg-gray-900 py-16 text-white text-center">
      <h1 className="text-4xl font-bold mb-10 border-b-4 border-[#37C8B7] inline-block">
        Certificates
      </h1>

      <div className="flex items-center justify-center gap-4 mt-10 px-4 sm:px-0 flex-wrap">
        {certificates.map((cert, index) => {
          const isActive = index === current;
          const isPrev = index === (current - 1 + certificates.length) % certificates.length;
          const isNext = index === (current + 1) % certificates.length;

          return (
            <div
              key={index}
              className={`
                transition-all duration-500 rounded-xl backdrop-blur-lg bg-white/10 border border-white/20
                ${isActive ? 'scale-100 opacity-100 border-2 border-[#808080] shadow-[0_4px_10px_rgba(55,200,183,0.6)]' : ''}
                ${(isPrev || isNext) ? 'hidden sm:block scale-90 opacity-40' : ''}
                ${!isActive && !isPrev && !isNext ? 'hidden' : ''}
                w-full sm:w-auto sm:max-w-none max-w-xs
              `}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
              />
              {isActive && (
                <h2 className="mt-3 text-xl font-semibold italic px-2 pb-3">
                  {cert.title}
                </h2>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {certificates.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === current ? 'bg-[#37C8B7]' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-6 flex justify-center items-center gap-5">
        <button
          onClick={prev}
          className="text-white text-3xl hover:text-[#37C8B7] transition-all"
        >
          ❮
        </button>
        <button
          onClick={next}
          className="text-white text-3xl hover:text-[#37C8B7] transition-all"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
