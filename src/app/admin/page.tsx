"use client";
import { useState, useEffect } from "react";
type Product = { id: number; name: string; category: string };

export default function Admin() {
    const [products, setProducts] = useState<Product[]>([]);
    const [form, setForm] = useState({ id: "", name: "", category: "" });
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Fetch products from API
    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleAdd(e: React.FormEvent) {
        e.preventDefault();
        if (editIndex !== null) {
            await fetch("/api/products", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, id: Number(form.id) }),
            });
        } else {
            await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, id: Number(form.id) }),
            });
        }
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts);
        setForm({ id: "", name: "", category: "" });
        setEditIndex(null);
    }

    function handleEdit(index: number) {
        const product: Product = products[index];
        setForm({ id: String(product.id), name: product.name, category: product.category });
        setEditIndex(index);
    }

    async function handleDelete(index: number) {
        const product: Product = products[index];
        await fetch("/api/products", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: product.id }),
        });
        fetch("/api/products")
            .then((res) => res.json())
            .then(setProducts);
        setEditIndex(null);
        setForm({ id: "", name: "", category: "" });
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="w-full py-4 px-8 flex justify-between items-center shadow bg-white">
                <div className="text-2xl font-bold tracking-wide text-gray-900">Admin Dashboard</div>
                <nav className="space-x-6 text-base font-medium">
                    <a href="/catalogue" className="bg-pink-500 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:bg-pink-600 transition">View Catalogue</a>
                </nav>
            </header>
            <div className="container mx-auto px-4 py-12 text-black">
                <h1 className="text-3xl font-bold mb-8">Product Management</h1>
                <form className="bg-white p-6 rounded-lg shadow mb-8 flex flex-col md:flex-row gap-4 items-center" onSubmit={handleAdd}>
                    <input name="id" value={form.id} onChange={handleChange} type="number" placeholder="ID" className="p-2 border rounded w-24" required />
                    <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Name" className="p-2 border rounded w-48" required />
                    <input name="category" value={form.category} onChange={handleChange} type="text" placeholder="Category" className="p-2 border rounded w-48" required />
                    <button type="submit" className="bg-pink-500 text-white font-bold px-6 py-2 rounded hover:bg-pink-600 transition">{editIndex !== null ? "Update" : "Add"} Product</button>
                </form>
                <table className="w-full bg-white rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-200 text-left">
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product: Product, idx: number) => (
                            <tr key={product.id} className="border-t">
                                <td className="p-3">{product.id}</td>
                                <td className="p-3">{product.name}</td>
                                <td className="p-3">{product.category}</td>
                                <td className="p-3 flex gap-2">
                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => handleEdit(idx)}>Edit</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => handleDelete(idx)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
