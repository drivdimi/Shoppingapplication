import { useState } from "react";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { ProductCard, type Product } from "./components/ProductCard";
import { ProductDetail } from "./components/ProductDetail";
import { CartSheet, type CartItem } from "./components/CartSheet";
import { AppMenu } from "./components/AppMenu";
import { MyProfile } from "./components/sections/MyProfile";
import { MyOrders } from "./components/sections/MyOrders";
import { Wishlist } from "./components/sections/Wishlist";
import { Addresses } from "./components/sections/Addresses";
import { PaymentMethods } from "./components/sections/PaymentMethods";
import { Notifications } from "./components/sections/Notifications";
import { Settings } from "./components/sections/Settings";
import { HelpCenter } from "./components/sections/HelpCenter";
import { About } from "./components/sections/About";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "./contexts/ThemeContext";

// Shopping App - Mobile Optimized
const CATEGORIES = ["All", "Audio", "Wearables", "Accessories", "Computers", "Photography"];

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1713618651165-a3cf7f85506c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.5,
    reviews: 128,
    category: "Audio",
    discount: 33,
  },
  {
    id: 2,
    name: "True Wireless Earbuds Pro",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.8,
    reviews: 256,
    category: "Audio",
    discount: 25,
  },
  {
    id: 3,
    name: "Smart Watch Series 8",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.6,
    reviews: 342,
    category: "Wearables",
  },
  {
    id: 4,
    name: "Premium Phone Case Collection",
    price: 29.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.3,
    reviews: 89,
    category: "Accessories",
    discount: 40,
  },
  {
    id: 5,
    name: "Ultra-Slim Laptop Pro",
    price: 1299.99,
    originalPrice: 1499.99,
    image: "https://images.unsplash.com/photo-1554125970-e3f2399e937f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.9,
    reviews: 512,
    category: "Computers",
    discount: 13,
  },
  {
    id: 6,
    name: "Professional Camera Kit",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1753351055855-b898a3aadb45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.7,
    reviews: 178,
    category: "Photography",
  },
  {
    id: 7,
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.4,
    reviews: 234,
    category: "Audio",
    discount: 38,
  },
  {
    id: 8,
    name: "Premium Tablet 12.9\"",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1714071803623-9594e3b77862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    rating: 4.8,
    reviews: 445,
    category: "Computers",
  },
];

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    toast.success(`${product.name} added to cart`);
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    toast.success("Item removed from cart");
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Handle section navigation
  const handleSectionNavigation = (section: string) => {
    setCurrentSection(section);
  };

  const handleBackToHome = () => {
    setCurrentSection(null);
  };

  // Render section components
  if (currentSection === "profile") {
    return <MyProfile onBack={handleBackToHome} />;
  }
  if (currentSection === "orders") {
    return <MyOrders onBack={handleBackToHome} />;
  }
  if (currentSection === "wishlist") {
    return <Wishlist onBack={handleBackToHome} onAddToCart={handleAddToCart} />;
  }
  if (currentSection === "addresses") {
    return <Addresses onBack={handleBackToHome} />;
  }
  if (currentSection === "payment") {
    return <PaymentMethods onBack={handleBackToHome} />;
  }
  if (currentSection === "notifications") {
    return <Notifications onBack={handleBackToHome} />;
  }
  if (currentSection === "settings") {
    return <Settings onBack={handleBackToHome} />;
  }
  if (currentSection === "help") {
    return <HelpCenter onBack={handleBackToHome} />;
  }
  if (currentSection === "about") {
    return <About onBack={handleBackToHome} />;
  }

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product, quantity) => {
          handleAddToCart(product, quantity);
          setSelectedProduct(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <Toaster />

      {/* Header */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -ml-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6 dark:text-white" />
            </button>
            <h1 className="text-xl dark:text-white">ShopHub</h1>
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2 -mr-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors relative"
            >
              <ShoppingCart className="w-6 h-6 dark:text-white" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto px-4 pb-3 scrollbar-hide">
          <div className="flex gap-2">
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <main className="px-4 py-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No products found</p>
          </div>
        )}
      </main>

      {/* Cart Sheet */}
      <CartSheet
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      {/* App Menu */}
      <AppMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleSectionNavigation}
      />
    </div>
  );
}