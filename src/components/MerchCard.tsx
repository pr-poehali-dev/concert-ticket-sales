
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface MerchCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const MerchCard = ({ id, title, price, image, category }: MerchCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-contain transition-transform hover:scale-105 p-2"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="text-sm text-gray-500">{category}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="text-xl font-bold text-purple-600">{price} ₽</div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-black hover:bg-gray-800">
          <ShoppingCart className="h-4 w-4 mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MerchCard;
