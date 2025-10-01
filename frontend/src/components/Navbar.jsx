import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons

function Navbar() {
  const location = useLocation(); // detect active route
  const [isOpen, setIsOpen] = useState(false); // toggle menu
  const menuItems = ["Home", "About", "Contact", "Login"];

  return (
    <nav className="bg-gray-100 p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo + AGSS */}
        <div className="flex items-center gap-2">
          <img src="/favicon.ico" alt="logo" className="w-6 h-6" />
          <h1 className="text-2xl font-bold font-poppins text-gray-800">AGSS</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-4">
          {menuItems.map((item, idx) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <li key={idx}>
                <Link
                  to={path}
                  className={`px-4 py-2 rounded-2xl transition-colors duration-300 
                    ${
                      isActive
                        ? "bg-yellow-400 text-black"
                        : "bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-800"
                    }`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <>
          {/* Dark overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)} // close when clicking outside
          ></div>

          {/* Right-side menu */}
          <div className="fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg shadow-black/30 z-50 transform transition-transform duration-300">
            <ul className="flex flex-col gap-2 p-6">
              {menuItems.map((item, idx) => {
                const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                const isActive = location.pathname === path;

                return (
                  <li key={idx}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)} // close menu on click
                      className={`block px-4 py-2 rounded-2xl text-center transition-colors duration-300 
                        ${
                          isActive
                            ? "bg-yellow-400 text-black"
                            : "bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-800"
                        }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
