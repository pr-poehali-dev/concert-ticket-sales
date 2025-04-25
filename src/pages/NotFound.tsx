
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Страница не найдена</h2>
        <p className="text-gray-600 mb-8">
          Извините, но страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Link to="/">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
