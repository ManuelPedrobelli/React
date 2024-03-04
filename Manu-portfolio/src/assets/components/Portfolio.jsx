export default function Portfolio() {
    return (
       <div id="portfolio" className="flex flex-col items-center justify-center bg-white gap-16 mt-8 px-6 py-6 w-5/6 mx-auto md:rounded gap-12">
            
            <h1 className="text-4xl font-bold text-center p-6">Portfolio</h1>

            <div id="trivia" className="flex flex-col items-center justify-center gap-5 bg-rgb-blue py-4 px-2 lg:w-4/5 md:flex-row md:rounded">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-white font-bold text-2xl mb-2">Trivia game</h3>
                    <p className="text-white text-lg lg:px-10">Multiplayer game with a dice and a board, you have to roll the dice and answer questions until you reach the final cell and win.<br/> <span className="font-bold text-yellow-800">HTML CSS JS Node Express</span></p>
                    <a href="https://trivia-unlp-pedrobelli.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer zoomImg rounded-2xl" src="trivia.png" alt="trivia-game" />
                    </a>
                </div>
            </div>
            
                
            <div id="metal-store" className="flex flex-col items-center justify-center gap-5 bg-rgb-blue py-4 px-2 lg:w-4/5 md:flex-row md:rounded">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-white font-bold text-2xl mb-2">Metal Guitar Store</h3>
                        <p className="text-white text-lg lg:px-10">The "Metal Guitar Store" is a front-end web app.<br/> <span className="font-bold text-yellow-800">HTML CSS JS </span></p>
                    <a href="https://metal-store-mp.netlify.app/"  target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer zoomImg rounded-2xl" src="metalStore.png" alt="guitar-store"  />
                    </a>
                </div>
                </div>

       </div>
       
    );
}
