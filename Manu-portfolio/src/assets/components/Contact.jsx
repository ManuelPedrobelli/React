export default function Contact({ text }) {
    return (
        <div
            id="contact"
            className="mt-12 mb-16 px-4 md:px-6 w-full max-w-2xl mx-auto text-center"
        >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-lg">
                {text.text}
            </h2>
            <form
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-6 md:p-8 rounded-2xl shadow-2xl text-white text-base md:text-lg flex flex-col gap-6"
                action="https://formsubmit.co/manupedrob@gmail.com"
                method="POST"
            >
                <div className="flex flex-col text-left">
                    <label htmlFor="name" className="font-semibold mb-1">
                        {text.name}
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label htmlFor="email" className="font-semibold mb-1">
                        E-mail
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="p-3 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <div className="flex flex-col text-left">
                    <label htmlFor="comments" className="font-semibold mb-1">
                        {text.comment}
                    </label>
                    <textarea
                        id="comments"
                        name="comments"
                        rows="5"
                        placeholder="Write your message..."
                        className="p-3 rounded-lg border border-gray-300 text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                <input
                    type="submit"
                    value={text.send}
                    className="mt-4 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                />

                {/* Hidden fields */}
                <input type="hidden" name="_next" value="https://manupedrobcv.onrender.com/" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </div>
    );
}
