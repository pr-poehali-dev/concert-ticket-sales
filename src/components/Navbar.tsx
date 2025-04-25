
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Ticket, Music } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music className="h-6 w-6 text-purple-400" />
          <span className="text-xl font-bold">КонцертМания</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-purple-400 transition-colors">Главная</Link>
          <Link to="/tickets" className="hover:text-purple-400 transition-colors">Билеты</Link>
          <Link to="/merch" className="hover:text-purple-400 transition-colors">Мерч</Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">О нас</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Ticket className="h-4 w-4 mr-2" />
            Купить билет
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
