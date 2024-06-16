export default function Portfolio({text}) {
    return (
        <div id="portfolio" className="flex flex-col items-center mx-auto mb-12 p-4 lg:p-8 rounded-lg py-8 justify-center bg-white">
            <h2 className="text-3xl md:text-6xl lg:text-8xl text-center mb-12">{text.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="max-w-lg bg-white flex items-center justify-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:p-6">
                    <div className="p-2">
                        <a href="https://trivia-3.onrender.com/">
                            <img className="rounded-t-lg w-full" src="trivia.png" alt="Trivia" />
                        </a>
                        <a href="https://trivia-3.onrender.com/">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Trivia</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {text.descriptionTrivia}
                        </p>
                        <div className="flex flex-row h-12 gap-3 bg-grey-500 rounded-md justify-center mb-2 p-2 items-center">
                            <img className="h-10 w-10" src="/html-5.png" alt="HTML5" />
                            <img className="h-10 w-10" src="/css-3.png" alt="CSS3" />
                            <img className="h-10 w-10" src="/js.png" alt="JavaScript" />
                            <img className="h-10 w-10" src="/icons8-nodejs-96.png" alt="Node.js" />
                            <img className="h-10 w-10" src="/express.png" alt="Express" />
                            <img className="h-10 w-10" src="/git.png" alt="Git" />
                        </div>
                        <a href="https://trivia-3.onrender.com/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                             Trivia
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-lg bg-white flex items-center justify-center flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:p-6">
                    <div className="p-2">
                        <a href="https://metalguitars-mp.netlify.app/">
                            <img className="rounded-t-lg w-full" src="metalStore.png" alt="Metal Store" />
                        </a>
                        <a href="https://metalguitars-mp.netlify.app/">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Metal Store</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {text.descriptionGuitarStore}
                        </p>
                        <div className="flex flex-row h-12 gap-3 bg-grey-500 rounded-md mb-2 p-2 items-center">
                            <img className="h-10 w-10" src="/html-5.png" alt="HTML5" />
                            <img className="h-10 w-10" src="/css-3.png" alt="CSS3" />
                            <img className="h-10 w-10" src="/js.png" alt="JavaScript" />
                            <img className="h-10 w-10" src="/git.png" alt="Git" />
                        </div>
                        <a href="https://metalguitars-mp.netlify.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Metal Store 
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="max-w-lg bg-white flex items-center justify-center flex-col border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4 lg:p-6">
                    <div className="p-2">
                        <a href="https://metalguitars-mp.netlify.app/">
                            <img className="rounded-t-lg w-full" src="mysite.png" alt="Mi Portafolio" />
                        </a>
                        <a href="https://metalguitars-mp.netlify.app/">
                            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          {text.descriptionPortfolio}
                        </p>
                        <div className="flex flex-row h-12 gap-3 bg-grey-500 rounded-md justify-center mb-2 p-2 items-center">
                            <img className="h-10 w-10" src="/html-5.png" alt="HTML5" />
                            <img className="h-10 w-10" src="/tailwind-css.png" alt="Tailwind CSS" />
                            <img className="h-10 w-10" src="/science.png" alt="React" />
                            <img className="h-10 w-10" src="/git.png" alt="Git" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
