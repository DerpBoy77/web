"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button, EmptyState, ProductCard, FadeIn, SlideUp, StaggerContainer } from "@/components/ui";

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
    const [showMobileFilters, setShowMobileFilters] = useState(false);

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

    // Filter component for reuse
    const FilterContent = () => (
        <div className="space-y-6" style={{ backgroundColor: 'white' }}>
            <div style={{ backgroundColor: 'white' }}>
                <h3 className="font-semibold mb-2 text-gray-900">Hanger Type</h3>
                <div className="space-y-2 ml-4" style={{ backgroundColor: 'white' }}>
                    {["Plastic", "Wooden", "Metal", "Velvet", "Wire"].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                checked={filters.hangerType.includes(type)}
                                onChange={() => handleFilterChange("hangerType", type)}
                            />
                            <span className="ml-2 text-sm sm:text-base text-gray-700">{type} Hangers</span>
                        </label>
                    ))}
                </div>
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <h3 className="font-semibold mb-2 text-gray-900">Garment Type</h3>
                <div className="space-y-2 ml-4" style={{ backgroundColor: 'white' }}>
                    {["Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids"].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                checked={filters.garmentType.includes(type)}
                                onChange={() => handleFilterChange("garmentType", type)}
                            />
                            <span className="ml-2 text-sm sm:text-base text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <h3 className="font-semibold mb-2 text-gray-900">Hook Type</h3>
                <div className="space-y-2 ml-4" style={{ backgroundColor: 'white' }}>
                    {["Swivel", "Fixed", "Notched", "Clips", "Non-slip"].map((type) => (
                        <label key={type} className="flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="form-checkbox text-pink-500 rounded focus:ring-pink-500"
                                checked={filters.hookType.includes(type)}
                                onChange={() => handleFilterChange("hookType", type)}
                            />
                            <span className="ml-2 text-sm sm:text-base text-gray-700">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Active Filters Display */}
            {(filters.hangerType.length > 0 || filters.garmentType.length > 0 || filters.hookType.length > 0) && (
                <div className="border-t pt-4" style={{ backgroundColor: 'white' }}>
                    <h4 className="font-semibold mb-2 text-sm text-gray-900">Active Filters:</h4>
                    <div className="space-y-1" style={{ backgroundColor: 'white' }}>
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

            <Button
                onClick={() => {
                    clearAllFilters();
                    setShowMobileFilters(false);
                }}
                fullWidth
                className="text-sm sm:text-base"
            >
                CLEAR ALL FILTERS
            </Button>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            {/* Header */}
            <Header currentPage="catalogue" />

            <div className="container mx-auto px-4 py-8 sm:py-12 text-black flex-1">
                <FadeIn>
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Catalogue</h1>
                </FadeIn>

                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-6">
                    <button
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md"
                    >
                        <span className="font-semibold">Filters & Sort</span>
                        <div className="flex items-center space-x-2">
                            {(filters.hangerType.length + filters.garmentType.length + filters.hookType.length) > 0 && (
                                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                    {filters.hangerType.length + filters.garmentType.length + filters.hookType.length}
                                </span>
                            )}
                            <svg
                                className={`w-5 h-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Mobile Filters Overlay */}
                    {showMobileFilters && (
                        <div className="lg:hidden fixed inset-0 bg-black/30 z-50" onClick={() => setShowMobileFilters(false)}>
                            <div
                                className="bg-white h-full w-full max-w-sm ml-auto p-6 overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                                style={{ backgroundColor: 'white' }}
                            >
                                <div className="flex justify-between items-center mb-6" style={{ backgroundColor: 'white' }}>
                                    <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
                                    <button onClick={() => setShowMobileFilters(false)} className="text-gray-500">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div style={{ backgroundColor: 'white' }}>
                                    <FilterContent />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Desktop Filters Sidebar */}
                    <aside className="hidden lg:block w-1/5 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="text-2xl font-bold mb-6">Filter</h2>
                            <FilterContent />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="flex-1 lg:w-4/5">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                            <p className="text-gray-600 text-sm sm:text-base">
                                Showing {filteredProducts.length > 0 ? `1-${filteredProducts.length}` : "0"} of {filteredProducts.length} results
                                {filteredProducts.length !== products.length && (
                                    <span className="text-pink-600 ml-1">
                                        (filtered from {products.length} total)
                                    </span>
                                )}
                            </p>
                            <select
                                className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
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
                            <EmptyState
                                icon={
                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.816-6.205-2.178C3.993 10.98 2 8.61 2 6c0-3.314 2.686-6 6-6h8c3.314 0 6 2.686 6 6 0 2.61-1.993 4.98-3.795 6.822C16.5 14.184 14.34 15 12 15z" />
                                    </svg>
                                }
                                title="No products found"
                                description={
                                    products.length === 0
                                        ? "No products are available in the catalogue."
                                        : "Try adjusting your filters to see more results."
                                }
                                action={
                                    (filters.hangerType.length > 0 || filters.garmentType.length > 0 || filters.hookType.length > 0) && (
                                        <Button onClick={clearAllFilters}>
                                            Clear All Filters
                                        </Button>
                                    )
                                }
                            />
                        ) : (
                            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8" staggerDelay={0.1}>
                                {filteredProducts.map((product: Product) => (
                                    <ProductCard
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        category={product.category}
                                        image={product.image}
                                        onAddToEnquiry={addToEnquiry}
                                        isInEnquiry={isInEnquiry(product.id)}
                                    />
                                ))}
                            </StaggerContainer>
                        )}
                    </main>
                </div>

                {/* Floating Enquiry Counter */}
                {enquiryItems.length > 0 && (
                    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
                        <a
                            href="/enquiry"
                            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 sm:p-4 shadow-lg transition-colors flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="font-medium text-sm sm:text-base">
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
