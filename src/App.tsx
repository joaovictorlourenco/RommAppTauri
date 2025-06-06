import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-gray-200 overflow-hidden">
      <Header />
      <main className="flex flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 p-4 overflow-y-auto min-h-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
