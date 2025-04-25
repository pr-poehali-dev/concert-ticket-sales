
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface TicketCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  image: string;
  vip?: boolean;
}

const TicketCard = ({ id, title, date, location, price, image, vip = false }: TicketCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {vip && (
          <Badge className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600">
            VIP
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      
      <CardContent className="space-y-2 pb-2">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>
        <div className="mt-3 text-xl font-bold text-purple-600">{price} ₽</div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          Купить билет
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TicketCard;
