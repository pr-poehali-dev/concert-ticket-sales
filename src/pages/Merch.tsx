
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Merch = () => {
  // Данные для демонстрации
  const merchItems = {
    clothing: [
      {
        id: "1",
        title: "Футболка Tour 2024",
        price: 1500,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        sizes: ["S", "M", "L", "XL"]
      },
      {
        id: "2",
        title: "Худи с логотипом",
        price: 3500,
        image: "https://images.unsplash.com/photo-1572495641004-28421ae29ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["M", "L", "XL", "XXL"]
      },
      {
        id: "3",
        title: "Толстовка концертная",
        price: 2800,
        image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1363&q=80",
        sizes: ["S", "M", "L", "XL"]
      }
    ],
    accessories: [
      {
        id: "4",
        title: "Кепка с логотипом",
        price: 900,
        image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["Универсальный"]
      },
      {
        id: "5",
        title: "Сумка концертная",
        price: 1200,
        image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["Универсальный"]
      },
      {
        id: "6",
        title: "Браслет VIP",
        price: 500,
        image: "https://images.unsplash.com/photo-1575502318856-1004acd4f397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["Универсальный"]
      }
    ],
    souvenirs: [
      {
        id: "7",
        title: "Постер с автографом",
        price: 1000,
        image: "https://images.unsplash.com/photo-1587244141530-6b6aceef93db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["A2"]
      },
      {
        id: "8",
        title: "Виниловая пластинка",
        price: 2500,
        image: "https://images.unsplash.com/photo-1647379748706-11fa3eeb56f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["12 дюймов"]
      },
      {
        id: "9",
        title: "Кружка",
        price: 700,
        image: "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        sizes: ["300мл"]
      }
    ]
  };

  const MerchItem = ({ item }: { item: typeof merchItems.clothing[0] }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
      <div className="h-64 overflow-hidden bg-gray-50">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.sizes.map(size => (
            <span key={size} className="inline-block px-2 py-1 border border-gray-300 rounded text-sm">
              {size}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-600">{item.price} ₽</span>
          <Button className="bg-black hover:bg-gray-800">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Баннер */}
      <section className="relative h-[40vh] bg-gradient-to-r from-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Мерч" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Эксклюзивный мерч</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl">
            Лимитированная коллекция товаров с символикой тура
          </p>
        </div>
      </section>
      
      {/* Каталог мерча */}
      <section className="py-12 container mx-auto px-6">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <h2 className="text-3xl font-bold text-purple-900">Каталог товаров</h2>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Фильтры
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-8 w-full justify-start bg-gray-100 p-1">
            <TabsTrigger value="all" className="text-sm sm:text-base">Все товары</TabsTrigger>
            <TabsTrigger value="clothing" className="text-sm sm:text-base">Одежда</TabsTrigger>
            <TabsTrigger value="accessories" className="text-sm sm:text-base">Аксессуары</TabsTrigger>
            <TabsTrigger value="souvenirs" className="text-sm sm:text-base">Сувениры</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...merchItems.clothing, ...merchItems.accessories, ...merchItems.souvenirs].map(item => (
                <MerchItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="clothing">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {merchItems.clothing.map(item => (
                <MerchItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="accessories">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {merchItems.accessories.map(item => (
                <MerchItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="souvenirs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {merchItems.souvenirs.map(item => (
                <MerchItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Секция скидки */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">Концертная скидка 10%</h2>
                <p className="text-gray-700 mb-6">
                  При покупке билета на концерт получите скидку 10% на весь мерч!
                  Просто введите номер билета при оформлении заказа.
                </p>
                <Link to="/">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Купить билет на концерт
                  </Button>
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Концерт" 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Информационная секция */}
      <section className="py-12 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">Информация о мерче</h2>
          <div className="space-y-6 text-gray-700">
            <p>
              Весь мерч выпущен лимитированной серией специально для тура "Грандиозное шоу 2024". 
              Каждый товар имеет уникальный дизайн и высокое качество исполнения.
            </p>
            <p>
              Одежда изготавливается из премиальных материалов и соответствует всем стандартам качества. 
              Размеры указаны в стандартной российской маркировке.
            </p>
            <p>
              При покупке товаров на сумму от 3000 рублей доставка бесплатная по всей России. 
              Для других стран стоимость доставки рассчитывается индивидуально.
            </p>
            <p>
              Все сувениры и аксессуары идут в подарочной упаковке и могут стать отличным подарком 
              для любого фаната.
            </p>
          </div>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                <ShoppingCart className="h-5 w-5 inline-block mr-2 text-purple-400" />
                Мерч GRAND TOUR 2024
              </h3>
              <p>Официальный магазин эксклюзивных товаров с символикой тура.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/concert" className="hover:text-white transition-colors">О концерте</Link></li>
                <li><Link to="/merch" className="hover:text-white transition-colors">Мерч</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
              <p>Email: merch@grandtour.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2024 Grand Tour. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Merch;
