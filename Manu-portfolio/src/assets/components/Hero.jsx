import 'animate.css/animate.min.css';

export default function HeroComponent() {
    return (
        <div id="div-hero" className='bg-[url("fondo3.jpg")] h-screen md:h-160 gap-4 lg:h-120 w-full bg-cover flex p-4 md:p-8 gap-4 md:gap-9 lg:p-20 md:flex-row md:justify-center mt-16 md:mt-16'>
            <div id="hero-content" className="animate__animated animate__flash flex flex-row items-center justify-center md:text-left mb-4 md:mb-0 gap-4 p-12 redondear">
                <div className=" flex flex-col items-center justify-center">
                    <h1 className="title transition-transform transform hover:-translate-y-1 text-left text-4xl md:text-5xl lg:text-8xl font-bold">
                        Manuel Pedrobelli
                    </h1>
                    <p className="text-white text-left text-2xl md:text-3xl lg:text-4xl mb-4">
                        Full Stack developer 
                    </p>
                    
                        <a href="Manuel_Pedrobelli_Resume_.pdf" download>
                        <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-2xl shadow-md hover:bg-green-500">
                            Get my CV
                        </button>
                        </a>
                </div>
                <div className="flex flex-col items-center justify-center md:ml-5 mt-2 md:mt-0">
                    <img src="perfil.jpg" alt="software engineer" className="zoomImg md:w-96 md:h-60 p-4 lg:w-80 lg:h-80 p-2 shadow-lg rounded-full" /> 
                </div>
            </div>
        </div>
    );
}
