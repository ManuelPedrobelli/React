export default function Portfolio() {
    return (
        <div id="portfolio" className="flex flex-col items-center m-auto mb-12 redondear py-8 justify-center bg-white">
            <h2 className="text-6xl text-center mb-12">Portfolio</h2>
            <div className="grid grid-cols-2 gap-4 items-start">

            <div className="grid justify-center">

                <div class="max-w-lg bg-white flex items-center justify-center flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-2">
                    <a href="https://trivia-3.onrender.com/">
                        <img class="rounded-t-lg" src="trivia.png" alt="" />
                    </a>
                        <a href="https://trivia-3.onrender.com/">
                            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Trivia</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Trabajo final para la materia Seminario de Lenguajes:Javascript.<br></br> Se trata de un juego multijugador con conexion online sobre preguntas y respuestas.<br></br> Este proyecto me permitio profundizar conceptos de comunicacion cliente-servidor, trabajar en equipo para del desarrollo del front y el back y utilizar un controlador de versiones como GIT.<br></br>Tecnologias utilizadas:<br></br></p>
                            <div className="flex flex-row h-12 w-80 gap-3 bg-grey-500 rounded-md justify-center mb-2 p-2 items-center">
                                <img className="h-10 w-10" src="/html-5.png"></img>
                                <img className="h-10 w-10" src="/css-3.png"></img>
                                <img className="h-10 w-10" src="\js.png"></img>
                                <img className="h-10 w-10" src="/icons8-nodejs-96.png"></img>
                                <img className="h-10 w-10" src="/express.png"></img>
                                <img className="h-10 w-10" src="/git.png"></img>
                            </div>
                        
                        <a href="https://trivia-3.onrender.com/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Visitar Trivia
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
                <div className="grid justify-center">

                <div class="max-w-lg bg-white flex items-center justify-center flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-2">
                    <a href="https://metalguitars-mp.netlify.app/">
                        <img class="rounded-t-lg" src="metalStore.png" alt="" />
                    </a>
                        <a href="https://metalguitars-mp.netlify.app/">
                            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Metal Store</h5>
                        </a>

                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Metalstore es una tienda virtual de guitarras electricas.<br></br>En desarrollo.</p>
                        <div className="flex flex-row h-12 w-80 gap-3 bg-grey-500 rounded-md  mb-2 p-2 items-center">
                                <img className="h-10 w-10" src="/html-5.png"></img>
                                <img className="h-10 w-10" src="/css-3.png"></img>
                                <img className="h-10 w-10" src="/js.png"></img>
                                <img className="h-10 w-10" src="/git.png"></img>
                        </div>
                        <a href="https://metalguitars-mp.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Visitar MetalStore
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>

               </div>

               <div className="grid justify-center">

                <div class="max-w-lg bg-white flex items-center justify-center flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img class="rounded-t-lg" src="mysite.png" alt="" />
                    <div class="p-5">
                        <a href="https://metalguitars-mp.netlify.app/">
                            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Mi portafolio</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Este sitio esta construido con React.</p>
                        <div className="flex flex-row h-12 w-80 gap-3 bg-grey-500 rounded-md justify-center mb-2 p-2 items-center">
                                <img className="h-10 w-10" src="/html-5.png"></img>
                                <img className="h-10 w-10" src="/tailwind-css.png"></img>
                                <img className="h-10 w-10" src="/science.png"></img>
                                <img className="h-10 w-10" src="/git.png"></img>
                            </div>
                    </div>
                </div>

                </div>

            </div>
        </div>
    );
}
