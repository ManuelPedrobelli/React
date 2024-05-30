export default function Stack() {
    return (
        <div id="stack" className="relative flex color2 flex-col gap-2 redondear items-center justify-center mx-auto mb-12  px-8 py-0 md:p-8 ">
            <h2 className="text-6xl font-bold w-1/4 redondear p-2 text-center">Tecnologias</h2>
            <div className="redondear p-6 flex flex-wrap items-center justify-evenly gap-8 sm:flex-row mt-6">
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="html-5.png" alt="html5" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="css-3.png" alt="css3" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="js.png" alt="javascript" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="science.png" alt="react" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="icons8-nodejs-240.png" alt="nodejs" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="express.png" alt="express" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="java.png" alt="java" />
                <img className="w-24 h-20 transition-transform transform hover:-translate-y-2" src="tailwind-css.png" alt="tailwind" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="git.png" alt="git" />
            </div>
            
            <h2 className="text-6xl font-bold w-1/4 redondear p-2 text-center">Aptitudes</h2>
            <div className="flex w-3/4 redondear p-6 flex flex-wrap items-center justify-evenly gap-8 sm:flex-row mt-6">
                <p>UML - Unified Modeling Language</p>
                <p>Ingles avanzado</p>
                <p>Analisis y resolucion de problemas</p>
                <p>Algoritmia y estructuras de datos</p>
                <p>Linux</p>
                <p>SCRUM</p>
                <p>Ingenieria de Software</p>
                <p>Object Oriented Programming</p>
                
            </div>
        </div>
    );
}
