"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, Card, Input, Textarea, EmptyState } from "@/components/ui";

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
                    <EmptyState
                        icon={
                            <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        }
                        title="Your enquiry list is empty"
                        description="Browse our catalogue and add products to your enquiry."
                        action={
                            <Button href="/catalogue" className="transform-none hover:transform-none hover:shadow-none">
                                Browse Catalogue
                            </Button>
                        }
                    />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Enquiry Items */}
                        <div className="lg:col-span-2">
                            <Card className="card-no-hover">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold">Selected Products ({getTotalItems()} items)</h2>
                                    <Button
                                        onClick={clearEnquiry}
                                        variant="danger"
                                        size="sm"
                                        className="transform-none hover:transform-none hover:shadow-none"
                                    >
                                        Clear All
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {enquiryItems.map((item, index) => (
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
                                                <Button
                                                    onClick={() => removeItem(item.id)}
                                                    variant="danger"
                                                    size="sm"
                                                    className="transform-none hover:transform-none hover:shadow-none"
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>                        {/* Customer Information Form */}
                        <div className="lg:col-span-1 lg:sticky lg:top-8 self-start">
                            <Card className="card-no-hover">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                                <form onSubmit={handleSubmit} className="space-y-4" data-netlify="true">
                                    <Input
                                        label="Full Name"
                                        type="text"
                                        name="name"
                                        value={customerInfo.name}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="Your full name"
                                    />

                                    <Input
                                        label="Email Address"
                                        type="email"
                                        name="email"
                                        value={customerInfo.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your.email@example.com"
                                    />

                                    <Input
                                        label="Phone Number"
                                        type="tel"
                                        name="phone"
                                        value={customerInfo.phone}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="+1 (555) 123-4567"
                                    />

                                    <Input
                                        label="Company Name"
                                        type="text"
                                        name="company"
                                        value={customerInfo.company}
                                        onChange={handleInputChange}
                                        placeholder="Your company name (optional)"
                                    />

                                    <div className="space-y-1">
                                        <Input
                                            label="Estimated Order Quantity"
                                            type="text"
                                            name="estimatedQuantity"
                                            value={customerInfo.estimatedQuantity}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="e.g., 100 pieces, 50 dozen, 200 units"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Please specify your estimated quantity needs for all selected products
                                        </p>
                                    </div>

                                    <Textarea
                                        label="Additional Message"
                                        name="message"
                                        value={customerInfo.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        placeholder="Any specific requirements or questions..."
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        loading={isSubmitting}
                                        fullWidth
                                        size="lg"
                                        className="transform-none hover:transform-none hover:shadow-none hover:none"
                                    >
                                        Submit Enquiry
                                    </Button>
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
                            </Card>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
