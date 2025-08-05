"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, TeamMemberCard, StatCard, FadeIn, SlideUp, SlideInLeft, SlideInRight, StaggerContainer } from "@/components/ui";

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header currentPage="about" />

            <div className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-12 sm:py-16 md:py-20 animate-gradient">
                    <div className="container mx-auto px-4 text-center">
                        <FadeIn>
                            <SlideUp>
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Kavi Hangbro</h1>
                            </SlideUp>
                            <SlideUp delay={0.2}>
                                <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                                    Your trusted partner for premium quality hangers and garment storage solutions. 
                                    We specialize in crafting durable, stylish hangers for all your clothing needs.
                                </p>
                            </SlideUp>
                        </FadeIn>
                    </div>
                </section>

                {/* Company Story */}
                <section className="py-12 sm:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <SlideInLeft>
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
                                    <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                                        <p>
                                            Founded with a passion for quality and innovation, Kavi Hangbro has been serving customers 
                                            with premium hanger solutions for over two decades. What started as a small family business 
                                            has grown into a trusted name in the garment storage industry.
                                        </p>
                                        <p>
                                            We understand that proper garment care begins with the right hanger. That's why we've 
                                            dedicated ourselves to creating hangers that not only preserve the shape and quality of 
                                            your clothes but also enhance your closet organization.
                                        </p>
                                        <p>
                                            From wooden suit hangers to velvet non-slip designs, every product in our collection is 
                                            carefully crafted with attention to detail and built to last. We believe in sustainable 
                                            practices and use eco-friendly materials wherever possible.
                                        </p>
                                    </div>
                                </div>
                            </SlideInLeft>
                            <SlideInRight>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 sm:p-8 h-80 sm:h-96 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl sm:text-6xl mb-4">👔</div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Quality Craftsmanship</h3>
                                            <p className="text-gray-600 text-sm sm:text-base">Premium hangers for every garment type</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInRight>
                        </div>
                    </div>
                </section>

                {/* Values & Mission */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
                                <div className="text-3xl sm:text-4xl mb-4">🌱</div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    We're committed to eco-friendly practices, using sustainable materials and 
                                    manufacturing processes to minimize our environmental impact.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center">
                                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quality Excellence</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Every hanger is crafted with precision and attention to detail, ensuring 
                                    durability and functionality that exceeds expectations.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center md:col-span-2 xl:col-span-1">
                                <div className="text-3xl sm:text-4xl mb-4">🤝</div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    We listen to our customers' needs and continuously innovate to provide 
                                    solutions that make garment care easier and more effective.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-8 sm:mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact</h2>
                                <p className="text-lg sm:text-xl opacity-90">Trusted by customers worldwide</p>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.2}>
                            <StatCard value="23+" label="Years Experience" />
                            <StatCard value="5,000+" label="Happy Clients" />
                            <StatCard value="25" label="Countries" />
                            <StatCard value="50M+" label="Products Made" />
                        </StaggerContainer>
                    </div>
                </section>

                {/* Product Categories */}
                <section className="py-12 sm:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8 sm:mb-12">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                                Comprehensive hanger solutions for every need
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            <Card variant="colored" color="pink">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Premium Materials</h3>
                                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                    <li>• High-quality wooden hangers</li>
                                    <li>• Durable plastic options</li>
                                    <li>• Elegant metal designs</li>
                                    <li>• Luxurious velvet finishes</li>
                                    <li>• Space-saving wire hangers</li>
                                </ul>
                            </Card>

                            <Card variant="colored" color="blue">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Garment Types</h3>
                                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                    <li>• Professional suit hangers</li>
                                    <li>• Delicate dress hangers</li>
                                    <li>• Casual shirt hangers</li>
                                    <li>• Heavy coat hangers</li>
                                    <li>• Specialized trouser hangers</li>
                                </ul>
                            </Card>

                            <Card variant="colored" color="green">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Special Features</h3>
                                <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                                    <li>• Non-slip surfaces</li>
                                    <li>• 360-degree swivel hooks</li>
                                    <li>• Adjustable clips</li>
                                    <li>• Space-efficient designs</li>
                                    <li>• Custom branding options</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12 sm:py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-8 sm:mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                                <p className="text-lg sm:text-xl text-gray-600">Meet the people behind our success</p>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
                            <TeamMemberCard
                                name="Kavi Sharma"
                                position="Founder & CEO"
                                description="Visionary leader with over 25 years of experience in the garment accessories industry."
                                initials="KS"
                                avatarBgColor="pink"
                            />

                            <TeamMemberCard
                                name="Priya Patel"
                                position="Quality Manager"
                                description="Ensures every hanger meets our exacting standards for durability and craftsmanship."
                                initials="PP"
                                avatarBgColor="blue"
                            />

                            <TeamMemberCard
                                name="Raj Kumar"
                                position="Design Specialist"
                                description="Creates innovative hanger designs that combine functionality with aesthetic appeal."
                                initials="RK"
                                avatarBgColor="green"
                            />
                        </StaggerContainer>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-12 sm:py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Upgrade Your Closet?</h2>
                        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Discover our premium collection of hangers designed to keep your garments looking their best. 
                            From everyday essentials to luxury pieces, we have the perfect hanger for every item in your wardrobe.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                            <Button
                                href="/catalogue"
                                variant="secondary"
                                size="lg"
                                className="bg-white text-pink-600 hover:bg-gray-100"
                            >
                                Browse Products
                            </Button>
                            <Button
                                href="/contact"
                                variant="outline"
                                size="lg"
                                className="border-white text-white hover:!bg-white hover:!text-pink-600 hover:!border-white transition-colors duration-200"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
