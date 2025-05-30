import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/layout/Header";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2023 RoomApp</p>
      </footer>
    </div>
  );
}

export default App;
