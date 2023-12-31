export default function Portfolio() {
    return (
       <div id="portfolio" className="flex flex-col items-center justify-center bg-white mt-8 px-8 py-8">
            <h1 className="text-4xl font-bold text-center p-6">Portfolio</h1>
            <div id="trivia" className="flex flex-col items-center justify-center gap-5 bg-rgb-blue py-8 px-6 lg:w-4/5 rounded-3xl md:flex-row">
            
                
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className=" font-bold text-2xl text-white mb-2">Trivia game</h3>
                    <p className="text-white lg:px-10">Multiplayer game with a dice and a board, you have to roll the dice and answer questions until you reach the final cell and win.<br/> <span className="font-bold text-yellow-100">HTML CSS Vanilla JS Node Express</span></p>
                </div>
                <img className="w-80 h-120 cursor-pointer zoomImg rounded-2xl" src="trivia.png" alt="trivia-game" href="#" />
            
            </div>
       </div>
    );
}
