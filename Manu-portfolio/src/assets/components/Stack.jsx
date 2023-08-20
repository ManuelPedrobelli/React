export default function Stack() {
    return (
        <div className="flex flex-col items-center justify-center bg-white w-4/5 mx-auto px-8 py-4 rounded-lg">
            <h1 className="text-4xl font-bold p-6">Tech Stack</h1>
            <div className="flex items-center justify-evenly gap-10 py-4">
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/html-5.png" alt="html5" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/css-3.png" alt="css3" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/js.png" alt="javascript" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/git.png" alt="git" />
                <img className="w-24 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/react.svg" alt="react" />
                <img className="w-28 h-24 transition-transform transform hover:-translate-y-2" src="src/assets/tailwind-css.png" alt="tailwind" />
            </div>

        </div>
    );
}
