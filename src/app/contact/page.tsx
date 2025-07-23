
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header currentPage="contact" />

            <div className="container mx-auto px-4 py-16 text-black flex-1">
                <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-lg text-center text-gray-600 mb-12">We&apos;d love to hear from you. Please fill out the form below.</p>

                <div className="max-w-2xl mx-auto">
                    <form className="bg-gray-50 p-8 rounded-lg shadow-md" data-netlify="true" name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 border rounded-md"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-3 border rounded-md"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full p-3 border rounded-md mb-6"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-3 border rounded-md mb-6"
                            required
                        ></textarea>
                        <button type="submit" className="w-full bg-pink-500 text-white font-bold py-3 rounded-md hover:bg-pink-600 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}
