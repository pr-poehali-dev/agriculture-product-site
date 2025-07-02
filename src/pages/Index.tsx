import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import ProductSection from "@/components/ProductSection";
import AdvantagesSection from "@/components/AdvantagesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-emerald-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 font-montserrat">
              Качественная сельхозпродукция
              <span className="text-green-600"> от фермы до стола</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-open-sans">
              Свежие молочные продукты от собственного стада и зерновые культуры
              с доставкой оптом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать продукцию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ProductSection />
      <AdvantagesSection />

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-montserrat">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Свяжитесь с нами для получения персонального предложения
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
