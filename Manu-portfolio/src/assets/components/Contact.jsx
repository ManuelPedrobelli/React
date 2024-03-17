export default function Contact() {
    const handleContactButtonClick = () => {
        const destino = "manupedrob@gmail.com";
        const asunto = "Consulta desde el sitio web";

        const mailtoLink = `mailto:${destino}?subject=${encodeURIComponent(asunto)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div id="contact" className="mt-4 flex flex-col fondoSecundario items-center justify-center text-center p-5 mx-auto rounded-3xl">
            <h2 className="font-bold text-white text-6xl p-4">Get in touch</h2>
            <div className="redondear p-2">
                <p className="p-2 text-white text-xl">
                    I&apos;m currently looking for opportunities. Whether it&apos;s a Full-Time Job or a Freelance work. Send me a message,
                    <br/> I&apos;ll try to get back to you as soon as possible.
                </p>
            <div className="rounded-3xl p-3">   
                <button className="zoom zoom:hover w-35 h-12 px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-3xl shadow-md hover:bg-green-500" onClick={handleContactButtonClick}>
                    Contact me
                </button>
            </div>
            </div>
        </div>
    );
}
