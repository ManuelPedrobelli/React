import 'animate.css/animate.min.css';

export default function HeroComponent() {
    return (
        <div id="div-hero" className='h-screen md:h-160 gap-4 lg:h-120 bg-top-left flex p-4 md:p-8 gap-4 md:gap-9 lg:p-20 md:flex-row  md:justify-center'>
            <div id="hero-content" className="animate__animated animate__flash flex flex-row items-center justify-center md:text-left mb-4 md:mb-0 gap-4 p-12 redondear">
                <div className=" flex flex-col items-center justify-center gap-2 ml-12 p-6 redondear">
                    <h1 className="title transition-transform transform hover:-translate-y-1 text-left text-4xl md:text-5xl lg:text-9xl font-bold">
                        Manuel Pedrobelli
                    </h1>
                    <p className=" text-left text-2xl md:text-3xl lg:text-4xl mb-6">
                        Full-stack developer
                    </p>
                    <div className='flex flex-row justify-center items-center gap-2'>

                        <a href="Manuel_Pedrobelli_Resume_.pdf" download>
                        <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-green-700 rounded-2xl shadow-md hover:bg-green-500">
                            Download CV
                        </button>
                        </a>
                        <a href="https://github.com/ManuelPedrobelli">
                        <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-black rounded-2xl shadow-md hover:bg-grey">
                            Github
                        </button>
                        </a>
                        <a href="https://www.linkedin.com/in/manuel-agustin-pedrobelli-salaberria-897009213/">
                        <button className="zoom zoom:hover w-32 h-12 px-3 md:px-4 lg:px-2 py-2 md:py-2 lg:py-2 text-white font-bold bg-blue-700 rounded-2xl shadow-md hover:bg-blue-500">
                            Linkedin
                        </button>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center md:ml-12  md:mt-0">
                    <img src="fondonu2.jpg" alt="software engineer" className="redondear md:w-96 md:h-60 p-4 lg:w-screen lg:h-screen p-2 " /> 
            </div>
            </div>
        </div>
    );
}
