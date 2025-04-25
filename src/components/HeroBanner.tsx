
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-purple-900 to-blue-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
      />
      
      <div className="relative container mx-auto h-full flex flex-col justify-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-2xl">
          Твой любимый концерт <span className="text-purple-400">уже ждёт</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-xl">
          Приобретай билеты на топовые концерты и эксклюзивный мерч от любимых исполнителей!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-lg py-6 px-8">
            Купить билеты
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
            Смотреть мерч
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
