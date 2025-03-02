import React, { useState } from 'react';

export default function About({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div id="about" className="mb-12 lg:mt-8 mx-auto flex flex-col items-center justify-center p-4 lg:p-6 gap-8">
      <div className="flex flex-col items-center">
        <p className="text-left text-sm sm:text-base md:text-2xl p-4 lg:p-6 rounded-lg ">
          {text.text1}<br /><br />
          {text.text2}<br /><br />
          {text.text3}<br /><br />
          {text.text4}<br /><br />
        </p>
        
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4"
            onClick={toggleVisibility}
            >
            {isVisible ? text.hide : text.ha}
          </button>
          {isVisible && (
            <img
            src="historiaacademica.pdf"
            alt="Historia Académica"
            className="mt-4 w-2/3"
            />
            
          )}
          </div>
    </div>
  );
}

