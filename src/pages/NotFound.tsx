import { NavLink } from "react-router";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-white">404</h1>
      <p className="text-2xl text-white">Page not found</p>
      <Button className="mt-4" variant="danger">
        <NavLink to="/" className="text-white">
          Go to Home
        </NavLink>
      </Button>
    </div>
  );
}
