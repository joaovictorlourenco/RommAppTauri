import { NavLink } from "react-router";
import "./App.css";
function App() {
  return (
    <body className="bg-background-color min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-5 gap-4">
        <div className="bg-white p-10 rounded shadow">Jogo 1</div>
        <div className="bg-white p-10 rounded shadow">Jogo 2</div>
        <div className="bg-white p-10 rounded shadow">Jogo 3</div>
        <div className="bg-white p-10 rounded shadow">Jogo 4</div>
        <div className="bg-white p-10 rounded shadow">Jogo 5</div>
        <NavLink to="/home" className="bg-white p-10 rounded shadow">
          Home
        </NavLink>
      </div>
    </body>
  );
}

export default App;
