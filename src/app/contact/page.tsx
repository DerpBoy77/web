
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input, Textarea, Button, Card } from "@/components/ui";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header currentPage="contact" />

            <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16 text-black flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">Contact Us</h1>
                <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">We&apos;d love to hear from you. Please fill out the form below.</p>

                <div className="max-w-2xl mx-auto">
                    <Card variant="colored" color="gray" padding="lg">
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    required
                                />
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    name="email"
                                    required
                                />
                            </div>
                            <Input
                                type="text"
                                placeholder="Subject"
                                name="subject"
                                required
                            />
                            <Textarea
                                placeholder="Your Message"
                                rows={5}
                                name="message"
                                required
                            />
                            <Button
                                type="submit"
                                fullWidth
                                size="lg"
                                className="text-sm sm:text-base"
                            >
                                Send Message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>

            <Footer />
        </div>
    );
}
