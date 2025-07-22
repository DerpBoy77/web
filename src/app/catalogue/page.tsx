import { useEffect, useState } from "react";
import Image from "next/image";

type Product = { id: number; name: string; category: string };

export default function Catalogue() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts);
    }, []);

    return (
        <div className="bg-gray-50">
            {/* Header */}
            <header className="w-full py-4 px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
                <div className="text-2xl font-bold tracking-wide text-gray-900">Kavi Hangbro</div>
                <nav className="hidden md:flex items-center space-x-4 text-base font-medium">
                    <a href="/" className="text-gray-700 hover:text-pink-500">Home</a>
                    <a href="/about" className="text-gray-700 hover:text-pink-500">About</a>
                    <a href="/catalogue" className="text-pink-500 font-semibold">Catalogue</a>
                    <a href="/enquiry" className="text-gray-700 hover:text-pink-500">Enquiry</a>
                    <a
                        href="/contact"
                        className="bg-pink-500 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:bg-pink-600 transition"
                    >
                        CONTACT
                    </a>
                </nav>
            </header>

            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">Catalogue</h1>
                <div className="flex">
                    {/* Filters */}
                    <aside className="w-1/4 pr-8">
                        <h2 className="text-2xl font-bold mb-6">Filter</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold mb-2">Hanger Type</h3>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Plastic Hangers</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="ml-2">Wooden Hangers</span>
                                </label>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Garment Type</h3>
                                {/* Add garment type checkboxes here */}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Hook Type</h3>
                                {/* Add hook type checkboxes here */}
                            </div>
                            <button className="bg-pink-500 text-white w-full py-2 rounded-md hover:bg-pink-600">CLEAR</button>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="w-3/4">
                        <div className="flex justify-between items-center mb-6">
                            <p>Showing {products.length > 0 ? `1-${products.length}` : "0"} of {products.length} results</p>
                            <select className="border rounded-md p-2">
                                <option>Default sorting</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product: Product) => (
                                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
                                    {/* <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto mb-4" /> */}
                                    <div className="w-full h-48 bg-gray-200 mb-4"></div> {/* Placeholder */}
                                    <p className="font-semibold">{product.id}</p>
                                    <p className="text-sm text-gray-500 mb-4">{product.category}</p>
                                    <button className="bg-pink-500 text-white w-full py-2 rounded-md hover:bg-pink-600">ADD TO ENQUIRY</button>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
