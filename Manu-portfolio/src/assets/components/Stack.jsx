export default function Stack() {
    return (
        <div id="stack" className="relative flex color2 flex-col gap-8 items-center justify-center mx-auto mb-12 px-4 py-8 md:p-8">
            <h2 className="text-3xl md:text-6xl font-bold w-full redondear p-2 text-center">Tecnologías</h2>
            <div className="redondear p-6 flex flex-wrap items-center justify-center gap-8 mt-6">
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="html-5.png" alt="html5" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="css-3.png" alt="css3" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="js.png" alt="javascript" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="science.png" alt="react" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="icons8-nodejs-240.png" alt="nodejs" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="express.png" alt="express" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="java.png" alt="java" />
                <img className="w-16 h-16 md:w-24 md:h-20 transition-transform transform hover:-translate-y-2" src="tailwind-css.png" alt="tailwind" />
                <img className="w-16 h-16 md:w-20 md:h-20 transition-transform transform hover:-translate-y-2" src="git.png" alt="git" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold w-full redondear p-2 text-center">Aptitudes</h2>
            <div className="flex w-full redondear p-6 flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 text-center md:text-left">
                <p className="w-full md:w-auto">UML - Unified Modeling Language</p>
                <p className="w-full md:w-auto">Inglés avanzado</p>
                <p className="w-full md:w-auto">Análisis y resolución de problemas</p>
                <p className="w-full md:w-auto">Algoritmia y estructuras de datos</p>
                <p className="w-full md:w-auto">Linux</p>
                <p className="w-full md:w-auto">SCRUM</p>
                <p className="w-full md:w-auto">Ingeniería de Software</p>
                <p className="w-full md:w-auto">Object Oriented Programming</p>
            </div>
        </div>
    );
}
