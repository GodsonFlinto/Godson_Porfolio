import { MdDescription } from 'react-icons/md';
import websiteImg from '../assets/project1.png';
import websiteImg2 from '../assets/project2.jpg';
import websiteImg3 from '../assets/project3.png';

export default function Projects() {
  const config = {
    projects: [
      {
        image: websiteImg,
        title: "Contact Management System",
        description: "A web-based platform for managing and accessing student and alumni contact information, designed to assist placement coordinators.",
        link: "https://github.com/GodsonFlinto/Contact-Management-System",
        tech: ['HTML', 'Laravel', 'MySQL'],
      },
      {
        image: websiteImg2,
        title: "Cric Store",
        description: "An e-commerce site tailored for cricket gear, allowing users to browse, select, and order sports equipment with Firebase-powered authentication.",
        link: "https://github.com/GodsonFlinto/cricketstore",
        tech: ['React', 'CSS', 'Firebase'],
      },
      {
        image: websiteImg3,
        title: "Haircut Booking System",
        description: "An intuitive web application for users to book haircut appointments, featuring user authentication, scheduling, and stylist management.",
        link: "https://github.com/GodsonFlinto/sheartime",
        tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
      }
    ]
  };

  return (
    <section id='projects' className="flex flex-col py-20 px-4 sm:px-5 justify-center bg-gray-900">
      {/* Title */}
      <div className="w-full py-2">
        <div className="flex flex-col items-center py-5">
          <h1 className="text-4xl border-b-4 border-[#37C8B7] mb-5 font-bold text-white text-center">
            Projects
          </h1>
        </div>
      </div>

      {/* Project Cards */}
      <div className="w-full justify-center">
        <div className="flex flex-col md:flex-row px-2 sm:px-10 md:px-20 gap-10 flex-wrap items-center justify-center">
          {config.projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-xs bg-white/10 backdrop-blur-md text-white p-5 rounded-lg border border-white/20 shadow-md flex flex-col items-center hover:shadow-[#37C8B7]/40 hover:scale-105 transition-all duration-300"
            >
              <div className="border-2 border-[#37C8B7] p-1 rounded-md w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-center mt-4">{project.title}</h2>
              <p className="text-sm text-center mt-2 mb-4">{project.description}</p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap justify-center gap-2 mt-2 mb-3">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-[#37C8B7]/20 text-[#37C8B7] px-2 py-1 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#37C8B7] font-semibold hover:text-[#2aa197] hover:underline"
                >
                  Get Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
