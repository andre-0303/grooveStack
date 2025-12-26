import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-white">
          GrooveStack
        </NavLink>

        <div className="flex gap-6">
          <NavLink
            to="/vinyls"
            className={({ isActive }) =>
              `text-sm ${
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`
            }
          >
            Coleção
          </NavLink>

          <NavLink
            to="/vinyls/new"
            className={({ isActive }) =>
              `text-sm ${
                isActive
                  ? "text-green-500 font-semibold"
                  : "text-zinc-400 hover:text-white"
              }`
            }
          >
            Novo Vinil
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
