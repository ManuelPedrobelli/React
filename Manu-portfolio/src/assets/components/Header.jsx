import React from 'react';
import 'animate.css/animate.min.css';
import enFlag from '/usaflag.svg'; // Ruta relativa desde Header.jsx
import esFlag from '/flagSpain.svg'; // Ruta relativa desde Header.jsx

const Header = ({ language, toggleLanguage }) => {
  return (
    <div id='home' className='sticky top-0 left-0 right-0 bg-black z-50'>
      <div className='flex justify-center w-full text-white'>
        <div className='flex'>
          {/* Utiliza la variable de idioma para mostrar la bandera correspondiente */}
          <img
            src={language === 'en' ? esFlag : enFlag} // Cambia el orden de las banderas según el idioma
            alt='Language flag'
            className='w-10 h-10 md:w-12 md:h-12 lg:w-10 lg:h-10 p-2 rounded-full cursor-pointer' // Ajusta el tamaño en diferentes tamaños de pantalla
            onClick={toggleLanguage} // Llama a la función para cambiar el idioma
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
