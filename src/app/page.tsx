
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Header currentPage="home" />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center relative overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-purple-500 rounded-full opacity-50 transform rotate-45"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-blue-500 rounded-full opacity-50 transform rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-orange-300 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-gray-900">The Ultimate Garment Hanger<br />Collection for Your Business</h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-600">The ultimate solution for your garment display needs</p>
          <a
            href="/catalogue"
            className="inline-block bg-pink-500 text-white font-bold rounded-md px-10 py-4 shadow-lg hover:bg-blue-700 transition text-lg"
          >
            View Catalogue
          </a>
        </div>
        {/* Placeholder for hanger images */}
        <div className="absolute bottom-10 right-10 z-0 opacity-80">
          {/* <Image src="/hangers.png" alt="Hangers" width={400} height={300} /> */}
        </div>
      </main>
      {/* Quote Section */}
      <section className="w-full py-16 px-4 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl italic text-gray-600">"Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening."</p>
          <p className="mt-4 font-semibold">- Coco Chanel</p>
        </div>
        <div className="mt-12">
          {/* <Image src="/grs-logo.png" alt="Global Recycled Standard" width={150} height={75} /> */}
        </div>
      </section>


      {/* Why Work with us? Section */}
      <section className="w-full py-20 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Work with us?</h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {renderFeature("Quality Products", "We're dedicated to crafting high-quality garment hangers that are built to last.")}
          {renderFeature("Quick Turnaround Time", "We work to get your order to you as quickly as possible, without compromising on quality.")}
          {renderFeature("Experience", "Our team has the expertise and knowledge needed to craft hangers that meet your unique needs.")}
          {renderFeature("Competitive Pricing", "We offer competitive pricing on all our hangers, without compromising on quality.")}
          {renderFeature("Sustainability", "We use eco-friendly materials and production methods whenever possible.")}
          {renderFeature("Customization Options", "We'll work with you to create a custom hanger that reflects your unique style.")}
        </div>
      </section>



      {/* FAQ/Contact Section */}
      <section className="w-full py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-2">Have questions? we have answers!</h2>
        <p className="text-lg mb-6 text-gray-600">Get answers about Pricing, Specifications, and more</p>
        <a
          href="/contact"
          className="inline-block bg-pink-500 text-white font-bold rounded-md px-8 py-3 shadow-lg hover:bg-pink-600 transition text-lg"
        >
          CONTACT NOW
        </a>
      </section>

      <Footer />
    </div>
  );
}

function renderFeature(title: string, description: string) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-pink-500 text-white rounded-full p-4 mb-4">
        {/* Placeholder for icon */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
