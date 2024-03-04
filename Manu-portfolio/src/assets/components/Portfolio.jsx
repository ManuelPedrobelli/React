export default function Portfolio() {
    return (
       <div id="portfolio" className="redondear border border-white flex flex-col items-center justify-center gap-16 px-6 py-6 mx-auto  gap-12">
            
            <h1 className="text-4xl text-white w-1/3 font-bold text-center    p-2">Portfolio</h1>

            <div id="trivia" className="redondear fondoAzulado flex flex-col items-center justify-center gap-5 fondoNegro py-4 px-2 md:flex-row ">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-white font-bold text-2xl mb-2">Trivia game</h3>
                    <p className="text-white text-lg lg:px-10">Multiplayer game with a dice and a board, you have to roll the dice and answer questions until you reach the final cell and win.<br/> <span className="font-bold text-white">HTML CSS JS Node Express</span></p>
                    <a href="https://trivia-unlp-pedrobelli.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer zoomImg rounded-2xl" src="trivia.png" alt="trivia-game" />
                    </a>
                </div>
            </div>

            
            <div id="guitar-store" className="redondear fondoAzulado flex flex-col items-center justify-center gap-5 fondoNegro py-4 px-2 md:flex-row  ">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-white font-bold text-2xl mb-2">Guitar Store</h3>
                    <p className="text-white text-lg lg:px-10">I like to play guitar, so i made the online guitar store i would like to have someday.I made the backend with an API and consume<br/> <span className="font-bold text-white">HTML CSS JS Node Express</span></p>
                    <a href="https://metalguitars-mp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer zoomImg rounded-2xl" src="./public/metalStore.png" alt="trivia-game" />
                    </a>
                </div>
            </div>
            
                

       </div>
       
    );
}
