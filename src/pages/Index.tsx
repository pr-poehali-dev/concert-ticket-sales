
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import TicketCard from "@/components/TicketCard";
import MerchCard from "@/components/MerchCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Данные для демонстрации
  const featuredTickets = [
    {
      id: "1",
      title: "Концерт группы «Мечта»",
      date: "15 декабря 2023, 19:00",
      location: "Москва, Крокус Сити Холл",
      price: 3500,
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      vip: true
    },
    {
      id: "2",
      title: "Фестиваль «Музыка Волн»",
      date: "20 января 2024, 17:00",
      location: "Санкт-Петербург, Ледовый дворец",
      price: 2800,
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: "3",
      title: "Концерт «Звезды джаза»",
      date: "5 февраля 2024, 20:00",
      location: "Екатеринбург, ККТ «Космос»",
      price: 2300,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  const featuredMerch = [
    {
      id: "1",
      title: "Футболка «Мечта» Tour 2023",
      price: 1500,
      category: "Одежда",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
    },
    {
      id: "2",
      title: "Виниловая пластинка «Лучшие хиты»",
      price: 2500,
      category: "Музыка",
      image: "https://images.unsplash.com/photo-1647379748706-11fa3eeb56f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      id: "3",
      title: "Кепка с логотипом группы",
      price: 900,
      category: "Аксессуары",
      image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroBanner />
      
      {/* Секция билетов */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные концерты</h2>
          <Link to="/tickets">
            <Button variant="outline" className="text-black">Все концерты</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTickets.map(ticket => (
            <TicketCard key={ticket.id} {...ticket} />
          ))}
        </div>
      </section>
      
      {/* Секция мерча */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Эксклюзивный мерч</h2>
            <Link to="/merch">
              <Button variant="outline" className="text-black">Весь мерч</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMerch.map(item => (
              <MerchCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Призыв к действию */}
      <section className="bg-purple-900 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Не пропусти любимый концерт!</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Присоединяйся к тысячам фанатов. Покупай билеты сейчас и получай скидку 10% на мерч.
          </p>
          <Button className="bg-white text-purple-900 hover:bg-gray-100 text-lg py-6 px-8">
            Купить билет сейчас
          </Button>
        </div>
      </section>
      
      {/* Футер */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">КонцертМания</h3>
              <p>Ваш надежный партнер для приобретения билетов на концерты и эксклюзивного мерча.</p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Ссылки</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
                <li><Link to="/tickets" className="hover:text-white transition-colors">Билеты</Link></li>
                <li><Link to="/merch" className="hover:text-white transition-colors">Мерч</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Контакты</h3>
              <p>Email: info@concertmania.ru</p>
              <p>Телефон: +7 (999) 123-45-67</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2023 КонцертМания. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
