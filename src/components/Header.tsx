import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Wheat" size={32} className="text-green-600" />
            <span className="text-2xl font-bold text-gray-900 font-montserrat">
              АгроФерма
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Продукция
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Сертификаты
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (xxx) xxx-xx-xx
            </Button>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
