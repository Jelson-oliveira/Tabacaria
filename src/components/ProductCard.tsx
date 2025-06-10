import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  discount?: number;
  isNew?: boolean;
  isFavorite?: boolean;
  inStock: boolean;
  category: string;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured";
  className?: string;
}

const ProductCard = ({
  product,
  variant = "default",
  className,
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log("Added to cart:", product.id);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Quick view logic here
    console.log("Quick view:", product.id);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-300 hover:shadow-lg border-tobacco-200 bg-white",
        variant === "featured" && "lg:col-span-2 lg:row-span-2",
        !product.inStock && "opacity-75",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-tobacco-50 aspect-square">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <Badge className="bg-gold-500 text-tobacco-900 hover:bg-gold-600">
                Novo
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-mahogany-500 text-white hover:bg-mahogany-600">
                -{discountPercentage}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="secondary" className="bg-tobacco-400 text-white">
                Esgotado
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div
            className={cn(
              "absolute top-2 right-2 flex flex-col gap-1 transition-opacity duration-200",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/90 hover:bg-white"
              onClick={handleToggleFavorite}
            >
              <Heart
                className={cn(
                  "h-4 w-4",
                  isFavorite
                    ? "fill-mahogany-500 text-mahogany-500"
                    : "text-tobacco-600",
                )}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 bg-white/90 hover:bg-white"
              onClick={handleQuickView}
            >
              <Eye className="h-4 w-4 text-tobacco-600" />
            </Button>
          </div>

          {/* Quick Add to Cart - Shows on hover */}
          {product.inStock && (
            <div
              className={cn(
                "absolute bottom-2 left-2 right-2 transition-all duration-200",
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              )}
            >
              <Button
                onClick={handleAddToCart}
                className="w-full bg-tobacco-700 hover:bg-tobacco-800 text-white"
                size="sm"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Adicionar ao Carrinho
              </Button>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          <p className="text-xs text-tobacco-500 uppercase tracking-wide font-medium mb-1">
            {product.brand}
          </p>

          {/* Product Name */}
          <h3 className="font-semibold text-tobacco-900 mb-2 line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-3 w-3",
                    i < Math.floor(product.rating)
                      ? "fill-gold-400 text-gold-400"
                      : "text-tobacco-300",
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-tobacco-500">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-bold text-tobacco-900">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-tobacco-500 line-through">
                R$ {product.originalPrice.toFixed(2).replace(".", ",")}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Always visible */}
          {product.inStock ? (
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="w-full border-tobacco-300 text-tobacco-700 hover:bg-tobacco-50"
              size="sm"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Comprar
            </Button>
          ) : (
            <Button disabled variant="outline" className="w-full" size="sm">
              Produto Esgotado
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
