export default function HeroComponent() {
    return (
        <div className='bg-[url("11857.jpg")] h-screen md:h-160 lg:h-120 w-full bg-cover bg-center flex flex-col justify-center items-center p-4 md:p-8 gap-4 md:gap-9 lg:p-20 md:flex-row md:justify-center mt-16 md:mt-16'>
            <div className="flex flex-col items-center justify-center text-center md:text-left mb-4 md:mb-0">
                <h1 className="title transition-transform transform hover:-translate-y-1 mb-2 text-4xl md:text-5xl lg:text-8xl font-bold">
                    Manuel Pedrobelli
                </h1>
                <p className="text text-center text-2xl md:text-3xl lg:text-4xl text-grey ">
                    Front-end developer who enjoys building websites
                </p>
                <div className="flex items-center justify-center mt-2 md:mt-4">
                    <button className="zoom zoom:hover   w-32 h-12 px-3 md:px-4 lg:px-6 py-1 md:py-2 lg:py-2 text-white font-bold bg-rgb-blue rounded-3xl shadow-md hover:bg-blue-700">
                        Get my CV
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-center md:ml-5 mt-2 md:mt-0">
                <img src="giphy.gif" alt="software engineer" className="w-40 h-40 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-full shadow-lg" />
            </div>
        </div>
    );
}
