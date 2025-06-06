import { NavLink } from "react-router";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="flex p-4 items-center justify-center h-full">
      <div className="flex-1 flex flex-col items-center h-72 md:h-96 justify-center bg-gray-800 rounded-lg shadow-lg p-8 items">
        <h2 className="text-2xl font-bold text-white">
          Seja bem vindo ao <span className="text-blue-600">GameHub</span>!
        </h2>
        <p className="mt-2 text-gray-300 text-lg">
          Aqui você pode armazenar e gerenciar seus jogos Rooms.
        </p>
        <Button
          className="mt-4 bg-blue-600 hover:bg-blue-700 transition-colors"
          variant="primary"
        >
          <NavLink to="/games" className="text-white">
            Começar
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
