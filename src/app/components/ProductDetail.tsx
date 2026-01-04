import {
  ArrowLeft,
  Heart,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useState } from "react";
import type { Product } from "./ProductCard";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export function ProductDetail({
  product,
  onClose,
  onAddToCart,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b z-10 px-4 py-3 flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Product Image */}
        <div className="relative bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          {product.discount && (
            <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
              -{product.discount}% OFF
            </Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
          </div>

          <h1 className="mb-3">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-1">{product.rating}</span>
            </div>
            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          <div className="mb-6">
            <h2 className="mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience premium quality with this exceptional
              product. Designed with attention to detail and
              crafted from the finest materials, it delivers
              outstanding performance and reliability. Perfect
              for everyday use, this product combines style,
              functionality, and durability to exceed your
              expectations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-3">Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Premium quality materials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Advanced technology integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Ergonomic and stylish design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>12-month warranty included</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="sticky bottom-0 bg-white border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-lg">
            <button
              onClick={decrementQuantity}
              className="p-3 hover:bg-gray-100 transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="p-3 hover:bg-gray-100 transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="flex-1"
            size="lg"
          >
            Add to Cart - $
            {(product.price * quantity).toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
}