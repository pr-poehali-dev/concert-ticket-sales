
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Music, ShoppingCart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Секция героя */}
      <section className="relative h-[80vh] bg-gradient-to-r from-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">ГРАНДИОЗНОЕ ШОУ 2024</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl animate-fade-in">
            Незабываемый концерт с лучшими хитами и специальными гостями. 
            Только одно выступление в этом сезоне!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/concert">
              <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg py-6 px-8 hover-scale">
                Подробнее о концерте
              </Button>
            </Link>
            <Link to="/tickets">
              <Button className="bg-purple-600 text-white hover:bg-purple-700 text-lg py-6 px-8 hover-scale">
                Купить билет
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Информация о концерте */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-purple-900">О концерте</h2>
            <p className="text-lg text-gray-700">
              Грандиозное шоу 2024 - это уникальное сочетание живой музыки, невероятных 
              световых эффектов и потрясающей атмосферы. Вы услышите все хиты, а также 
              несколько новых композиций, которые еще нигде не исполнялись.
            </p>
            
            <div className="flex items-center gap-3 text-gray-700">
              <CalendarDays className="h-6 w-6 text-purple-600" />
              <span className="text-lg">15 декабря 2024, 19:00</span>
            </div>
            
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="h-6 w-6 text-purple-600" />
              <span className="text-lg">Москва, Крокус Сити Холл</span>
            </div>
            
            <Link to="/concert">
              <Button variant="outline" className="mt-4 text-purple-900 border-purple-900">
                Полная программа
              </Button>
            </Link>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Концертное выступление" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Билеты */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Билеты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Стандарт */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="bg-purple-100 p-6 text-center">
                <h3 className="text-2xl font-bold text-purple-900">Стандарт</h3>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-center mb-6">2 500 ₽</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Входной билет</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Обычные места</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>Без встречи с артистом</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Купить
                </Button>
              </div>
            </div>
            
            {/* VIP */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl relative border-2 border-purple-600">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-bold">
                ПОПУЛЯРНО
              </div>
              <div className="bg-purple-600 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">VIP</h3>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-center mb-6">5 000 ₽</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>VIP места в первых рядах</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Отдельный вход без очереди</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Коктейль в подарок</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Купить
                </Button>
              </div>
            </div>
            
            {/* Премиум */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="bg-purple-900 p-6 text-center">
                <h3 className="text-2xl font-bold text-white">Премиум</h3>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-center mb-6">10 000 ₽</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Лучшие места в зале</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Встреча с артистом</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Эксклюзивный мерч в подарок</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-900 hover:bg-purple-800">
                  Купить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Эксклюзивный мерч */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Эксклюзивный мерч</h2>
          <Link to="/merch">
            <Button variant="outline" className="text-purple-900 border-purple-900">
              Весь мерч
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Футболка */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80" 
                alt="Футболка" 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Футболка "Tour 2024"</h3>
              <p className="text-gray-600 mb-4">Лимитированная серия</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">1 500 ₽</span>
                <Button className="bg-black hover:bg-gray-800">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </div>
            </div>
          </div>
          
          {/* Худи */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1572495641004-28421ae29ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Худи" 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Худи с логотипом</h3>
              <p className="text-gray-600 mb-4">Комфорт и стиль</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">3 500 ₽</span>
                <Button className="bg-black hover:bg-gray-800">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </div>
            </div>
          </div>
          
          {/* Постер */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1587244141530-6b6aceef93db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Постер" 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Постер с автографом</h3>
              <p className="text-gray-600 mb-4">Лимитированное издание</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-purple-600">1 000 ₽</span>
                <Button className="bg-black hover:bg-gray-800">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  В корзину
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Призыв к действию */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Не пропусти главное событие года!</h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Билеты быстро заканчиваются. Покупай сейчас и получи скидку 10% на мерч при покупке билета.
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg py-6 px-8 hover-scale">
            Купить билет сейчас
          </Button>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">
                <Music className="h-5 w-5 inline-block mr-2 text-purple-400" />
                GRAND TOUR 2024
              </h3>
              <p>Незабываемый концерт с лучшими хитами и специальными гостями.</p>
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
              <p>Email: info@grandtour.ru</p>
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

export default Index;
