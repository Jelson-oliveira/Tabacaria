import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  ShoppingCart,
  Search,
  User,
  Heart,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [cartItems] = useState(3); // Mock cart count
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categories = [
    "Cigarros",
    "Charutos",
    "Tabaco de Cachimbo",
    "Acessórios",
    "Isqueiros",
    "Bebidas",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b border-tobacco-200">
      {/* Top bar with contact info */}
      <div className="bg-tobacco-800 text-tobacco-50 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>São Paulo, SP</span>
              </div>
            </div>
            <div className="text-gold-300">
              Entrega grátis acima de R$ 150,00
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-hero-gradient p-2 rounded-lg">
              <div className="text-white font-bold text-xl">T</div>
            </div>
            <div>
              <h1 className="font-bold text-xl text-tobacco-900">
                Tabacaria Elite
              </h1>
              <p className="text-xs text-tobacco-600">Premium & Tradicional</p>
            </div>
          </Link>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tobacco-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 bg-tobacco-50 border-tobacco-200 focus:border-tobacco-500"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Favorites */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-mahogany-500 text-white text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-tobacco-900">
                      Categorias
                    </h3>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        to={`/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                        className="block py-2 text-tobacco-700 hover:text-tobacco-900"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Link
                      to="/conta"
                      className="block py-2 text-tobacco-700 hover:text-tobacco-900"
                    >
                      Minha Conta
                    </Link>
                    <Link
                      to="/favoritos"
                      className="block py-2 text-tobacco-700 hover:text-tobacco-900"
                    >
                      Favoritos
                    </Link>
                    <Link
                      to="/pedidos"
                      className="block py-2 text-tobacco-700 hover:text-tobacco-900"
                    >
                      Meus Pedidos
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tobacco-400 h-4 w-4" />
              <Input
                placeholder="Buscar produtos..."
                className="pl-10 bg-tobacco-50 border-tobacco-200 focus:border-tobacco-500"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block bg-tobacco-100 border-t border-tobacco-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center gap-8 py-3">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-tobacco-700 hover:text-tobacco-900 font-medium text-sm transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
