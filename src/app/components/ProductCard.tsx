import { Heart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm dark:bg-gray-800">
      <div className="relative">
        <div 
          className="aspect-square bg-gray-100 dark:bg-gray-700 cursor-pointer"
          onClick={() => onClick(product)}
        >
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            -{product.discount}%
          </Badge>
        )}
        <button
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="p-3">
        <div 
          className="cursor-pointer mb-1"
          onClick={() => onClick(product)}
        >
          <h3 className="line-clamp-2 mb-1 dark:text-white">{product.name}</h3>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">({product.reviews})</span>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <span className="font-semibold text-lg dark:text-white">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full"
          size="sm"
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}