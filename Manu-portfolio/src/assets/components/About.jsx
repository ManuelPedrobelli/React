import React, { useState } from 'react';

export default function About({ text }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section
      id="about"
      className="mb-16 mt-12 mx-auto flex flex-col items-center justify-center px-4 lg:px-6 gap-10 text-white w-full rounded-3xl py-10 max-w-6xl"
    >
      <div className="w-full">
        {/* Educación */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">Educación</h2>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <a
              href="https://www.info.unlp.edu.ar/analista-en-tic/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                Analista en Tecnologías de la Información y la Comunicación
              </h3>
            </a>
            <p className="text-base md:text-lg">
              <strong>Universidad Nacional de La Plata – Facultad de Informática</strong>
            </p>
            <p className="text-base md:text-lg mb-4">
              Estado: Finalizando el tercer y último año
            </p>

            <ul className="grid grid-cols-1 gap-y-2 text-left list-disc list-inside text-base md:text-lg">
              <li>Programación orientada a objetos</li>
              <li>Ingeniería de software: historias de usuario, documentación, testing, buenas prácticas</li>
              <li>Metodologías ágiles</li>
              <li>Bases de datos relacionales: SQL, modelado lógico y físico, normalización</li>
              <li>Sistemas operativos</li>
              <li>Desarrollo de software</li>
            </ul>

            <p className="mt-4 text-base md:text-lg">
              <strong>Reconocimiento:</strong> Becario del programa de estímulo al rendimiento académico
            </p>

            <button
              className="bg-blue-600 text-white py-2 px-5 rounded-xl hover:bg-blue-700 transition duration-300 mt-4 font-semibold shadow-lg"
              onClick={toggleVisibility}
            >
              {isVisible ? "Ocultar historia académica" : "📄 Ver historia académica"}
            </button>

            {isVisible && (
              <div className="flex justify-center w-full mt-6">
                <a
                  href="/historiaacademica.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="historiaacademica.png"
                    alt="Historia Académica"
                    className="w-full max-w-md rounded-xl shadow-xl border border-gray-700 cursor-pointer transition-transform hover:scale-105"
                  />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Habilidades Técnicas */}
        <section id="habilidades" className="w-full mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Habilidades Técnicas</h2>

          <div className="grid grid-cols-2 w-full gap-6">
            {[
              { title: "Lenguajes", content: "Javascript, Java, SQL, C#" },
              { title: "Frameworks / Librerías", content: "React, Node.js, Express, Blazor (.NET), TailwindCSS, Bootstrap" },
              { title: "Bases de datos", content: "SQLite, diseño y consultas SQL" },
              { title: "Herramientas", content: "Git, GitHub, Linux" },
              { title: "Idiomas", content: "Inglés técnico (lectura y comprensión de documentación)" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base md:text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Portfolio */}
      <div
        id="portfolio"
        className="mx-auto px-4 lg:px-8 py-8 gap-4 flex flex-col items-center gap-4"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-8 drop-shadow-xl">
          Proyectos
        </h2>

        {/* Proyecto: Alquilando */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl flex flex-col items-center justify-center p-8">
          <a
            href="https://alquilando.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <img
              src="imagenAlquilando.jpg"
              alt="Alquilando"
              className="mx-auto"
            />
          </a>
          <h5 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Alquilando
          </h5>
          <p className="mb-6 text-left text-gray-700 dark:text-gray-300 leading-relaxed">
             Alquilando es una aplicación web para la gestión de propiedades en alquiler, que permite a los usuarios publicar inmuebles, realizar reservas y llevar un seguimiento de las operaciones de forma centralizada.<br />En el proyecto participé de forma activa en todo el ciclo de vida del desarrollo, desde la recolección de requisitos hasta la implementación de funcionalidades.<br /> Realicé entrevistas a usuarios reales para comprender sus necesidades, redacté la documentación inicial (SRS, épicas e historias de usuario) y trabajé bajo la metodología Scrum, participando en sprints, retrospectivas y tareas de equipo.<br /> Apliqué buenas prácticas de desarrollo como separación por capas, principios SOLID, inyección de dependencias y control de versiones con Git.<br /> Desarrollé funcionalidades clave del sistema utilizando Blazor y C#, conectando con bases de datos mediante Entity Framework.<br /> Este proyecto me permitió fortalecer habilidades tanto técnicas como de trabajo colaborativo, priorización de tareas y comunicación con el cliente.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-gray-900 bg-opacity-60 rounded-xl p-4 sm:p-6">
            {[
              { src: "html-5.png", alt: "HTML5" },
              { src: "css-3.png", alt: "CSS3" },
              { src: "net.png", alt: ".net" },
              { src: "database.png", alt: "sqlite" },
              { src: "c-sharp.png", alt: "c-sharp" },
              { src: "scrum.png", alt: "scrum" },
              { src: "git.png", alt: "Git" },
            ].map((tech, idx) => (
              <img
                key={idx}
                src={tech.src}
                alt={tech.alt}
                className="w-10 h-10 sm:w-14 sm:h-14 transition-transform hover:-translate-y-1"
              />
            ))}
          </div>

          <a
            href="https://alquilando.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-xl transition focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Visit Project
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>

        {/* Proyecto: Trivia */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl flex flex-col items-center p-8">
          <a href="https://trivia-3.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="trivia.png"
              alt="Trivia"
            />
          </a>

          <h5 className="mt-6 mb-3 text-2xl font-semibold text-gray-900 dark:text-white text-center">
            Trivia
          </h5>
          <p className="mb-6 text-left text-gray-700 dark:text-gray-300 leading-relaxed mx-auto">
  Trivia es un juego de preguntas y respuestas diseñado para ofrecer una experiencia interactiva y entretenida a los usuarios.<br />
  Permite partidas multijugador entre dos jugadores que avanzan por un tablero al responder preguntas correctamente, ganando quien alcance primero la casilla final.<br />
  Implementé la lógica del juego, el sistema de turnos, el avance en el tablero, el servidor para conexión entre jugadores y la estructura general del flujo de partida.<br />
          </p>  

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 bg-opacity-60 rounded-xl p-4 sm:p-6">
            {[
              { src: "html-5.png", alt: "HTML5" },
              { src: "css-3.png", alt: "CSS3" },
              { src: "js.png", alt: "JavaScript" },
              { src: "icons8-nodejs-240.png", alt: "Node.js" },
              { src: "express.png", alt: "Express" },
              { src: "git.png", alt: "Git" },
            ].map((tech, idx) => (
              <img
                key={idx}
                src={tech.src}
                alt={tech.alt}
                className="w-10 h-10 sm:w-14 sm:h-14 transition-transform hover:-translate-y-1"
              />
            ))}
          </div>

          <a
            href="https://trivia-3.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-xl transition focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Visit Project
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
