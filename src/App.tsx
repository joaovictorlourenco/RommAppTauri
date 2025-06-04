import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Conteúdo Principal */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
