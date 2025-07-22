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
    await db.run('CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY, name TEXT)');
    const categories = await db.all('SELECT * FROM categories');
    await db.close();
    return NextResponse.json(categories);
}

export async function POST(req: Request) {
    const db = await getDB();
    const { id, name } = await req.json();
    await db.run('INSERT INTO categories (id, name) VALUES (?, ?)', [id, name]);
    await db.close();
    return NextResponse.json({ success: true });
}

export async function PUT(req: Request) {
    const db = await getDB();
    const { id, name } = await req.json();
    await db.run('UPDATE categories SET name = ? WHERE id = ?', [name, id]);
    await db.close();
    return NextResponse.json({ success: true });
}

export async function DELETE(req: Request) {
    const db = await getDB();
    const { id } = await req.json();
    await db.run('DELETE FROM categories WHERE id = ?', [id]);
    await db.close();
    return NextResponse.json({ success: true });
}
