// Static data for Netlify deployment (replaces SQLite database)

export interface Product {
  id: number;
  name: string;
  category: string;
  image?: string;
}

export interface Category {
  id: number;
  name: string;
}

// Default categories for garment hangers
export const defaultCategories: Category[] = [
  { id: 1, name: "Wooden Hangers" },
  { id: 2, name: "Plastic Hangers" },
  { id: 3, name: "Metal Hangers" },
  { id: 4, name: "Velvet Hangers" },
  { id: 5, name: "Wire Hangers" },
  { id: 6, name: "Padded Hangers" },
  { id: 7, name: "Suit Hangers" },
  { id: 8, name: "Dress Hangers" },
  { id: 9, name: "Pant Hangers" },
  { id: 10, name: "Skirt Hangers" },
  { id: 11, name: "Kids Hangers" },
  { id: 12, name: "Baby Hangers" },
  { id: 13, name: "Luxury Hangers" },
  { id: 14, name: "Eco-Friendly Hangers" },
  { id: 15, name: "Heavy Duty Hangers" },
  { id: 16, name: "Travel Hangers" },
  { id: 17, name: "Specialty Hangers" }
];

// Sample products
export const defaultProducts: Product[] = [
  {
    id: 1,
    name: "Premium Wooden Suit Hanger",
    category: "Wooden Hangers",
    image: "/images/wooden-suit-hanger.jpg"
  },
  {
    id: 2,
    name: "Velvet Non-Slip Dress Hanger",
    category: "Velvet Hangers",
    image: "/images/velvet-dress-hanger.jpg"
  },
  {
    id: 3,
    name: "Heavy Duty Metal Coat Hanger",
    category: "Metal Hangers",
    image: "/images/metal-coat-hanger.jpg"
  },
  {
    id: 4,
    name: "Kids Colorful Plastic Hangers",
    category: "Kids Hangers",
    image: "/images/kids-plastic-hangers.jpg"
  },
  {
    id: 5,
    name: "Bamboo Eco-Friendly Hangers",
    category: "Eco-Friendly Hangers",
    image: "/images/bamboo-eco-hangers.jpg"
  },
  {
    id: 6,
    name: "Padded Satin Hangers",
    category: "Padded Hangers",
    image: "/images/padded-satin-hangers.jpg"
  },
  {
    id: 7,
    name: "Wire Utility Hangers",
    category: "Wire Hangers",
    image: "/images/wire-utility-hangers.jpg"
  },
  {
    id: 8,
    name: "Luxury Cedar Hangers",
    category: "Luxury Hangers",
    image: "/images/luxury-cedar-hangers.jpg"
  },
  {
    id: 9,
    name: "Clip-Style Pant Hangers",
    category: "Pant Hangers",
    image: "/images/clip-pant-hangers.jpg"
  },
  {
    id: 10,
    name: "Compact Travel Hangers",
    category: "Travel Hangers",
    image: "/images/compact-travel-hangers.jpg"
  }
];

// In-memory storage for development (will reset on each deployment)
let categories = [...defaultCategories];
let products = [...defaultProducts];

export const dataStore = {
  // Categories
  getCategories: () => categories,
  addCategory: (category: Omit<Category, 'id'>) => {
    const newCategory = { ...category, id: Date.now() };
    categories.push(newCategory);
    return newCategory;
  },
  updateCategory: (id: number, updates: Partial<Category>) => {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories[index] = { ...categories[index], ...updates };
      return categories[index];
    }
    return null;
  },
  deleteCategory: (id: number) => {
    const index = categories.findIndex(c => c.id === id);
    if (index !== -1) {
      categories.splice(index, 1);
      return true;
    }
    return false;
  },

  // Products
  getProducts: () => products,
  addProduct: (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    products.push(newProduct);
    return newProduct;
  },
  updateProduct: (id: number, updates: Partial<Product>) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...updates };
      return products[index];
    }
    return null;
  },
  deleteProduct: (id: number) => {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  },

  // Reset to defaults (useful for testing)
  reset: () => {
    categories = [...defaultCategories];
    products = [...defaultProducts];
  }
};
