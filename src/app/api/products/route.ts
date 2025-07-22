import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the database
async function getDB() {
    return open({
        filename: './products.db',
        driver: sqlite3.Database,
    });
}

export async function GET() {
    const db = await getDB();
    await db.run('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, category TEXT)');
    const products = await db.all('SELECT * FROM products');
    await db.close();
    return NextResponse.json(products);
}

export async function POST(req: Request) {
    const db = await getDB();
    const { id, name, category } = await req.json();
    await db.run('INSERT INTO products (id, name, category) VALUES (?, ?, ?)', [id, name, category]);
    await db.close();
    return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
    const db = await getDB();
    const { id, name, category } = await req.json();
    await db.run('UPDATE products SET name = ?, category = ? WHERE id = ?', [name, category, id]);
    await db.close();
    return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
    const db = await getDB();
    const { id } = await req.json();
    await db.run('DELETE FROM products WHERE id = ?', [id]);
    await db.close();
    return NextResponse.json({ success: true });
}
