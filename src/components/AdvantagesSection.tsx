import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Экологически чистое производство",
      description:
        "Соблюдаем все стандарты экологического производства и контроля качества",
    },
    {
      icon: "Truck",
      title: "Быстрая доставка",
      description: "Доставка свежей продукции в день заказа по всему региону",
    },
    {
      icon: "Award",
      title: "Проверенное качество",
      description:
        "Все продукты проходят лабораторные испытания и имеют сертификаты",
    },
    {
      icon: "Users",
      title: "Персональный подход",
      description:
        "Индивидуальные условия для постоянных клиентов и оптовых покупателей",
    },
    {
      icon: "Heart",
      title: "Семейная ферма",
      description:
        "Производство ведется с любовью нашей семьей уже более 15 лет",
    },
    {
      icon: "Leaf",
      title: "Натуральные корма",
      description:
        "Животные питаются только натуральными кормами без химических добавок",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Наши преимущества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Почему клиенты выбирают именно нас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={advantage.icon as any}
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
