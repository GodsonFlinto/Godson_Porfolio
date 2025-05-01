import AboutImg from '../assets/about.svg'
export default function About(){
    const config = {
            about1: "A passionate and hardworking BTech graduate in Information Technology from Bannari Amman Institute of Technology, seeking an opportunity to utilize my skills and knowledge to contribute to the growth of a dynamic organization.",
            about2: "I am proficient in Frontend skills like React.js, HTML, CSS. I'm also proficient in video editing. I have good knowledge in SQL."
    }
    return <section id='about' className='flex flex-col md:flex-row px-5 py-20 bg-gray-900'>
        <div className='py-10 px-20 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'> 
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-[#37C8B7] mb-5 w-[170px] font-bold text-white'>About Me</h1>
                <p className='pb-5 text-white'>{config.about1}</p>
                <p className='pb-5 text-white text-indigo-200'>{config.about2}</p>
            </div>
        </div>
    </section>
}