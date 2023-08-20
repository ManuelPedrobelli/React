export default function About() {
    return (
        <div id="about" className="h-96 mt-8 sm:mt-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:w-3/4 md:w-2/3 lg:w-3/4 lg:ml-20">
                <img className="w-40 h-40 sm:w-60 sm:h-60 rounded-full mb-4 sm:mb-0" src="/src/assets/manu.jpg" alt="manu-image" />
                <p className="w-full text-white text-center text-lg sm:w-3/5 sm:text-left sm:text-xl">
                    Software Engineer student at UNLP based in La Plata, Argentina<br/>
                    Im focusing on front-end development for websites and the creation of user interfaces using cutting-edge technologies.<br/>
                    My goal is to apply these skills to tackle professional challenges and contribute to the success of projects in a work environment.
                </p>
            </div>
        </div>
    );
}
