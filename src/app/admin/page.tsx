"use client";
import { useState, useEffect, useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Product = {
    id: number;
    name: string;
    category: string;
    image?: string;
};

type Category = {
    id: number;
    name: string;
};

export default function Admin() {
    // State for products
    const [products, setProducts] = useState<Product[]>([]);
    const [productForm, setProductForm] = useState({
        id: "",
        name: "",
        category: "",
        image: ""
    });
    const [editProductIndex, setEditProductIndex] = useState<number | null>(null);

    // State for categories
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryForm, setCategoryForm] = useState({
        id: "",
        name: ""
    });
    const [editCategoryIndex, setEditCategoryIndex] = useState<number | null>(null);

    // UI state
    const [activeTab, setActiveTab] = useState<"products" | "categories">("products");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // API functions
    const fetchProducts = useCallback(async () => {
        try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }, []);

    const seedDefaultCategories = useCallback(async () => {
        const defaultCategories = [
            // Hanger Types
            { id: 1, name: "Plastic" },
            { id: 2, name: "Wooden" },
            { id: 3, name: "Metal" },
            { id: 4, name: "Velvet" },
            { id: 5, name: "Wire" },
            // Garment Types
            { id: 6, name: "Shirt" },
            { id: 7, name: "Dress" },
            { id: 8, name: "Suit" },
            { id: 9, name: "Coat" },
            { id: 10, name: "Trouser" },
            { id: 11, name: "Skirt" },
            { id: 12, name: "Kids" },
            // Hook Types
            { id: 13, name: "Swivel" },
            { id: 14, name: "Fixed" },
            { id: 15, name: "Notched" },
            { id: 16, name: "Clips" },
            { id: 17, name: "Non-slip" }
        ];

        try {
            // Get existing categories to check for duplicates
            const existingResponse = await fetch("/api/categories");
            const existingCategories = await existingResponse.json();
            const existingNames = existingCategories.map((cat: Category) => cat.name.toLowerCase());
            const existingIds = existingCategories.map((cat: Category) => cat.id);

            let addedCount = 0;
            for (const category of defaultCategories) {
                // Skip if category name already exists or ID conflicts
                if (!existingNames.includes(category.name.toLowerCase()) && !existingIds.includes(category.id)) {
                    await fetch("/api/categories", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(category),
                    });
                    addedCount++;
                }
            }

            if (addedCount > 0) {
                alert(`Successfully added ${addedCount} default categories!`);
            } else {
                alert("All default categories already exist!");
            }
        } catch (error) {
            console.error("Error seeding default categories:", error);
            alert("Error adding default categories. Please try again.");
        }
    }, []);

    const fetchCategories = useCallback(async () => {
        try {
            const response = await fetch("/api/categories");
            const data = await response.json();

            // If no categories exist, seed with default categories
            if (data.length === 0) {
                await seedDefaultCategories();
                // Fetch again after seeding
                const responseAfterSeed = await fetch("/api/categories");
                const dataAfterSeed = await responseAfterSeed.json();
                setCategories(dataAfterSeed);
            } else {
                setCategories(data);
            }
        } catch (error) {
            console.error("Error fetching categories:", error);
            setCategories([]);
        }
    }, [seedDefaultCategories]);

    // Fetch data on component mount
    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, [fetchProducts, fetchCategories]);

    // Product handlers
    const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductForm({ ...productForm, [e.target.name]: e.target.value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setProductForm({
                    ...productForm,
                    image: event.target?.result as string
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleCategorySelection = (categoryName: string) => {
        setSelectedCategories(prev => {
            if (prev.includes(categoryName)) {
                return prev.filter(cat => cat !== categoryName);
            } else {
                return [...prev, categoryName];
            }
        });
    };

    const handleProductSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const finalCategory = selectedCategories.length > 0
            ? selectedCategories.join(", ")
            : productForm.category;

        const productData = {
            ...productForm,
            id: Number(productForm.id),
            category: finalCategory
        };

        try {
            if (editProductIndex !== null) {
                await fetch("/api/products", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(productData),
                });
            } else {
                await fetch("/api/products", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(productData),
                });
            }

            await fetchProducts();
            resetProductForm();
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    const handleEditProduct = (index: number) => {
        const product = products[index];
        setProductForm({
            id: String(product.id),
            name: product.name,
            category: product.category,
            image: product.image || ""
        });
        setSelectedCategories(product.category.split(", ").filter(cat => cat.length > 0));
        setEditProductIndex(index);
    };

    const handleDeleteProduct = async (index: number) => {
        const product = products[index];
        try {
            await fetch("/api/products", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: product.id }),
            });
            await fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const resetProductForm = () => {
        setProductForm({ id: "", name: "", category: "", image: "" });
        setSelectedCategories([]);
        setEditProductIndex(null);
    };

    // Category handlers
    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryForm({ ...categoryForm, [e.target.name]: e.target.value });
    };

    const handleCategorySubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const categoryData = {
            ...categoryForm,
            id: Number(categoryForm.id)
        };

        try {
            if (editCategoryIndex !== null) {
                await fetch("/api/categories", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(categoryData),
                });
            } else {
                await fetch("/api/categories", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(categoryData),
                });
            }

            await fetchCategories();
            resetCategoryForm();
        } catch (error) {
            console.error("Error saving category:", error);
        }
    };

    const handleEditCategory = (index: number) => {
        const category = categories[index];
        setCategoryForm({
            id: String(category.id),
            name: category.name
        });
        setEditCategoryIndex(index);
    };

    const handleDeleteCategory = async (index: number) => {
        const category = categories[index];
        try {
            await fetch("/api/categories", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: category.id }),
            });
            await fetchCategories();
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    const resetCategoryForm = () => {
        setCategoryForm({ id: "", name: "" });
        setEditCategoryIndex(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header currentPage="admin" />

            {/* Quick Actions Bar */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
                        <a
                            href="/catalogue"
                            className="bg-pink-500 text-white font-semibold rounded-full px-6 py-2 shadow-md hover:bg-pink-600 transition"
                        >
                            View Catalogue
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 flex-1">
                {/* Tab Navigation */}
                <div className="bg-white rounded-lg shadow-md mb-8">
                    <div className="flex border-b">
                        <button
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${activeTab === "products"
                                ? "bg-pink-500 text-white border-b-2 border-pink-500"
                                : "text-gray-600 hover:text-pink-500 hover:bg-gray-50"
                                }`}
                            onClick={() => setActiveTab("products")}
                        >
                            Products Management
                        </button>
                        <button
                            className={`flex-1 px-6 py-4 text-center font-semibold transition-colors ${activeTab === "categories"
                                ? "bg-pink-500 text-white border-b-2 border-pink-500"
                                : "text-gray-600 hover:text-pink-500 hover:bg-gray-50"
                                }`}
                            onClick={() => setActiveTab("categories")}
                        >
                            Categories Management
                        </button>
                    </div>
                </div>

                {/* Products Tab */}
                {activeTab === "products" && (
                    <div className="space-y-8">
                        {/* Product Form */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-6 text-gray-800">
                                {editProductIndex !== null ? "Edit Product" : "Add New Product"}
                            </h2>

                            <form onSubmit={handleProductSubmit} className="space-y-6">
                                {/* Basic Product Info */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Product ID *
                                        </label>
                                        <input
                                            name="id"
                                            type="number"
                                            value={productForm.id}
                                            onChange={handleProductChange}
                                            placeholder="Enter product ID"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Product Name *
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={productForm.name}
                                            onChange={handleProductChange}
                                            placeholder="Enter product name"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Manual Category
                                        </label>
                                        <input
                                            name="category"
                                            type="text"
                                            value={productForm.category}
                                            onChange={handleProductChange}
                                            placeholder="Type category manually"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Category Selection */}
                                {categories.length > 0 && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Select Categories
                                        </label>
                                        <div className="space-y-6 p-4 bg-gray-50 rounded-lg">
                                            {/* Hanger Type Categories */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                                                    Hanger Type
                                                </h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-5">
                                                    {categories
                                                        .filter(cat => ["Plastic", "Wooden", "Metal", "Velvet", "Wire"].includes(cat.name))
                                                        .map((category) => (
                                                            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedCategories.includes(category.name)}
                                                                    onChange={() => handleCategorySelection(category.name)}
                                                                    className="rounded border-gray-300 text-pink-500 focus:ring-pink-500"
                                                                />
                                                                <span className="text-sm text-gray-700">{category.name}</span>
                                                            </label>
                                                        ))}
                                                </div>
                                            </div>

                                            {/* Garment Type Categories */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                                                    Garment Type
                                                </h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-5">
                                                    {categories
                                                        .filter(cat => ["Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids"].includes(cat.name))
                                                        .map((category) => (
                                                            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedCategories.includes(category.name)}
                                                                    onChange={() => handleCategorySelection(category.name)}
                                                                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                                                />
                                                                <span className="text-sm text-gray-700">{category.name}</span>
                                                            </label>
                                                        ))}
                                                </div>
                                            </div>

                                            {/* Hook Type Categories */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                                    Hook Type
                                                </h4>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-5">
                                                    {categories
                                                        .filter(cat => ["Swivel", "Fixed", "Notched", "Clips", "Non-slip"].includes(cat.name))
                                                        .map((category) => (
                                                            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={selectedCategories.includes(category.name)}
                                                                    onChange={() => handleCategorySelection(category.name)}
                                                                    className="rounded border-gray-300 text-green-500 focus:ring-green-500"
                                                                />
                                                                <span className="text-sm text-gray-700">{category.name}</span>
                                                            </label>
                                                        ))}
                                                </div>
                                            </div>

                                            {/* Other Categories */}
                                            {(() => {
                                                const knownCategories = ["Plastic", "Wooden", "Metal", "Velvet", "Wire", "Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids", "Swivel", "Fixed", "Notched", "Clips", "Non-slip"];
                                                const otherCategories = categories.filter(cat => !knownCategories.includes(cat.name));

                                                if (otherCategories.length > 0) {
                                                    return (
                                                        <div>
                                                            <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                                                                <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                                                                Other Categories
                                                            </h4>
                                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ml-5">
                                                                {otherCategories.map((category) => (
                                                                    <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                                                                        <input
                                                                            type="checkbox"
                                                                            checked={selectedCategories.includes(category.name)}
                                                                            onChange={() => handleCategorySelection(category.name)}
                                                                            className="rounded border-gray-300 text-gray-500 focus:ring-gray-500"
                                                                        />
                                                                        <span className="text-sm text-gray-700">{category.name}</span>
                                                                    </label>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                                return null;
                                            })()}
                                        </div>
                                        {selectedCategories.length > 0 && (
                                            <div className="mt-3 p-3 bg-pink-50 rounded-lg">
                                                <span className="text-sm font-medium text-pink-700">
                                                    Selected: {selectedCategories.join(", ")}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Image Upload */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-black">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3">
                                            Product Image
                                        </label>
                                        <div className="space-y-3">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            />
                                            <input
                                                name="image"
                                                type="url"
                                                value={productForm.image}
                                                onChange={handleProductChange}
                                                placeholder="Or enter image URL"
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    {/* Image Preview */}
                                    {productForm.image && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                                Image Preview
                                            </label>
                                            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                                                <img
                                                    src={productForm.image}
                                                    alt="Product preview"
                                                    className="w-full h-48 object-cover rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Form Actions */}
                                <div className="flex justify-end space-x-4 pt-4 border-t">
                                    {editProductIndex !== null && (
                                        <button
                                            type="button"
                                            onClick={resetProductForm}
                                            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
                                    >
                                        {editProductIndex !== null ? "Update Product" : "Add Product"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Products List */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6 border-b">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Products List ({products.length} items)
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {products.map((product, index) => (
                                            <tr key={product.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {product.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {product.image ? (
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-16 w-16 object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <div className="h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                                            <span className="text-xs text-gray-500">No Image</span>
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {product.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                                        {product.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <button
                                                        onClick={() => handleEditProduct(index)}
                                                        className="text-blue-600 hover:text-blue-900 mr-3"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteProduct(index)}
                                                        className="text-red-600 hover:text-red-900"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {products.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                                                    No products found. Add your first product above.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* Categories Tab */}
                {activeTab === "categories" && (
                    <div className="space-y-8 ">
                        {/* Category Form */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-semibold mb-6 text-gray-800">
                                {editCategoryIndex !== null ? "Edit Category" : "Add New Category"}
                            </h2>

                            <form onSubmit={handleCategorySubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category ID *
                                        </label>
                                        <input
                                            name="id"
                                            type="number"
                                            value={categoryForm.id}
                                            onChange={handleCategoryChange}
                                            placeholder="Enter category ID"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category Name *
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            value={categoryForm.name}
                                            onChange={handleCategoryChange}
                                            placeholder="Enter category name"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="flex justify-end space-x-4 pt-4 border-t">
                                    {editCategoryIndex !== null && (
                                        <button
                                            type="button"
                                            onClick={resetCategoryForm}
                                            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors"
                                    >
                                        {editCategoryIndex !== null ? "Update Category" : "Add Category"}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Default Categories Seeding */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-3">Quick Setup</h3>
                            <p className="text-blue-700 mb-4">
                                Add all default filter categories used in the catalogue (Hanger Types, Garment Types, Hook Types).
                            </p>
                            <button
                                onClick={async () => {
                                    await seedDefaultCategories();
                                    await fetchCategories();
                                }}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Add Default Categories
                            </button>
                        </div>

                        {/* Categories List */}
                        <div className="bg-white rounded-lg shadow-md">
                            <div className="p-6 border-b">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    Categories List ({categories.length} items)
                                </h3>
                            </div>
                            <div className="p-6 space-y-8">
                                {/* Hanger Type Categories */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-4 h-4 bg-pink-500 rounded-full mr-3"></span>
                                        Hanger Type Categories
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categories
                                            .filter(cat => ["Plastic", "Wooden", "Metal", "Velvet", "Wire"].includes(cat.name))
                                            .map((category, index) => (
                                                <div key={category.id} className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <span className="text-sm text-gray-600">ID: {category.id}</span>
                                                            <h5 className="font-medium text-gray-900">{category.name}</h5>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleEditCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-blue-600 hover:text-blue-900 text-sm"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-red-600 hover:text-red-900 text-sm"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        {categories.filter(cat => ["Plastic", "Wooden", "Metal", "Velvet", "Wire"].includes(cat.name)).length === 0 && (
                                            <div className="col-span-full text-center text-gray-500 py-4 bg-gray-50 rounded-lg">
                                                No hanger type categories found
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Garment Type Categories */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                                        Garment Type Categories
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categories
                                            .filter(cat => ["Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids"].includes(cat.name))
                                            .map((category, index) => (
                                                <div key={category.id} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <span className="text-sm text-gray-600">ID: {category.id}</span>
                                                            <h5 className="font-medium text-gray-900">{category.name}</h5>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleEditCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-blue-600 hover:text-blue-900 text-sm"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-red-600 hover:text-red-900 text-sm"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        {categories.filter(cat => ["Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids"].includes(cat.name)).length === 0 && (
                                            <div className="col-span-full text-center text-gray-500 py-4 bg-gray-50 rounded-lg">
                                                No garment type categories found
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Hook Type Categories */}
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                                        Hook Type Categories
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {categories
                                            .filter(cat => ["Swivel", "Fixed", "Notched", "Clips", "Non-slip"].includes(cat.name))
                                            .map((category, index) => (
                                                <div key={category.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <span className="text-sm text-gray-600">ID: {category.id}</span>
                                                            <h5 className="font-medium text-gray-900">{category.name}</h5>
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <button
                                                                onClick={() => handleEditCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-blue-600 hover:text-blue-900 text-sm"
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                onClick={() => handleDeleteCategory(categories.findIndex(c => c.id === category.id))}
                                                                className="text-red-600 hover:text-red-900 text-sm"
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        {categories.filter(cat => ["Swivel", "Fixed", "Notched", "Clips", "Non-slip"].includes(cat.name)).length === 0 && (
                                            <div className="col-span-full text-center text-gray-500 py-4 bg-gray-50 rounded-lg">
                                                No hook type categories found
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Other Categories */}
                                {(() => {
                                    const knownCategories = ["Plastic", "Wooden", "Metal", "Velvet", "Wire", "Shirt", "Dress", "Suit", "Coat", "Trouser", "Skirt", "Kids", "Swivel", "Fixed", "Notched", "Clips", "Non-slip"];
                                    const otherCategories = categories.filter(cat => !knownCategories.includes(cat.name));

                                    if (otherCategories.length > 0) {
                                        return (
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                                    <span className="w-4 h-4 bg-gray-500 rounded-full mr-3"></span>
                                                    Other Categories
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {otherCategories.map((category, index) => (
                                                        <div key={category.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                                            <div className="flex justify-between items-center">
                                                                <div>
                                                                    <span className="text-sm text-gray-600">ID: {category.id}</span>
                                                                    <h5 className="font-medium text-gray-900">{category.name}</h5>
                                                                </div>
                                                                <div className="flex space-x-2">
                                                                    <button
                                                                        onClick={() => handleEditCategory(categories.findIndex(c => c.id === category.id))}
                                                                        className="text-blue-600 hover:text-blue-900 text-sm"
                                                                    >
                                                                        Edit
                                                                    </button>
                                                                    <button
                                                                        onClick={() => handleDeleteCategory(categories.findIndex(c => c.id === category.id))}
                                                                        className="text-red-600 hover:text-red-900 text-sm"
                                                                    >
                                                                        Delete
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })()}

                                {/* Show message if no categories at all */}
                                {categories.length === 0 && (
                                    <div className="text-center text-gray-500 py-12">
                                        No categories found. Add your first category above or use &quot;Add Default Categories&quot;.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
