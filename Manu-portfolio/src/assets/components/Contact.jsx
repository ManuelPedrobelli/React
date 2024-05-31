import { useState } from 'react';

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);

    const handleContactButtonClick = () => {
        setIsLoading(true);
        const destino = "manupedrob@gmail.com";
        const asunto = "Consulta desde el sitio web";

        const mailtoLink = `mailto:${destino}?subject=${encodeURIComponent(asunto)}`;
        window.location.href = mailtoLink;
        setIsLoading(false);
    };

    return (
        <div id="contact" className="mt-4 flex color2 flex-col items-center justify-center text-center mb-8 p-5 mx-auto rounded-3xl">
            <h2 className="font-bold text-4xl md:text-6xl mb-4 p-4">Contáctame</h2>
            <div className="redondear2 flex flex-col items-center px-4">
                <p className="px-6 py-6 color3 redondear mb-4 text-lg md:text-xl">
                    Actualmente estoy buscando oportunidades laborales, ya sea un trabajo a tiempo completo o trabajo freelance. Envíame un mensaje y trataré de responder lo antes posible.
                </p>
                <button 
                    className={`zoom w-35 md:w-52 h-12 md:h-14 px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-3xl shadow-md hover:bg-green-500 ${isLoading ? 'cursor-not-allowed opacity-50' : ''}`} 
                    onClick={handleContactButtonClick}
                    disabled={isLoading}
                >
                    {isLoading ? 'Enviando...' : 'Contactarme'}
                </button>
            </div>
        </div>
    );
}
