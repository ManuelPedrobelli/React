export default function Stack() {
    return (
        <div id="stack" className="relative flex flex-col fondoSecundario redondear items-center justify-center mx-auto mt-4  px-8 py-0 md:p-8 ">
            <h2 className="text-6xl font-bold text-white w-1/4 redondear p-2 text-center">Tech Stack</h2>
            <div className="redondear p-6 bg-white flex flex-wrap items-center justify-evenly gap-8 sm:flex-row mt-6">
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="html-5.png" alt="html5" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="css-3.png" alt="css3" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="js.png" alt="javascript" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="science.png" alt="react" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="icons8-nodejs-240.png" alt="nodejs" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="express.png" alt="express" />
                <img className="w-24 h-20 transition-transform transform hover:-translate-y-2" src="tailwind-css.png" alt="tailwind" />
                <img className="w-20 h-20 transition-transform transform hover:-translate-y-2" src="git.png" alt="git" />
            </div>

        </div>
    );
}
