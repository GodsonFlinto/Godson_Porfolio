import iot from '../assets/iot.jpg'
import python from '../assets/python.jpg'
import cprogram from '../assets/cpro.jpg'

export default function Certificates() {
    const config = {
        certificates: [
            {
                image: iot,
                title: "INTERNET OF THINGS"
            },
            {
                image: python,
                title: "PYTHON PROGRAMMING"
            },
            {
                image: cprogram,
                title: "C PROGRAMMING",
            }
        ]
    }

    return (
        <section id="certificates" className="flex flex-col py-20 px-5 justify-center bg-gray-900">
            <div className="px-5 md:px-9">
                <h1 className="text-4xl border-b-4 border-[#37C8B7] mb-12 w-fit font-bold text-white">
                    Certificates
                </h1>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap px-5 md:px-18 gap-10 items-center justify-center">
                {config.certificates.map((certificate, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border hover:border-[#37C8B7] transition-all duration-300 transform hover:scale-105 w-full max-w-md"
                    >
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="h-[320px] w-full object-cover"
                        />
                        <div className="p-3">
                            <h2 className="text-xl font-semibold text-center text-gray-700">
                                {certificate.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
