import React, { useState } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import About from './assets/components/About';
import Portfolio from './assets/components/Portfolio';
import Stack from './assets/components/Stack';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';

import enTexts from './assets/components/en.json'; // Importa tus archivos JSON
import esTexts from './assets/components/es.json'; // Asegúrate de tener la ruta correcta a tus archivos JSON

function App() {
  const [language, setLanguage] = useState('en'); // Estado para controlar el idioma

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  const texts = language === 'en' ? enTexts : esTexts; // Determinar los textos según el idioma seleccionado

  return (
    <>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero text={texts.hero} />
      <About text={texts.about} />
      <Portfolio text={texts.projects} />
      <Stack text={texts.aptitudes} />
      <Contact text={texts.contact} />
      <Footer text={texts.footer} />
    </>
  );
}

export default App;
