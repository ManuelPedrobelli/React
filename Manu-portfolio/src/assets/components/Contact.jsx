export default function Contact({ text }) {
    return (
        <div id="contact" className="mt-4 flex color2 flex-col items-center justify-center text-center mb-8 p-5 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-4xl md:text-6xl mb-4 p-4">{text.text}</h2>
            <div className="redondear2 flex flex-col items-center mt-4 px-4 w-full">
                <div className="w-full">
                    <form className="flex flex-col p-6 rounded-xl gap-4 text-white text-lg md:text-2xl bg-gray-800 w-full" action="https://formsubmit.co/manupedrob@gmail.com" method="POST">
                        <label htmlFor="name" className="text-left">{text.name}</label>
                        <input className="text-black p-2 rounded-md" type="text" name="name" required />

                        <label htmlFor="email" className="text-left">E-mail</label>
                        <input className="text-black p-2 rounded-md" type="email" name="email" required />

                        <label htmlFor="comments" className="text-left">{text.comment}</label>
                        <textarea className="text-black p-2 rounded-md" name="comments" cols="30" rows="5"></textarea>

                        <input className="py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl cursor-pointer" type="submit" value={text.send} />
                    </form>
                </div>
            </div>
        </div>
    );
}
