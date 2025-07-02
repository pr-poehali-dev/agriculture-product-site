import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProductSection = () => {
  const products = [
    {
      title: "Молочная продукция",
      description:
        "Свежее молоко, творог, сметана и сыры от собственного стада коров",
      features: ["100% натуральное", "Без консервантов", "Ежедневная доставка"],
      icon: "Milk",
      image: "/placeholder.svg",
    },
    {
      title: "Зерновые культуры",
      description: "Пшеница, ячмень, овес и другие зерновые культуры оптом",
      features: ["Высокое качество", "Оптовые цены", "Доставка по региону"],
      icon: "Wheat",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наша продукция
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Предлагаем только качественную продукцию собственного производства
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 bg-gradient-to-r from-green-100 to-emerald-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={product.icon as any}
                    size={64}
                    className="text-green-600"
                  />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-montserrat">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-600 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Icon name="Info" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
