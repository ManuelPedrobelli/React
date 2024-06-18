

export default function Contact({text}) {

    return (
        <div id="contact" className="mt-4 flex color2 flex-col items-center justify-center text-center mb-8 p-5 mx-auto ">
            <h2 className="font-bold text-4xl md:text-6xl mb-4 p-4">{text.text}</h2>
            <div className="redondear2 flex flex-col items-center mt-4 px-4">
                <div className="">
                    <form className="flex flex-col p-6 rounded-xl gap-2 text-white text-2xl" action="https://formsubmit.co/manupedrob@gmail.com" method="POST">
                        <label for="name">{text.name}</label>
                        <input className="text-black" type="text" name="name" required></input>

                        <label for="email">E-mail</label>
                        <input className="text-black" type="email" name="email" required></input>

                        <label for="comments">{text.comment}</label>
                        <textarea className="text-black" name="comments" cols="15" rows="5"></textarea>

                        <input className="py-4 mt-4 bg-blue-500 rounded-xl" type="submit" value={text.send}></input>
                    </form>
              </div>
            </div>
        </div>
    );
}
