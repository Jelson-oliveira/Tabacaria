import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  CreditCard,
  Shield,
  Truck,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tobacco-900 text-tobacco-100">
      {/* Newsletter Section */}
      <div className="bg-tobacco-800 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-gold-300">
              Receba Nossas Ofertas Exclusivas
            </h3>
            <p className="mb-6 text-tobacco-200">
              Cadastre-se e seja o primeiro a saber sobre novos produtos e
              promoções especiais
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                placeholder="Seu e-mail"
                className="bg-tobacco-700 border-tobacco-600 text-tobacco-100 placeholder:text-tobacco-300"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-tobacco-900 font-semibold">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12">
                <img
                  src="/budega-logo.png"
                  alt="Tabacaria Budega Logo"
                  className="w-full h-full object-contain filter brightness-200"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg text-tobacco-100">
                  Tabacaria Budega
                </h1>
                <p className="text-xs text-tobacco-400">
                  Distribuidora Premium
                </p>
              </div>
            </div>
            <p className="text-tobacco-300 mb-4 text-sm">
              Há mais de 20 anos oferecendo os melhores produtos de tabacaria
              com qualidade premium e atendimento excepcional.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-tobacco-700"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-tobacco-700"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-tobacco-700"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-tobacco-700"
              >
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-300">Links Rápidos</h4>
            <div className="space-y-2">
              <Link
                to="/sobre"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Sobre Nós
              </Link>
              <Link
                to="/categoria/cigarros"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Cigarros
              </Link>
              <Link
                to="/categoria/charutos"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Charutos
              </Link>
              <Link
                to="/categoria/acessorios"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Acessórios
              </Link>
              <Link
                to="/promocoes"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Promoções
              </Link>
              <Link
                to="/blog"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-300">Atendimento</h4>
            <div className="space-y-2">
              <Link
                to="/contato"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Fale Conosco
              </Link>
              <Link
                to="/duvidas"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Dúvidas Frequentes
              </Link>
              <Link
                to="/trocas"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Trocas e Devoluções
              </Link>
              <Link
                to="/entrega"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Política de Entrega
              </Link>
              <Link
                to="/privacidade"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="block text-tobacco-300 hover:text-tobacco-100 text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-gold-300">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-tobacco-400" />
                <div className="text-sm text-tobacco-300">
                  <p>Rua Augusta, 1234</p>
                  <p>São Paulo, SP - 01310-100</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-tobacco-400" />
                <span className="text-sm text-tobacco-300">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-tobacco-400" />
                <span className="text-sm text-tobacco-300">
                  contato@tabacaria-budega.com.br
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-tobacco-400" />
                <div className="text-sm text-tobacco-300">
                  <p>Segunda a Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 15h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-tobacco-700" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-tobacco-800 p-2 rounded-lg">
              <Truck className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <h5 className="font-semibold text-tobacco-100 text-sm">
                Entrega Rápida
              </h5>
              <p className="text-tobacco-400 text-xs">Grátis acima de R$ 150</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-tobacco-800 p-2 rounded-lg">
              <Shield className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <h5 className="font-semibold text-tobacco-100 text-sm">
                Compra Segura
              </h5>
              <p className="text-tobacco-400 text-xs">Certificado SSL</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-tobacco-800 p-2 rounded-lg">
              <CreditCard className="h-5 w-5 text-gold-400" />
            </div>
            <div>
              <h5 className="font-semibold text-tobacco-100 text-sm">
                Múltiplas Formas
              </h5>
              <p className="text-tobacco-400 text-xs">Cartão, PIX, Boleto</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-tobacco-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-tobacco-400 text-sm">
            © 2024 Tabacaria Budega. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-tobacco-400 text-sm">
              Formas de pagamento:
            </span>
            <div className="flex gap-2">
              <div className="bg-tobacco-700 px-2 py-1 rounded text-xs text-tobacco-300">
                VISA
              </div>
              <div className="bg-tobacco-700 px-2 py-1 rounded text-xs text-tobacco-300">
                MASTER
              </div>
              <div className="bg-tobacco-700 px-2 py-1 rounded text-xs text-tobacco-300">
                PIX
              </div>
              <div className="bg-tobacco-700 px-2 py-1 rounded text-xs text-tobacco-300">
                BOLETO
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
