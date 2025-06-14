// src/components/NavBar.tsx
interface NavBarProps {
  tipos: string[];
  filtroActual: string;
  onFiltroSeleccionado: (tipo: string) => void;
}

const NavBar = ({ tipos, filtroActual, onFiltroSeleccionado }: NavBarProps) => {
  return (
    <header className="nav">
      <img src="./img/logo.png" alt="Pokédex Logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <button
            className={`btn btn-header ${filtroActual === "ver-todos" ? "activo" : ""}`}
            onClick={() => onFiltroSeleccionado("ver-todos")}
          >
            Ver todos
          </button>
        </li>
        {tipos.map((tipo) => (
          <li key={tipo} className="nav-item">
            <button
              className={`btn btn-header ${tipo} ${filtroActual === tipo ? "activo" : ""}`}
              onClick={() => onFiltroSeleccionado(tipo)}
            >
              {tipo}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default NavBar;
