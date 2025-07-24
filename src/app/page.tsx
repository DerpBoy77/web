
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, FeatureCard, FadeIn, SlideUp, Float, StaggerContainer } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      <Header currentPage="home" />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 sm:py-20 px-4 text-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Background shapes */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Float duration={4} delay={0}>
            <div className="absolute top-10 left-4 sm:left-10 w-24 sm:w-32 h-24 sm:h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
          </Float>
          <Float duration={5} delay={1}>
            <div className="absolute bottom-20 right-4 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
          </Float>
          <Float duration={3} delay={0.5}>
            <div className="absolute top-1/3 right-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-orange-300 rounded-full opacity-25 blur-lg"></div>
          </Float>
          <Float duration={6} delay={2}>
            <div className="absolute bottom-1/3 left-1/4 w-28 sm:w-36 h-28 sm:h-36 bg-pink-300 rounded-full opacity-15 blur-xl"></div>
          </Float>
        </div>

        <FadeIn className="z-10 max-w-6xl mx-auto">
          <SlideUp delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-gray-900 leading-tight">
              The Ultimate Garment Hanger<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Collection for Your Business
            </h1>
          </SlideUp>
          <SlideUp delay={0.4}>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-600 max-w-3xl mx-auto">The ultimate solution for your garment display needs</p>
          </SlideUp>
          <SlideUp delay={0.6}>
            <Button href="/catalogue" size="lg" className="shadow-lg hover-glow text-sm sm:text-base">
              View Catalogue
            </Button>
          </SlideUp>
        </FadeIn>
        {/* Placeholder for hanger images */}
        <div className="absolute bottom-10 right-4 sm:right-10 z-0 opacity-80">
          {/* <Image src="/hangers.png" alt="Hangers" width={400} height={300} /> */}
        </div>
      </main>
      {/* Quote Section */}
      <FadeIn>
        <section className="w-full py-12 sm:py-16 px-4 text-center bg-gray-50">
          <SlideUp>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl md:text-2xl italic text-gray-600 leading-relaxed">&quot;Fashion is not something that exists in dresses only. Fashion is in the sky, in the street, fashion has to do with ideas, the way we live, what is happening.&quot;</p>
              <p className="mt-4 font-semibold text-sm sm:text-base">- Coco Chanel</p>
            </div>
          </SlideUp>
          <div className="mt-8 sm:mt-12">
            {/* <Image src="/grs-logo.png" alt="Global Recycled Standard" width={150} height={75} /> */}
          </div>
        </section>
      </FadeIn>


      {/* Why Work with us? Section */}
      <section className="w-full py-16 sm:py-20 px-4 bg-gray-50 text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Work with us?</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto mb-8 sm:mb-12"></div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-6xl mx-auto" staggerDelay={0.15}>
          <FeatureCard
            title="Quality Products"
            description="We're dedicated to crafting high-quality garment hangers that are built to last."
          />
          <FeatureCard
            title="Quick Turnaround Time"
            description="We work to get your order to you as quickly as possible, without compromising on quality."
          />
          <FeatureCard
            title="Experience"
            description="Our team has the expertise and knowledge needed to craft hangers that meet your unique needs."
          />
          <FeatureCard
            title="Competitive Pricing"
            description="We offer competitive pricing on all our hangers, without compromising on quality."
          />
          <FeatureCard
            title="Sustainability"
            description="We use eco-friendly materials and production methods whenever possible."
          />
          <FeatureCard
            title="Customization Options"
            description="We'll work with you to create a custom hanger that reflects your unique style."
          />
        </StaggerContainer>
      </section>

      {/* FAQ/Contact Section */}
      <FadeIn>
        <section className="w-full py-12 sm:py-16 px-4 bg-gray-50 text-center">
          <SlideUp>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Have questions? we have answers!</h2>
            <p className="text-base sm:text-lg mb-6 text-gray-600">Get answers about Pricing, Specifications, and more</p>
          </SlideUp>
          <SlideUp delay={0.2}>
            <Button href="/contact" size="lg" className="shadow-lg hover-glow text-sm sm:text-base">
              CONTACT NOW
            </Button>
          </SlideUp>
        </section>
      </FadeIn>

      <Footer />
    </div>
  );
}
