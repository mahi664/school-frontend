import { FaWhatsapp } from "react-icons/fa"
import { useSchoolConfig } from "../context/SchoolConfigContext";

function FloatingWhatsApp() {

    const { config } = useSchoolConfig();
    const phoneNumber = config?.phoneNumber; // Replace with your WhatsApp number

    return (
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" 
           className="fixed bottom-6 right-5 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition duration-300 hover:scale-105">
            <FaWhatsapp size={28} />
            <span className="hidden md:block font-medium">
                Enquire Now
            </span>
        </a>
    );
}

export default FloatingWhatsApp;