import {SiGmail } from "react-icons/si"
import { FiPhoneCall, FiMail } from "react-icons/fi"
import { BoldIcon } from "@heroicons/react/24/solid"
export default function Contact(){
    const config={
        gmail:"godsonflinto.it22@bitsathy.ac.in",
        email:"mailto:flintogodson@gmail.com",
        phone:"tel:8072017039",
        call:"8072017039"
    }
    return <section id='contact' className='flex flex-col  px-4 py-25 items-center'>
         
        <div className='md:w-1/3 flex flex-col items-center px-10 py-10'> 
            <h1 className='text-4xl border-b-4 border-[#37C8B7] mb-5 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5'> If you want to discuss more in detail, please contact me!</p>
            <p className='py-2 flex items-center'>
                <a href={config.email} className="pr-2"><FiMail size={20}/></a>
                <span className='font-bold pr-1'>Email : </span>
                <a href={config.email}>{config.gmail}</a>
            </p>
            <p className='py-2 flex items-center'>
                <a href={config.phone} className="pr-2"><FiPhoneCall size={20}/></a>
                <span className='font-bold pr-1'>Phone :</span>
                <a href={config.phone}>{config.call}</a>
            </p>
        </div>
    </section>
}