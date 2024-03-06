export default function Portfolio() {
    return (
       <div id="portfolio" className="flex flex-col items-center justify-center gap-16 p-6 mx-auto  gap-12">
            <h2 className="text-6xl text-white w-1/3 font-bold text-center p-2">Portfolio</h2>
           
           <div className="flex flex-col items-center justify-center gap-8"> 

            <div id="trivia" className="w-1/3 h-96 redondear fondoProyectos flex flex-col items-center justify-center gap-5 fondoNegro p-2 md:flex-row ">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className=" font-bold text-2xl mb-2">Trivia game</h3>
                    <p className=" text-lg lg:px-10">Multiplayer game with a dice and a board, you have to roll the dice and answer questions until you reach the final cell and win.<br/> <span className="font-bold">HTML CSS JS Node Express</span></p>
                    <a href="https://trivia-unlp-pedrobelli.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer rounded-2xl" src="trivia.png" alt="trivia-game" />
                    </a>
                </div>
            </div>

            
            <div id="guitar-store" className="w-1/3 h-96 redondear fondoProyectos flex flex-col items-center justify-center gap-5 fondoNegro p-2 md:flex-row">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h3 className=" font-bold text-2xl mb-2">Guitar Store</h3>
                    <p className=" text-lg lg:px-10">I like to play guitar, so i made the online guitar store i would like to have someday.I made the backend with an API and consume<br/> <span className="font-bold">HTML CSS JS Node Express</span></p>
                    <a href="https://metalguitars-mp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="w-80 h-120 cursor-pointer rounded-2xl" src="./public/metalStore.png" alt="trivia-game" />
                    </a>
                </div>
            </div>
          </div>  
            
                

       </div>
       
    );
}
