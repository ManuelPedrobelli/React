export default function Stack() {
    return (
        <div className="relative flex flex-col items-center justify-center bg-white w-4/5 mx-auto px-8 py-4 md:p-8 rounded-3xl">
            <h1 className="text-4xl font-bold text-center p-6">Tech Stack</h1>
            <div className="flex flex-wrap items-center justify-evenly gap-10 py-4 sm:flex-row">
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="html-5.png" alt="html5" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="css-3.png" alt="css3" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="js.png" alt="javascript" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="git.png" alt="git" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="science.png" alt="react" />
                <img className="w-28 h-24 transition-transform transform hover:-translate-y-2" src="tailwind-css.png" alt="tailwind" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="express.png" alt="express" />
            </div>

        </div>
    );
}
