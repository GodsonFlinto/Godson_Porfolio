import { FiPhoneCall, FiMail } from "react-icons/fi";
import { SiGmail, SiGithub, SiLinkedin, SiInstagram, SiWhatsapp, SiFacebook } from "react-icons/si";

export default function Contact() {
  const config = {
    gmail: "godsonflinto.it22@bitsathy.ac.in",
    email: "mailto:flintogodson@gmail.com",
    phone: "tel:8072017039",
    call: "8072017039",
    sociallink: {
      gmail: "mailto:flintogodson@gmail.com",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/your-link-here" // Replace with your actual LinkedIn
    }
  };

  return (
    <section id="contact" className="bg-gray-900 py-20 px-4 text-white flex flex-col items-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-[#37C8B7] inline-block mb-4">
          Contact
        </h1>
        <p className="pt-3">If you want to discuss more in detail, please contact me!</p>
      </div>

      
  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-8 w-full max-w-md text-white">
    <p className="flex items-center mb-5">
      <FiMail className="mr-2 text-[#37C8B7]" size={20} />
      <span className="font-bold mr-1">Email:</span>
      <a href={config.email} className="hover:text-[#37C8B7]">
        {config.gmail}
      </a>
    </p>
    <p className="flex items-center mb-4">
      <FiPhoneCall className="mr-2 text-[#37C8B7]" size={20} />
      <span className="font-bold mr-1">Phone:</span>
      <a href={config.phone} className="hover:text-[#37C8B7]">
        {config.call}
      </a>
    </p>
    <div className="flex justify-center space-x-8 mt-10">
      <a href={config.sociallink.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#37C8B7] transition-colors">
        <SiGithub size={30} />
      </a>
      <a href={config.sociallink.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#37C8B7] transition-colors">
        <SiLinkedin size={30} />
      </a>
      <a href={config.sociallink.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#37C8B7] transition-colors">
        <SiWhatsapp size={30} />
      </a>
      <a href={config.sociallink.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#37C8B7] transition-colors">
        <SiInstagram size={30} />
      </a>
      <a href={config.sociallink.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#37C8B7] transition-colors">
        <SiFacebook size={30} />
      </a>
    </div>
  </div>


      
    </section>
  );
}
