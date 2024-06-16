export default function HeroComponent({ text }) {
    return (
        <div  className="relative h-screen">
            {/* Background overlay */}
            <div id="main" className="absolute bg-center bg-cover inset-0 color1"></div>

            {/* Content container */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                <div id="hero-content" className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-4 md:mb-0 gap-4 p-6 md:p-12 rounded bg-white bg-opacity-25 backdrop-blur-lg">
                    {/* Left column */}
                    <div id='hero-title' className="flex flex-col justify-center items-center gap-2 md:p-16 rounded">
                        <h1 className="transition-transform transform hover:-translate-y-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                            {text.title}
                        </h1>
                        <p className="text-2xl md:text-3xl lg:text-4xl mb-6">
                            {text.subtitle}
                        </p>
                        <div className="flex flex-col md:flex-row gap-2">
                            <a href="Manuel-Pedrobelli-CV.pdf" download>
                                <button className="zoom w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-green-700 shadow-md hover:bg-green-500">
                                    {text.cv}
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/manuel-agustin-pedrobelli-salaberria-897009213/">
                                <button className="zoom w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-blue-700 shadow-md hover:bg-blue-500">
                                    Linkedin
                                </button>
                            </a>
                            <a href="https://github.com/ManuelPedrobelli">
                                <button className="zoom w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-black shadow-md hover:bg-gray-800">
                                    Github
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className=" md:flex justify-center items-center">
                        <img src="perfil.jpg" alt="software engineer" className="zoomImg rounded-full w-40 h-40 md:w-60 md:h-60 p-2 " />
                    </div>
                </div>
            </div>
        </div>
    );
}
