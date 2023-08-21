export default function About() {
    return (
      <div id="about" className="h-96 mt-20 mb-20 lg:mt-8 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:w-3/4 lg:ml-20">
          <img className="w-40 h-40 sm:w-60 sm:h-60 rounded-full mb-4 sm:mb-0" src="manu.jpg" alt="manu-image" />
          <p className="w-full text-white text-center text-lg sm:w-3/5 lg:text-left sm:text-xl">
            Software Engineering student at UNLP, located in La Plata, Argentina.<br />
            Im focused on front-end development for websites and the creation of user interfaces using cutting-edge technologies.<br />
            My goal is to apply these skills to tackle professional challenges and contribute to the success of projects in a work environment.
          </p>
        </div>
      </div>
    );
  }
  