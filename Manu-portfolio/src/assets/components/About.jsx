export default function About() {
    return (
      <div id="about" className="bg-white rounded-md w-4/6 h-96 mt-20 mb-10 lg:mt-8 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:w-3/4 lg:ml-20">
          <img className="w-80 h-8  0 sm:w-60 sm:h-60 rounded-full mb-4 sm:mb-0" src="manu.jpg" alt="manu-image" />
          <div id="ps" className="flex flex-col items-center justify-center">
            <p className="w-full text-black text-center text-lg sm:w-3/5 lg:text-left sm:text-xl mb-4">
              Software Engineering student at UNLP, located in La Plata, Argentina.
            </p>
            <p className="w-full text-black text-center text-lg sm:w-3/5 lg:text-left sm:text-xl mb-4">
              I'm focused on front-end development for websites and the creation of user interfaces.
            </p>
            <p className="w-full text-black text-center text-lg sm:w-3/5 lg:text-left sm:text-xl mb-4">
              My goal is to apply these skills to tackle professional challenges and contribute to the success of projects in a work environment.
            </p>
          </div>
        </div>
      </div>
    );
  }
  