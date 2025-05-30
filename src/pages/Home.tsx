import { NavLink } from "react-router";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the home page of the application.</p>
      <NavLink to="/about" className="nav-link">
        Go to About Page
      </NavLink>
    </div>
  );
}
