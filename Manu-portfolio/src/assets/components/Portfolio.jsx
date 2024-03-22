export default function Portfolio() {
    return (
       <div id="portfolio" className=" flex flex-col color2 redondear items-center justify-center gap-2 p-2 mx-auto mb-12 ">
            <h2 className="text-6xl w-1/3 font-bold text-center p-2">Portfolio</h2>
           
           <div className="flex flex-row color2 redondear items-start px-4 justify-center gap-12"> 

            <div id="trivia" className="w-2/3  color3 flex flex-col items-center justify-center gap-5 p-4 md:flex-row mt-4 mb-4 ml-6">
                <div className=" flex flex-col items-center justify-center h-120">
                    <h2 className=" font-bold text-4xl mb-2">Trivia game</h2>
                    <a href="https://trivia-unlp-pedrobelli.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer rounded-2xl h-60 mb-4" src="trivia.png" alt="trivia-game" />
                    </a>
                    <p className="text-lg text-left px-4 overflow-auto">Q&A game I built while taking the JavaScript Seminar course.<br/>The backend is built on Node.js and Express.<br/>It features an online multiplayer connection to allow playing a game online from different computers.<br/></p>
                </div>
            </div>

            
            <div id="guitar-store" className="w-2/3  color3 flex flex-col items-center justify-center gap-5 p-4 md:flex-row mt-4 mb-4 mr-6">
                <div className=" flex flex-col items-center justify-center h-120">
                    <h2 className="font-bold text-4xl mb-2">Guitar Store</h2>
                    <a href="https://metalguitars-mp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="cursor-pointer rounded-2xl h-60 mb-4" src="metalStore.png" alt="guitar-store" />
                    </a>
                    <p className="text-lg text-left px-4 overflow-auto">I enjoy playing the guitar, so I had the idea of creating a virtual store with my favorite guitars and musical equipment. At the moment, it's just a front-end project done in JavaScript. It's an API built in Express being consumed by the front-end with vanilla JS.</p>
                </div>
            </div>
       
          </div>  
       </div>
    );
}
