export default function Contact() {
    const handleContactButtonClick = () => {
        const destino = "manupedrob@gmail.com";
        const asunto = "Consulta desde el sitio web";

        const mailtoLink = `mailto:${destino}?subject=${encodeURIComponent(asunto)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="mt-4 flex color2 flex-col items-center justify-center text-center mb-8 p-5 mx-auto rounded-3xl">
            <h2 className="font-bold text-6xl mb-2 p-4">Contactarme</h2>
            <div className="redondear2 flex flex-col items-center px-4">
                <p className="px-6 py-12 color3 redondear mb-4 text-xl">
                Actualmente estoy buscando oportunidades, ya sea un trabajo a tiempo completo o trabajo freelance.<br></br> Envíame un mensaje, intentaré responder lo antes posible.
                </p>
                <button className="zoom zoom:hover w-35 h-12 px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-3xl shadow-md hover:bg-green-500" onClick={handleContactButtonClick}>
                    Contact me
                </button>
            <div className="rounded-3xl p-3">   
            </div>            
            </div>
                   

        </div>
    );
}
