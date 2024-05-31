export default function About() {
  return (
      <div id="about" className="mb-12 lg:mt-8 mx-auto flex flex-col lg:flex-row items-center justify-center p-4 lg:p-6 gap-8 w-full lg:w-3/4">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
              <img src="perfil.jpg" alt="software engineer" className="zoomImg w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 p-2 rounded-full" />
              <img src="perfil.jpg" alt="software engineer" className="zoomImg w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 p-2 rounded-full" />
              <img className="rounded-lg w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover" src="coding.gif" alt="Coding GIF" />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start">
              <p className="text-left text-sm sm:text-base md:text-xl p-4 lg:p-6 rounded-lg bg-white shadow-lg">
                  Actualmente culminando segundo año de la carrera <a href="https://www.info.unlp.edu.ar/analista-en-tic/" className="text-blue-500">Analista en TIC</a> en la Facultad de Informática de la UNLP.<br /><br />
                  A medida que avanzo en mis estudios universitarios, me enfoco en el desarrollo web full-stack, disfrutando de la creación de páginas web y dedicando tiempo al diseño de sitios y aplicaciones.<br /><br />
                  Soy una persona confiable, dedicada y responsable.<br /><br />
                  Busco una oportunidad laboral que me permita aplicar mis conocimientos y pueda aprender nuevas habilidades y conocimiento mientras continúo con mis estudios universitarios.<br /><br />
                  Fuera de mis estudios académicos, disfruto de mis pasatiempos como tocar la guitarra eléctrica, andar en bicicleta e ir al gimnasio.<br /><br />
                  <img src="historiaacademica.png" alt="Historia Académica" className="mt-4 w-full" />
              </p>
          </div>
      </div>
  );
}
