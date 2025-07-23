"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type EnquiryItem = {
    id: number;
    name: string;
    category: string;
    image?: string;
};

export default function Enquiry() {
    const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
    const [customerInfo, setCustomerInfo] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        estimatedQuantity: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        // Load enquiry items from localStorage on component mount
        const savedEnquiry = localStorage.getItem("enquiryItems");
        if (savedEnquiry) {
            setEnquiryItems(JSON.parse(savedEnquiry));
        }
    }, []);

    const removeItem = (id: number) => {
        const updatedItems = enquiryItems.filter(item => item.id !== id);
        setEnquiryItems(updatedItems);
        localStorage.setItem("enquiryItems", JSON.stringify(updatedItems));
    };

    const clearEnquiry = () => {
        setEnquiryItems([]);
        localStorage.removeItem("enquiryItems");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (you can integrate with your backend or email service)
        setTimeout(() => {
            alert(`Thank you, ${customerInfo.name}! Your enquiry has been submitted successfully. We'll get back to you soon.`);

            // Clear the form and enquiry
            setCustomerInfo({
                name: "",
                email: "",
                phone: "",
                company: "",
                message: "",
                estimatedQuantity: ""
            });
            clearEnquiry();
            setIsSubmitting(false);
        }, 2000);
    };

    const getTotalItems = () => {
        return enquiryItems.length;
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header currentPage="enquiry" />

            <div className="container mx-auto px-4 py-12 text-black flex-1">
                <h1 className="text-4xl font-bold text-center mb-12">Product Enquiry</h1>                {enquiryItems.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="mb-4">
                            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Your enquiry list is empty</h3>
                        <p className="text-gray-500 mb-6">Browse our catalogue and add products to your enquiry.</p>
                        <a
                            href="/catalogue"
                            className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors inline-block"
                        >
                            Browse Catalogue
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Enquiry Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">Selected Products ({getTotalItems()} items)</h2>
                                    <button
                                        onClick={clearEnquiry}
                                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                                    >
                                        Clear All
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    {enquiryItems.map((item) => (
                                        <div key={item.id} className="flex items-center border-b pb-4">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                                            ) : (
                                                <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                                                    <span className="text-gray-500 text-xs">No Image</span>
                                                </div>
                                            )}

                                            <div className="flex-1 ml-4">
                                                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.category}</p>
                                            </div>

                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Customer Information Form */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                                <form onSubmit={handleSubmit} className="space-y-4" netlify>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={customerInfo.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={customerInfo.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={customerInfo.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={customerInfo.company}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="Your company name (optional)"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Estimated Order Quantity *
                                        </label>
                                        <input
                                            type="text"
                                            name="estimatedQuantity"
                                            value={customerInfo.estimatedQuantity}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="e.g., 100 pieces, 50 dozen, 200 units"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">
                                            Please specify your estimated quantity needs for all selected products
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Additional Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={customerInfo.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            placeholder="Any specific requirements or questions..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                                    </button>
                                </form>

                                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                                    <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
                                    <ul className="text-sm text-blue-800 space-y-1">
                                        <li>• We&apos;ll review your enquiry within 24 hours</li>
                                        <li>• Our team will contact you with pricing</li>
                                        <li>• We&apos;ll discuss delivery options</li>
                                        <li>• Custom solutions available on request</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
