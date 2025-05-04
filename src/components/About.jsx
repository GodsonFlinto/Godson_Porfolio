import AboutImg from '../assets/about.svg';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import javaLogo from '../assets/java.png';
import sqlLogo from '../assets/sql.png';
import reactLogo from '../assets/react.jpg';

export default function About() {
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

  return (
    <section id='about' className='bg-gray-900 text-white px-8 py-20'>

      {/* ------------ Mobile Layout ------------ */}
      <div className='md:hidden flex flex-col items-center'>
        {/* About Me */}
        <div className=''>
          <h1 className='text-3xl border-b-4 border-[#37C8B7] mb-4 w-fit font-bold'>About Me</h1>
          <p className='text-base leading-relaxed font-font-new'>{config.about1}</p>
        </div>
        {/* Image */}
        <img src={AboutImg} alt='About Illustration' className='w-full h-64 object-contain mb-8' />

        

        {/* Skills */}
        <div className='w-full'>
          <h2 className='text-2xl font-semibold mb-4 text-[#37C8B7] text-center'>My Skills</h2>
          <div className='grid grid-cols-3 gap-4'>
            {skills.map((skill, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-lg'
              >
                <img src={skill.img} alt={skill.name} className='h-10 w-8 mb-2' />
                <p className='text-sm text-center font-medium hover:text-[#37C8B7]'>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ------------ Desktop Layout ------------ */}
      <div className='hidden md:flex flex-row px-4 md:px-10 pt-20 lg:px-20'>
        {/* Image */}
        <div className='w-1/2 flex items-center justify-center'>
          <img src={AboutImg} alt='About Illustration' className='w-full h-80 object-contain' />
        </div>

        {/* About + Skills */}
        <div className='w-1/2 flex flex-col justify-center'>
          <h1 className='text-4xl border-b-4 border-[#37C8B7] mb-5 w-fit font-bold'>About Me</h1>
          <p className='pb-5 text-lg leading-relaxed font-font-new'>{config.about1}</p>

          {/* Skills */}
          <div className='mt-10'>
            <h2 className='text-2xl font-semibold mb-4 text-[#37C8B7]'>My Skills</h2>
            <div className='grid grid-cols-6 gap-6'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:scale-105 transition-transform shadow-lg'
                >
                  <img src={skill.img} alt={skill.name} className='h-12 w-10 mb-2' />
                  <p className='text-sm font-medium hover:text-[#37C8B7]'>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
