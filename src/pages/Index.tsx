import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import {
  ArrowRight,
  Crown,
  Shield,
  Truck,
  Star,
  Flame,
  Gift,
  Zap,
  Award,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Mock data for products
  const featuredProducts = [
    {
      id: "1",
      name: "Marlboro Gold Box - Maço",
      brand: "Marlboro",
      price: 12.5,
      originalPrice: 15.0,
      image: "/api/placeholder/300/300",
      rating: 4.5,
      reviewCount: 234,
      discount: 17,
      isNew: false,
      isFavorite: false,
      inStock: true,
      category: "cigarros",
    },
    {
      id: "2",
      name: "Cohiba Robusto - Charuto Premium",
      brand: "Cohiba",
      price: 89.9,
      originalPrice: 110.0,
      image: "/api/placeholder/300/300",
      rating: 5.0,
      reviewCount: 156,
      discount: 18,
      isNew: true,
      isFavorite: true,
      inStock: true,
      category: "charutos",
    },
    {
      id: "3",
      name: "Isqueiro Zippo Classic Brass",
      brand: "Zippo",
      price: 165.0,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviewCount: 89,
      isNew: false,
      isFavorite: false,
      inStock: true,
      category: "acessorios",
    },
    {
      id: "4",
      name: "Lucky Strike Blue - Carteira",
      brand: "Lucky Strike",
      price: 11.8,
      originalPrice: 13.5,
      image: "/api/placeholder/300/300",
      rating: 4.2,
      reviewCount: 167,
      discount: 13,
      isNew: false,
      isFavorite: false,
      inStock: true,
      category: "cigarros",
    },
    {
      id: "5",
      name: "Tabaco de Cachimbo Peterson",
      brand: "Peterson",
      price: 45.9,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviewCount: 78,
      isNew: true,
      isFavorite: false,
      inStock: true,
      category: "tabaco",
    },
    {
      id: "6",
      name: "Charuto Romeo y Julieta Churchill",
      brand: "Romeo y Julieta",
      price: 125.0,
      originalPrice: 145.0,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviewCount: 203,
      discount: 14,
      isNew: false,
      isFavorite: true,
      inStock: false,
      category: "charutos",
    },
  ];

  const categories = [
    {
      name: "Cigarros",
      icon: "🚬",
      description: "Marcas nacionais e importadas",
      count: 150,
      image: "/api/placeholder/400/300",
      link: "/categoria/cigarros",
    },
    {
      name: "Charutos",
      icon: "🏺",
      description: "Premium cubanos e hondurenhos",
      count: 85,
      image: "/api/placeholder/400/300",
      link: "/categoria/charutos",
    },
    {
      name: "Cachimbos",
      icon: "🎯",
      description: "Artesanais e clássicos",
      count: 45,
      image: "/api/placeholder/400/300",
      link: "/categoria/cachimbos",
    },
    {
      name: "Acessórios",
      icon: "⚡",
      description: "Isqueiros, cortadores e mais",
      count: 220,
      image: "/api/placeholder/400/300",
      link: "/categoria/acessorios",
    },
  ];

  const heroSlides = [
    {
      title: "Charutos Cubanos Premium",
      subtitle: "Autênticos e únicos",
      description:
        "Descubra nossa seleção exclusiva de charutos cubanos com até 30% de desconto",
      cta: "Ver Coleção",
      background:
        "linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%)",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Cigarros Importados",
      subtitle: "Qualidade internacional",
      description:
        "As melhores marcas do mundo com preços especiais e entrega rápida",
      cta: "Explorar",
      background:
        "linear-gradient(135deg, #2F4F4F 0%, #708090 50%, #B0C4DE 100%)",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Acessórios Exclusivos",
      subtitle: "Para verdadeiros conhecedores",
      description:
        "Isqueiros Zippo, cortadores e humidores das melhores marcas",
      cta: "Descobrir",
      background:
        "linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF6347 100%)",
      image: "/api/placeholder/600/400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="bg-tobacco-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: slide.background }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                <div className="text-white space-y-6 animate-fade-in">
                  <Badge className="bg-gold-500 text-tobacco-900 hover:bg-gold-600">
                    {slide.subtitle}
                  </Badge>
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 leading-relaxed">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-tobacco-900 hover:bg-tobacco-50 font-semibold"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="hidden lg:block animate-fade-in">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto rounded-lg shadow-2xl float-animation"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-tobacco-50 hover:bg-tobacco-100 transition-colors">
              <div className="bg-gold-500 p-3 rounded-full">
                <Truck className="h-6 w-6 text-tobacco-900" />
              </div>
              <div>
                <h3 className="font-semibold text-tobacco-900">
                  Entrega Rápida
                </h3>
                <p className="text-tobacco-600 text-sm">
                  Grátis acima de R$ 150
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-tobacco-50 hover:bg-tobacco-100 transition-colors">
              <div className="bg-gold-500 p-3 rounded-full">
                <Shield className="h-6 w-6 text-tobacco-900" />
              </div>
              <div>
                <h3 className="font-semibold text-tobacco-900">
                  Compra Segura
                </h3>
                <p className="text-tobacco-600 text-sm">
                  Certificado SSL 256 bits
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-tobacco-50 hover:bg-tobacco-100 transition-colors">
              <div className="bg-gold-500 p-3 rounded-full">
                <Award className="h-6 w-6 text-tobacco-900" />
              </div>
              <div>
                <h3 className="font-semibold text-tobacco-900">
                  Qualidade Garantida
                </h3>
                <p className="text-tobacco-600 text-sm">
                  Produtos 100% originais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-tobacco-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tobacco-900 mb-4">
              Explore Nossas Categorias
            </h2>
            <p className="text-tobacco-600 max-w-2xl mx-auto text-lg">
              Encontre os melhores produtos de tabacaria, cuidadosamente
              selecionados para oferecer a melhor experiência aos nossos
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to={category.link}
                className="group block"
              >
                <Card className="overflow-hidden border-tobacco-200 hover:border-tobacco-400 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-tobacco-900/40 group-hover:bg-tobacco-900/20 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <div className="text-4xl mb-2">{category.icon}</div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/90 mb-2">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-white/80">
                            {category.count} produtos
                          </span>
                          <ChevronRight className="h-4 w-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-tobacco-900 mb-4">
                Produtos em Destaque
              </h2>
              <p className="text-tobacco-600 text-lg">
                Seleção especial dos nossos melhores produtos
              </p>
            </div>
            <Link to="/produtos">
              <Button
                variant="outline"
                className="border-tobacco-300 text-tobacco-700 hover:bg-tobacco-50"
              >
                Ver Todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="h-6 w-6 text-gold-400" />
                <Badge className="bg-gold-500 text-tobacco-900">
                  Oferta Limitada
                </Badge>
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Mega Promoção de Charutos
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Até 40% de desconto em charutos selecionados. Válido apenas por
                tempo limitado!
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">23</div>
                  <div className="text-sm text-white/80">Dias</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">14</div>
                  <div className="text-sm text-white/80">Horas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">35</div>
                  <div className="text-sm text-white/80">Minutos</div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gold-500 text-tobacco-900 hover:bg-gold-600 font-semibold"
              >
                <Gift className="mr-2 h-5 w-5" />
                Aproveitar Oferta
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="/api/placeholder/500/400"
                alt="Charutos em promoção"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-tobacco-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">20+</div>
              <div className="text-tobacco-300">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">10k+</div>
              <div className="text-tobacco-300">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-tobacco-300">Produtos Disponíveis</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-tobacco-300">Suporte ao Cliente</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-tobacco-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-tobacco-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-tobacco-600 text-lg">
              Depoimentos reais de quem confia na Tabacaria Elite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                rating: 5,
                comment:
                  "Excelente qualidade e atendimento. Sempre compro meus charutos aqui!",
                avatar: "/api/placeholder/60/60",
              },
              {
                name: "Marina Santos",
                rating: 5,
                comment:
                  "Produtos originais e entrega super rápida. Recomendo demais!",
                avatar: "/api/placeholder/60/60",
              },
              {
                name: "Roberto Lima",
                rating: 5,
                comment:
                  "A melhor tabacaria da região. Preços justos e grande variedade.",
                avatar: "/api/placeholder/60/60",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 border-tobacco-200">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-tobacco-900">
                        {testimonial.name}
                      </h4>
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-gold-400 text-gold-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-tobacco-600 italic">
                    "{testimonial.comment}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
