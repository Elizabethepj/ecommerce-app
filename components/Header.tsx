export default function Header() {
    return (
      <header className="bg-gray-900 shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white-800"> Tiendas centrales</h1>
        <nav className="space-x-4">
          <a href="#" className="text-gray-300">Sobre nosotros</a>
          <a href="#" className="text-gray-300">Contacto</a>
        </nav>
      </header>
    );
  }
  