import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Movie App</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/favorites" className="text-gray-300 hover:text-white">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
