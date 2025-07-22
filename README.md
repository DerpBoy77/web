# Garment Hanger E-Commerce Platform

A comprehensive e-commerce platform for garment hangers, built as a clone of the original kavihangbro.com website. Features a modern Next.js frontend with a complete admin dashboard for product and category management.

## 🚀 Features

### Frontend
- **Homepage**: Exact clone of kavihangbro.com with hero section, features showcase, and testimonials
- **Product Catalogue**: Dynamic product display with real-time filtering and sorting
- **Contact Page**: Professional contact form and business information
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Admin Dashboard
- **Product Management**: Create, read, update, and delete products
- **Category Management**: Full CRUD operations for product categories
- **Image Upload**: Support for both file upload and URL-based images
- **Default Categories**: Auto-seeding with 17 predefined garment hanger categories
- **Multi-Category Selection**: Products can belong to multiple categories
- **Tabbed Interface**: Organized admin panel with separate product and category tabs

### Advanced Filtering
- **Hanger Type**: Plastic, Wood, Metal, Wire, Specialty
- **Garment Type**: Suits, Dresses, Shirts, Pants, Lingerie, Children's, Heavy Coats
- **Hook Type**: Standard, Non-Slip, Swivel, Heavy Duty, Cascade
- **Sorting Options**: Name (A-Z, Z-A), Price (Low-High, High-Low)
- **Real-time Updates**: Instant filtering without page reloads

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.2 with App Router
- **Frontend**: React 19.1.0 with TypeScript
- **Styling**: Tailwind CSS 4 with responsive design
- **Database**: SQLite with sqlite3 package
- **API**: RESTful endpoints for products and categories
- **Image Handling**: File upload with preview functionality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Homepage: [http://localhost:3000](http://localhost:3000)
   - Catalogue: [http://localhost:3000/catalogue](http://localhost:3000/catalogue)
   - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)
   - Contact: [http://localhost:3000/contact](http://localhost:3000/contact)

## 🗂️ Project Structure

```
src/
├── app/
│   ├── admin/              # Admin dashboard
│   ├── api/
│   │   ├── products/       # Product API endpoints
│   │   └── categories/     # Category API endpoints
│   ├── catalogue/          # Product catalogue page
│   ├── contact/            # Contact page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
└── components/
    ├── Header.tsx          # Navigation header
    └── Footer.tsx          # Site footer
```

## 🔧 API Endpoints

### Products
- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `PUT /api/products` - Update existing product
- `DELETE /api/products` - Delete product

### Categories
- `GET /api/categories` - Fetch all categories
- `POST /api/categories` - Create new category
- `PUT /api/categories` - Update existing category
- `DELETE /api/categories` - Delete category

## 💾 Database Schema

### Products Table
```sql
- id (INTEGER PRIMARY KEY)
- name (TEXT NOT NULL)
- description (TEXT)
- price (REAL)
- image (TEXT)
- categories (TEXT) -- JSON array of category IDs
```

### Categories Table
```sql
- id (INTEGER PRIMARY KEY)
- name (TEXT NOT NULL UNIQUE)
```

## 🎨 Default Categories

The system comes pre-loaded with 17 garment hanger categories:
- Plastic Hangers, Wood Hangers, Metal Hangers, Wire Hangers, Specialty Hangers
- Suit Hangers, Dress Hangers, Shirt Hangers, Pants Hangers, Lingerie Hangers
- Children's Hangers, Heavy Coat Hangers
- Standard Hook, Non-Slip Hook, Swivel Hook, Heavy Duty Hook, Cascade Hook

## 📄 License

This project is licensed under the MIT License.



---

Built with ❤️ using Next.js and modern web technologies.
