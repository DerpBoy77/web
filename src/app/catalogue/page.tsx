"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Product = { id: number; name: string; category: string; image?: string };
type EnquiryItem = Product & { quantity: number };

export default function Catalogue() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState({
        hangerType: [] as string[],
        garmentType: [] as string[],
        hookType: [] as string[]
    });
    const [sortBy, setSortBy] = useState("default");
    const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setFilteredProducts(data);
            });

        // Load enquiry items from localStorage
        const savedEnquiry = localStorage.getItem("enquiryItems");
        if (savedEnquiry) {
            const parsedEnquiry: Product[] = JSON.parse(savedEnquiry);
            setEnquiryItems(parsedEnquiry.map(item => ({ ...item, quantity: 1 })));
        }
    }, []);

    // Filter products whenever filters or products change
    useEffect(() => {
        let filtered = [...products];

        // Apply hanger type filter
        if (filters.hangerType.length > 0) {
            filtered = filtered.filter(product =>
                filters.hangerType.some(type =>
                    product.category.toLowerCase().includes(type.toLowerCase()) ||
                    product.name.toLowerCase().includes(type.toLowerCase())
                )
            );
        }

        // Apply garment type filter
        if (filters.garmentType.length > 0) {
            filtered = filtered.filter(product =>
                filters.garmentType.some(type =>
                    product.category.toLowerCase().includes(type.toLowerCase()) ||
                    product.name.toLowerCase().includes(type.toLowerCase())
                )
            );
        }

        // Apply hook type filter
        if (filters.hookType.length > 0) {
            filtered = filtered.filter(product =>
                filters.hookType.some(type =>
                    product.category.toLowerCase().includes(type.toLowerCase()) ||
                    product.name.toLowerCase().includes(type.toLowerCase())
                )
            );
        }

        // Apply sorting
        if (sortBy === "name-asc") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "name-desc") {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === "id-asc") {
            filtered.sort((a, b) => a.id - b.id);
        } else if (sortBy === "id-desc") {
            filtered.sort((a, b) => b.id - a.id);
        }

        setFilteredProducts(filtered);
    }, [products, filters, sortBy]);

    const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter(item => item !== value)
                : [...prev[filterType], value]
        }));
    };

    const clearAllFilters = () => {
        setFilters({
            hangerType: [],
            garmentType: [],
            hookType: []
        });
        setSortBy("default");
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value);
    };

    const addToEnquiry = (product: Product) => {
        const existingEnquiry: Product[] = JSON.parse(localStorage.getItem("enquiryItems") || "[]");
        const existingItem = existingEnquiry.find((item: Product) => item.id === product.id);

        if (!existingItem) {
            // Only add if item doesn't exist
            const updatedEnquiry = [...existingEnquiry, product];
            localStorage.setItem("enquiryItems", JSON.stringify(updatedEnquiry));
            setEnquiryItems(updatedEnquiry.map(item => ({ ...item, quantity: 1 })));
        }
    };

    const isInEnquiry = (productId: number) => {
        return enquiryItems.some(item => item.id === productId);
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <Header currentPage="catalogue" />

            <div className="container mx-auto px-4 py-12 text-black flex-1">
                <h1 className="text-4xl font-bold text-center mb-12">Catalogue</h1>
                <div className="flex">
                    {/* Filters */}
                    <aside className="w-1/4 pr-8">
                        <h2 className="text-2xl font-bold mb-6">Filter</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Hanger Type</h3>
                                <div className="space-y-2 ml-4">
                                    {["Plastic", "Wooden", "Metal", "Velvet", "Wire"].map((type) => (
                                        <label key={type} className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                                checked={filters.hangerType.includes(type)}
                                                onChange={() => handleFilterChange("hangerType", type)}
                                            />
                                            <span className="ml-2">{type} Hangers</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Garment Type</h3>
                                <div className="space-y-2 ml-4">
                                    {["Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids"].map((type) => (
                                        <label key={type} className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                                checked={filters.garmentType.includes(type)}
                                                onChange={() => handleFilterChange("garmentType", type)}
                                            />
                                            <span className="ml-2">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Hook Type</h3>
                                <div className="space-y-2 ml-4">
                                    {["Swivel", "Fixed", "Notched", "Clips", "Non-slip"].map((type) => (
                                        <label key={type} className="flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                                checked={filters.hookType.includes(type)}
                                                onChange={() => handleFilterChange("hookType", type)}
                                            />
                                            <span className="ml-2">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Active Filters Display */}
                            {(filters.hangerType.length > 0 || filters.garmentType.length > 0 || filters.hookType.length > 0) && (
                                <div className="border-t pt-4">
                                    <h4 className="font-semibold mb-2 text-sm">Active Filters:</h4>
                                    <div className="space-y-1">
                                        {filters.hangerType.map(filter => (
                                            <span key={filter} className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                                                {filter}
                                            </span>
                                        ))}
                                        {filters.garmentType.map(filter => (
                                            <span key={filter} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                                                {filter}
                                            </span>
                                        ))}
                                        {filters.hookType.map(filter => (
                                            <span key={filter} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                                                {filter}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <button
                                onClick={clearAllFilters}
                                className="bg-pink-500 text-white w-full py-2 rounded-md hover:bg-pink-600 transition-colors"
                            >
                                CLEAR ALL FILTERS
                            </button>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                Showing {filteredProducts.length > 0 ? `1-${filteredProducts.length}` : "0"} of {filteredProducts.length} results
                                {filteredProducts.length !== products.length && (
                                    <span className="text-pink-600 ml-1">
                                        (filtered from {products.length} total)
                                    </span>
                                )}
                            </p>
                            <select
                                className=" focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                value={sortBy}
                                onChange={handleSortChange}
                            >
                                <option value="default">Default sorting</option>
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="id-asc">ID (Low to High)</option>
                                <option value="id-desc">ID (High to Low)</option>
                            </select>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="mb-4">
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.205-2.178C3.993 10.98 2 8.61 2 6c0-3.314 2.686-6 6-6h8c3.314 0 6 2.686 6 6 0 2.61-1.993 4.98-3.795 6.822C16.5 14.184 14.34 15 12 15z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500">
                                    {products.length === 0
                                        ? "No products are available in the catalogue."
                                        : "Try adjusting your filters to see more results."
                                    }
                                </p>
                                {(filters.hangerType.length > 0 || filters.garmentType.length > 0 || filters.hookType.length > 0) && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
                                    >
                                        Clear All Filters
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {filteredProducts.map((product: Product) => (
                                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                                        {product.image ? (
                                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto mb-4 rounded" />
                                        ) : (
                                            <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center">
                                                <span className="text-gray-500">No Image</span>
                                            </div>
                                        )}
                                        <p className="font-semibold text-gray-900">{product.name}</p>
                                        <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                                        <button
                                            onClick={() => addToEnquiry(product)}
                                            className={`w-full py-2 rounded-md transition-colors ${isInEnquiry(product.id)
                                                ? "bg-green-500 text-white hover:bg-green-600"
                                                : "bg-pink-500 text-white hover:bg-pink-600"
                                                }`}
                                        >
                                            {isInEnquiry(product.id) ? "✓ ADDED TO ENQUIRY" : "ADD TO ENQUIRY"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </main>
                </div>

                {/* Floating Enquiry Counter */}
                {enquiryItems.length > 0 && (
                    <div className="fixed bottom-6 right-6 z-50">
                        <a
                            href="/enquiry"
                            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition-colors flex items-center space-x-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="font-medium">
                                {enquiryItems.length} items
                            </span>
                        </a>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
