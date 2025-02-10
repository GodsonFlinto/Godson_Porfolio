import ResumeImg from '../assets/resume.svg'
export default function Resume(){
    const config={
        link:"https://pdflink.to/godresume3/"
    }
    return <section id='resume' className='flex flex-col md:flex-row px-5 py-20'>
        <div className='py-10 px-40 md:w-1/2'>
            <img className='w-[400px]' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'> 
        <div className='flex flex-col justify-center'>
            <h1 className='text-4xl border-b-4 border-[#37C8B7] mb-5 w-[135px] font-bold'>Resume</h1>
            <p className='pb-5'> I have attached my resume for you to view and download.</p>
            <a className='btn flex justify-center text-center ' target='_blank' href={config.link}>Download</a>
        </div>
        </div>
    </section>
}