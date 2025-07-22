
export default function Contact() {
    return (
        <div className="bg-white">
            {/* Header */}
            <header className="w-full py-4 px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
                <div className="text-2xl font-bold tracking-wide text-gray-900">Kavi Hangbro</div>
                <nav className="hidden md:flex items-center space-x-4 text-base font-medium">
                    <a href="/" className="text-gray-700 hover:text-pink-500">Home</a>
                    <a href="/about" className="text-gray-700 hover:text-pink-500">About</a>
                    <a href="/catalogue" className="text-gray-700 hover:text-pink-500">Catalogue</a>
                    <a href="/enquiry" className="text-gray-700 hover:text-pink-500">Enquiry</a>
                    <a
                        href="/contact"
                        className="bg-pink-500 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:bg-pink-600 transition"
                    >
                        CONTACT
                    </a>
                </nav>
            </header>

            <div className="container mx-auto px-4 py-16 text-black">
                <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-lg text-center text-gray-600 mb-12">We'd love to hear from you. Please fill out the form below.</p>

                <div className="max-w-2xl mx-auto">
                    <form className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full p-3 border rounded-md mb-6" />
                        <textarea placeholder="Your Message" rows={5} className="w-full p-3 border rounded-md mb-6"></textarea>
                        <button type="submit" className="w-full bg-pink-500 text-white font-bold py-3 rounded-md hover:bg-pink-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-8 px-4 bg-gray-800 text-center text-sm text-gray-300">
                <div>695, Pace City 2, Gurugram, Haryana, India | Phone +91 9910233400 | Email: kavihangbro@gmail.com</div>
                <div className="mt-4">Copyright © 2025 Kavi Hangbro</div>
            </footer>
        </div>
    );
}
