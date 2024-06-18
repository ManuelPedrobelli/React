export default function Stack({ text }) {
    return (
        <div id="stack" className="relative flex flex-col gap-8 items-center justify-center mx-auto mb-12 px-4 py-8 md:p-8">
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold w-full redondear p-2 text-center">{text.title}</h2>
            
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 md:flex md:flex-wrap md:items-center md:justify-center md:gap-8 lg:gap-6 mt-6 mb-6">
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="html-5.png" alt="html5" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="css-3.png" alt="css3" />
                <img className="w-16 h-16 md:w-24 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="tailwind-css.png" alt="tailwind" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="js.png" alt="javascript" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="science.png" alt="react" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="icons8-nodejs-240.png" alt="nodejs" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="express.png" alt="express" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="java.png" alt="java" />
                <img className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 transition-transform transform hover:-translate-y-2" src="git.png" alt="git" />
            </div>
            
            <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold w-full redondear p-2 text-center">{text.skills}</h2>
            <div className="flex flex-wrap items-center justify-center text-white font-bold gap-4 md:gap-8 mt-6 lg:text-4xl text-center md:text-left">
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.uml}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.lang}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.analysis}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.algData}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.linux}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.scrum}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.engine}</p>
                <p className="w-full bg-blue-500 p-4 md:w-auto">{text.oop}</p>
            </div>
        </div>
    );
}
