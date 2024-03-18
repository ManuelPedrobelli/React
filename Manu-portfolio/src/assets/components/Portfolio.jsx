export default function Portfolio() {
    return (
       <div id="portfolio" className="flex flex-col items-center justify-center gap-2 p-2 mx-auto text-white h-120 gap-12">
            <h2 className="text-6xl text-white w-1/3 font-bold text-center p-2">Portfolio</h2>
           
           <div className="flex flex-col fondoSecundario redondear items-center justify-center gap-2"> 

            <div id="trivia" className="w-2/3 redondear fondoNav flex flex-col items-center justify-center gap-5 p-6 md:flex-row mt-4 mb-4">
                <div className="flex flex-col items-center justify-center text-left gap-4">
                    <h2 className=" font-bold text-4xl ">Trivia game</h2>
                    <a href="https://trivia-unlp-pedrobelli.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className=" h-120 cursor-pointer rounded-2xl" src="trivia.png" alt="trivia-game" />
                    </a>
                    <p className=" text-lg flex justify-start lg:px-10 p-2">This is an application I built while taking the JavaScript Seminar course, which is a Q&A game.<br></br> The backend is built on Node.js and Express, and the frontend with HTML, CSS, and vanilla JavaScript.<br></br> It features an online multiplayer connection to allow playing a game online from different computers.<br></br> I faced many challenges to make it work correctly and learned many things along the way.<br/></p>
                </div>
            </div>

            
            <div id="guitar-store" className="w-2/3 redondear fondoNav flex flex-col items-center justify-center gap-5 p-6 md:flex-row mt-4 mb-4">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                    <h2 className=" font-bold text-4xl">Guitar Store</h2>
                    <a href="https://metalguitars-mp.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className=" h-120 cursor-pointer rounded-2xl" src="./public/metalStore.png" alt="trivia-game" />
                    </a>
                    <p className=" text-lg lg:px-10">I enjoy playing the guitar, so I had the idea of creating a virtual store with my favorite guitars and musical equipment. At the moment, it's just a front-end project done in JavaScript. It's an API built in Express being consumed by the front-end with vanilla JS.<br/></p>
                </div>
            </div>
          </div>  
       </div>
       
    );
}
