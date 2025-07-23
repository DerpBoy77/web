"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header currentPage="about" />

            <div className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-5xl font-bold mb-6">About Our Company</h1>
                        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.
                        </p>
                    </div>
                </section>

                {/* Company Story */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                            <div className="relative">
                                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🏭</div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Lorem Ipsum</h3>
                                        <p className="text-gray-600">Dolor sit amet consectetur adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
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
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
                            <p className="text-xl opacity-90">Lorem ipsum dolor sit amet</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">23+</div>
                                <p className="opacity-90">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">5,000+</div>
                                <p className="opacity-90">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">25</div>
                                <p className="opacity-90">Countries</p>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">50M+</div>
                                <p className="opacity-90">Products Made</p>
                            </div>
                        </div>
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
                            <div className="bg-pink-50 border border-pink-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category One</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lorem ipsum dolor sit amet</li>
                                    <li>• Consectetur adipiscing elit</li>
                                    <li>• Sed do eiusmod tempor</li>
                                    <li>• Incididunt ut labore</li>
                                    <li>• Et dolore magna aliqua</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category Two</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Ut enim ad minim veniam</li>
                                    <li>• Quis nostrud exercitation</li>
                                    <li>• Ullamco laboris nisi</li>
                                    <li>• Ut aliquip ex ea commodo</li>
                                    <li>• Consequat duis aute</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Category Three</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Irure dolor in reprehenderit</li>
                                    <li>• In voluptate velit esse</li>
                                    <li>• Cillum dolore eu fugiat</li>
                                    <li>• Nulla pariatur excepteur</li>
                                    <li>• Sint occaecat cupidatat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
                            <p className="text-xl text-gray-600">Meet the people behind our success</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    JS
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">John Smith</h3>
                                <p className="text-pink-600 font-medium mb-3">Lorem Ipsum Director</p>
                                <p className="text-gray-600 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    JD
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Jane Doe</h3>
                                <p className="text-blue-600 font-medium mb-3">Lorem Manager</p>
                                <p className="text-gray-600 text-sm">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                                </p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                                    MJ
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Mike Johnson</h3>
                                <p className="text-green-600 font-medium mb-3">Lorem Specialist</p>
                                <p className="text-gray-600 text-sm">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                </p>
                            </div>
                        </div>
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
                            <a
                                href="/catalogue"
                                className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Browse Products
                            </a>
                            <a
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
