import logo from '../public/logo.png'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#230562] text-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo Section */}
                <div>
                    <Image
                        src={logo}
                        alt="Honoredge Legal Practices Logo"
                        width={100}
                        height={100}
                        className=""
                    />
                    <h3 className="text-2xl font-garamond font-bold tracking-widest leading-tight mt-4">
                        HONOREDGE LEGAL PRACTICES
                    </h3>
                </div>

                {/* Contact Details */}
                <div>
                    <h4 className="text-2xl font-garamond mb-4">Contact Details</h4>
                    <p className="text-white text-lg">
                        12B Justice Crescent,<br />
                        Victoria Island, Lagos,<br />
                        Nigeria.
                    </p>
                    <p className="text-lg mb-1">+234 805 543 8457</p>
                    <p className="text-lg">honoredgelp@gmail.com</p>
                </div>

                {/* Office Hours */}
                <div>
                    <h4 className="text-2xl font-garamond mb-4">Office Hours</h4>
                    <p className="text-lg mb-1">Monday to Friday</p>
                    <p className="text-lg mb-3">9:00 am to 6:00 pm</p>
                    <p className="text-lg mb-1">Saturday</p>
                    <p className="text-lg mb-3">9:00 am to 12 noon</p>
                    <p className="text-lg">Closed on Sundays</p>
                </div>
            </div>

            {/* Social Links & Accessibility Note */}
            <div className="max-w-6xl mx-auto mt-12 text-center md:text-left">
                <h4 className="text-xl font-garamond mb-4">Follow Us</h4>
                <div className="flex justify-center md:justify-start space-x-6 text-xl mb-6">
                    <a href="#" aria-label="Facebook" className="hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                </div>
                <p className="text-xs text-gray-300">
                    We are an accessible workplace. Persons with disabilities are welcome to apply.
                </p>
            </div>
        </footer>
    );
}
