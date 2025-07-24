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
                <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 animate-gradient">
                    <div className="container mx-auto px-4 text-center">
                        <FadeIn>
                            <SlideUp>
                                <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
                            </SlideUp>
                            <SlideUp delay={0.2}>
                                <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.
                                </p>
                            </SlideUp>
                        </FadeIn>
                    </div>
                </section>

                {/* Company Story */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <SlideInLeft>
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                                    <div className="space-y-4 text-gray-600 leading-relaxed">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                    </div>
                                </div>
                            </SlideInLeft>
                            <SlideInRight>
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-6xl mb-4">🏭</div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lorem Ipsum</h3>
                                            <p className="text-gray-600">Dolor sit amet consectetur adipiscing elit</p>
                                        </div>
                                    </div>
                                </div>
                            </SlideInRight>
                        </div>
                    </div>
                </section>

                {/* Values & Mission */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet consectetur adipiscing
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                                <div className="text-4xl mb-4">🌱</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Lorem Ipsum</h3>
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                                <div className="text-4xl mb-4">⭐</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Dolor Sit</h3>
                                <p className="text-gray-600">
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                                <div className="text-4xl mb-4">🤝</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Consectetur</h3>
                                <p className="text-gray-600">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
                                <p className="text-xl opacity-90">Lorem ipsum dolor sit amet</p>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.2}>
                            <StatCard value="23+" label="Years Experience" />
                            <StatCard value="5,000+" label="Happy Clients" />
                            <StatCard value="25" label="Countries" />
                            <StatCard value="50M+" label="Products Made" />
                        </StaggerContainer>
                    </div>
                </section>

                {/* Product Categories */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card variant="colored" color="pink">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category One</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lorem ipsum dolor sit amet</li>
                                    <li>• Consectetur adipiscing elit</li>
                                    <li>• Sed do eiusmod tempor</li>
                                    <li>• Incididunt ut labore</li>
                                    <li>• Et dolore magna aliqua</li>
                                </ul>
                            </Card>

                            <Card variant="colored" color="blue">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category Two</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Ut enim ad minim veniam</li>
                                    <li>• Quis nostrud exercitation</li>
                                    <li>• Ullamco laboris nisi</li>
                                    <li>• Ut aliquip ex ea commodo</li>
                                    <li>• Consequat duis aute</li>
                                </ul>
                            </Card>

                            <Card variant="colored" color="green">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category Three</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Irure dolor in reprehenderit</li>
                                    <li>• In voluptate velit esse</li>
                                    <li>• Cillum dolore eu fugiat</li>
                                    <li>• Nulla pariatur excepteur</li>
                                    <li>• Sint occaecat cupidatat</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <FadeIn>
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                                <p className="text-xl text-gray-600">Meet the people behind our success</p>
                            </div>
                        </FadeIn>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
                            <TeamMemberCard
                                name="John Smith"
                                position="Lorem Ipsum Director"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                                initials="JS"
                                avatarBgColor="pink"
                            />

                            <TeamMemberCard
                                name="Jane Doe"
                                position="Lorem Manager"
                                description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
                                initials="JD"
                                avatarBgColor="blue"
                            />

                            <TeamMemberCard
                                name="Mike Johnson"
                                position="Lorem Specialist"
                                description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
                                initials="MJ"
                                avatarBgColor="green"
                            />
                        </StaggerContainer>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl font-bold mb-6">Lorem Ipsum Dolor Sit?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
