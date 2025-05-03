import { FiPhoneCall, FiMail } from "react-icons/fi";
import {
  SiGmail,
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiWhatsapp,
  SiFacebook
} from "react-icons/si";

export default function Contact() {
  const config = {
    gmail: "godsonflinto.it22@bitsathy.ac.in",
    email: "mailto:flintogodson@gmail.com",
    phone: "tel:8072017039",
    call: "8072017039",
    sociallink: {
      gmail: "mailto:flintogodson@gmail.com",
      github: "https://github.com/GodsonFlinto",
      linkedin: "https://www.linkedin.com/in/your-link-here",
      whatsapp: "https://wa.me/918072017039", // Adjusted format
      instagram: "https://instagram.com/godsonflinto3", // Add yours
      facebook: "https://facebook.com/" // Add yours
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 py-16 px-4 text-white flex flex-col items-center"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold border-b-4 border-[#37C8B7] inline-block mb-4">
          Contact
        </h1>
        <p className="pt-2 text-base sm:text-lg">
          If you want to discuss more in detail, please contact me!
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md text-white">
        <p className="flex items-start sm:items-center mb-5 text-sm sm:text-base">
          <FiMail className="mr-2 sm:mt-0 text-[#37C8B7]" size={20} />
          <span className="font-bold mr-1">Email:</span>
          <a href={config.email} className="hover:text-[#37C8B7] break-words">
            {config.gmail}
          </a>
        </p>

        <p className="flex items-start sm:items-center mb-5 text-sm sm:text-base">
          <FiPhoneCall className="mr-2 mt-1 sm:mt-0 text-[#37C8B7]" size={20} />
          <span className="font-bold mr-1">Phone:</span>
          <a href={config.phone} className="hover:text-[#37C8B7]">
            {config.call}
          </a>
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <a
            href={config.sociallink.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#37C8B7] transition-colors"
          >
            <SiGithub size={26} />
          </a>
          <a
            href={config.sociallink.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#37C8B7] transition-colors"
          >
            <SiLinkedin size={26} />
          </a>
          <a
            href={config.sociallink.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#37C8B7] transition-colors"
          >
            <SiWhatsapp size={26} />
          </a>
          <a
            href={config.sociallink.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#37C8B7] transition-colors"
          >
            <SiInstagram size={26} />
          </a>
          <a
            href={config.sociallink.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#37C8B7] transition-colors"
          >
            <SiFacebook size={26} />
          </a>
        </div>
      </div>
    </section>
  );
}
