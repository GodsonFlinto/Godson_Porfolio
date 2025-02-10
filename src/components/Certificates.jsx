import iot from '../assets/iot.jpg'
import python from '../assets/python.jpg'
import cprogram from '../assets/cpro.jpg'
export default function Certificates(){
    const config ={
                certificates:[
                    {
                        image: iot,
                        title:"INTERNET OF THINGS"
                    },
                    {
                        image: python,
                        title:"PYTHON PROGRAMING"
                    },
                    {
                        image: cprogram,
                        title:"C PROGRAMING",
                    }
                ]
        }
    return <section id="certificates" className="flex flex-col py-20 px-5 justify-center">
        <div className="px-20 ">
            <h1 className="text-4xl border-b-4 border-[#37C8B7] mb-5 w-[200px] font-bold">Certifiicates</h1>
        </div>
        <div className='flex flex-col md:flex-row px-20 gap-5 py-5'>
        {config.certificates.map((certificate)=>(
            <div>
            <img className='size-1/4 h-[300px] w-[500px] rounded-xl border-4 hover:border-[#37c8b7] border-black ' src={certificate.image}/>
            <h1 className='py-3 font-semibold text-center'>{certificate.title}</h1>
            </div>
        ))}
        
        </div>
        
    </section>
}