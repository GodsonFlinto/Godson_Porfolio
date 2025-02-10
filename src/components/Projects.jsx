import { MdDescription } from 'react-icons/md'
import websiteImg from '../assets/project1.png'
import websiteImg2 from '../assets/project2.png'
import websiteImg3 from '../assets/project3.jpg'

export default function Projects(){
    const config ={
            projects:[
                {
                    image: websiteImg,
                    title:"CONTACT MANAGEMENT SYSTEM",
                    description: "Easily access the contact details of students and alumni's contact details for placements.",
                    link:"https://github.com/GodsonFlinto/Contact-Management"
                },
                {
                    image: websiteImg2,
                    title:"HOSPITAL APPOINTMENT BOOKING SYSTEM",
                    description: "Book an appointment for consulting a doctor on time for a hassle-free experience. ",
                    link:""
                },
                {
                    image: websiteImg3,
                    title:"HAIRCUT BOOKING SYSTEM",
                    description: "Schedule your haircut easily and get a stylish look at your preferred time.",
                    link:""
                }
            ]
    }
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center">
        <div className="w-full py-2">
        <div className="flex flex-col px-20 py-5">
            <h1 className="text-4xl border-b-4 border-[#37C8B7] mb-5 w-[135px] font-bold">Projects</h1>
                <p>These are some of my projects...</p>
        </div>
        </div>
        <div className="w-full justify-center">
            <div className='flex flex-col md:flex-row px-20 gap-5'>
                {config.projects.map((projects)=>(
                    <div className='relative'>
                        <img className='h-[250px] w-[500px] rounded-2xl shadow-xl' src={projects.image}/>
                        <h1 className='text-center font-semibold py-5'>{projects.title}</h1>
                        <div className='project-desc'>
                            <p className='text-center px-5 font-hero-font py-10'>{projects.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn1  text-center' target='_blank' href={projects.link}>Get Project</a>
                                </div>
                        </div>   
     
                    </div>
                ))}
                
            </div>
        </div>
    </section>
}