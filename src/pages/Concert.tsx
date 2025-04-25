
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, Music, Users, Mic, Star } from "lucide-react";

const Concert = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Баннер концерта */}
      <section className="relative h-[50vh] bg-gradient-to-r from-purple-900 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">ГРАНДИОЗНОЕ ШОУ 2024</h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl">
            Полная информация о концерте
          </p>
        </div>
      </section>
      
      {/* Информация о мероприятии */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-purple-900">О концерте</h2>
            <p className="text-lg text-gray-700">
              Грандиозное шоу 2024 - это событие, которое вы точно не захотите пропустить! Насладитесь потрясающей живой музыкой, 
              невероятным световым шоу и атмосферой настоящего праздника. В программе прозвучат все главные хиты, а также 
              абсолютно новые композиции, которые вы услышите впервые.
            </p>
            <p className="text-lg text-gray-700">
              На сцене вас ждут также специальные гости, имена которых мы пока держим в секрете. Уникальные декорации, 
              профессиональный звук и свет - все это создаст незабываемую атмосферу музыкального праздника.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Купить билет сейчас
              </Button>
              <Link to="/merch">
                <Button variant="outline" className="text-purple-900 border-purple-900">
                  Эксклюзивный мерч
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-purple-900">Детали</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium">Дата</div>
                  <div>15 декабря 2024</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium">Время</div>
                  <div>19:00 (двери открываются в 18:00)</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium">Место проведения</div>
                  <div>Москва, Крокус Сити Холл</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium">Вместимость</div>
                  <div>7 000 человек</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Music className="h-6 w-6 text-purple-600" />
                <div>
                  <div className="font-medium">Продолжительность</div>
                  <div>2.5 часа</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Программа */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Программа концерта</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Часть 1: Золотые хиты</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span>Лучшие композиции из альбомов прошлых лет</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span>Уникальные аранжировки известных песен</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <span>Специальные ремиксы хитов, созданные для этого концерта</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Часть 2: Специальные гости</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Mic className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Выступление приглашенных артистов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mic className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Дуэты и коллаборации</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mic className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Эксклюзивные совместные выступления</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Часть 3: Новый альбом</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Music className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Премьера композиций из нового альбома</span>
                </li>
                <li className="flex items-start gap-2">
                  <Music className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Эксклюзивные треки, которые можно услышать только на концерте</span>
                </li>
                <li className="flex items-start gap-2">
                  <Music className="h-5 w-5 text-purple-600 mt-0.5" />
                  <span>Грандиозный финал с уникальным световым шоу</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Галерея */}
      <section className="py-12 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Фотогалерея с прошлых концертов</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img 
            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
          <img 
            src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Концерт" 
            className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
          />
        </div>
      </section>
      
      {/* Призыв к действию */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы к незабываемому концерту?</h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Количество билетов ограничено! Не упустите возможность стать частью этого грандиозного события.
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

export default Concert;
