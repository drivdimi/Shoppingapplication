import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import type { Product } from "../ProductCard";

interface WishlistProps {
  onBack: () => void;
  onAddToCart?: (product: Product) => void;
}

const WISHLIST_ITEMS: Product[] = [
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
  {
    id: 9,
    name: "Gaming Mouse Pro",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&fit=crop",
    rating: 4.6,
    reviews: 321,
    category: "Accessories",
  },
  {
    id: 10,
    name: "Mechanical Keyboard RGB",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&fit=crop",
    rating: 4.7,
    reviews: 289,
    category: "Accessories",
    discount: 20,
  },
  {
    id: 11,
    name: "4K Webcam",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1625314897518-bb4fe6e95229?w=400&fit=crop",
    rating: 4.5,
    reviews: 156,
    category: "Photography",
  },
  {
    id: 12,
    name: "USB-C Hub Pro",
    price: 69.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&fit=crop",
    rating: 4.4,
    reviews: 203,
    category: "Accessories",
    discount: 30,
  },
];

export function Wishlist({ onBack, onAddToCart }: WishlistProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10 px-4 py-3 flex items-center gap-4">
        <button
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1">
          <h1>My Wishlist</h1>
          <p className="text-sm text-gray-500">{WISHLIST_ITEMS.length} items</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="space-y-3">
          {WISHLIST_ITEMS.map((item) => (
            <Card key={item.id} className="p-3">
              <div className="flex gap-3">
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.discount && (
                    <Badge className="absolute top-1 left-1 bg-red-500 text-xs px-1">
                      -{item.discount}%
                    </Badge>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="line-clamp-2 mb-1">{item.name}</h4>
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-semibold">${item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => onAddToCart?.(item)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
