export default function Contact() {
    return (
        <div id="contact" className="flex flex-col items-center justify-center mt-4 mb-4 text-center p-5 bg-white w-3/4 mx-auto rounded-3xl">
            <h1 className="font-bold text-4xl p-6">Get in touch</h1>
            <p className="p-4 text-xl">I&apos;m currently looking for opportunities. Whether it&apos;s a Full-Time Job or a Freelance work. Send me a message,<br/> I&apos;ll try to get back to you as soon as possible.
</p>
            <div className="rounded-3xl p-3">
                <button className="flex items-center justify-between px-3 py-4 gap-4 text-xl font-bold bg-rgb-blue rounded-xl zoom text-white">
                    Contact me 
                    <img className="w-10 h-10" src="email.webp" />
                </button>
            </div>
        </div>
    );
}
