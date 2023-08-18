import React from 'react';
import './responsiveHeader.css'; // Importa la hoja de estilos específica del encabezado
import Button from './button';
import Title from './title';

function ResponsiveHeader({ text }) {
  return (
    <header id='home' className="responsive-header">
      <div className='responsive-header-container'>
        <div className='flex-container'>
          <h1 className='header-title'>Manuel Pedrobelli</h1>
          <p className='responsive-header-subtitle'>{text}</p>
        </div>
        <img className='responsive-header-img' src='/src/assets/img/developer-img.png' />
      <Button url="#" />
      </div>
    </header>
  );
}

export default ResponsiveHeader;
