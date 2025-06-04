import { NavLink } from "react-router";

// components/Sidebar.tsx
interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const menuItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/games", label: "Games", icon: "🎮" },
  ];

  return (
    <aside
      className={`hidden lg:flex lg:flex-col w-64 h-screen bg-background border-r border-gray-200 ${className}`}
    >
      {/* Header do Sidebar */}
      <div className="flex-shrink-0 p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-200">Menu</h2>
      </div>

      {/* Navegação Principal */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className="flex items-center gap-3 px-3 py-2 text-gray-200 rounded-md hover:bg-gray-700 hover:text-blue-600 transition-colors"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer do Sidebar */}
      <div className="flex-shrink-0 p-4 border-t border-gray-200">
        <div className="text-xs text-gray-200">App v1.0.0</div>
      </div>
    </aside>
  );
}
