import 'animate.css/animate.min.css';

export default function HeroComponent() {
    return (
        <div className="relative h-screen">
            <img src="/fondo3.jpg" className="w-full h-full object-cover" alt="Fondo de Hero"/>
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(57, 192, 237, 0.3)' }}></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <div id="hero-content" className="animate__animated animate__flash flex flex-col items-center md:items-start text-center md:text-left mb-4 md:mb-0 gap-4 p-6 md:p-12 rounded">
                    <div id='hero-title' className="flex flex-col justify-center items-center mx-auto gap-2 p-6 md:p-16 rounded">
                        <h1 className="transition-transform transform hover:-translate-y-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                            Manuel Pedrobelli
                        </h1>
                        <p className="title text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                            Desarrollador web
                        </p>
                        <div className='flex flex-wrap gap-2 justify-center'>
                            <a href="Manuel-Pedrobelli-CV.pdf" download>
                                <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-2xl shadow-md hover:bg-green-500">
                                    Descargar CV
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/manuel-agustin-pedrobelli-salaberria-897009213/">
                                <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-blue-700 rounded-2xl shadow-md hover:bg-blue-500">
                                    Linkedin
                                </button>
                            </a>
                            <a href="https://github.com/ManuelPedrobelli">
                                <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-black rounded-2xl shadow-md hover:bg-grey">
                                    Github
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
