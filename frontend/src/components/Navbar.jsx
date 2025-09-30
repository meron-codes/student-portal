import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to detect active route

  const menuItems = ["Home", "About", "Contact", "Login"];

  return (
    <nav className="bg-white p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-md z-50">
      {/* Logo + Text */}
      {/* Logo + Gradient Text */}
<div className="relative inline-block rounded-[16px]">
  {/* Gradient background */}
  <div className="relative inline-block">
  {/* Gray background, slightly smaller */}
  <div className="relative inline-block">
  {/* Gray background (gray-700) */}
  <div
    className="absolute inset-0 rounded-[8px]"
    style={{ backgroundColor: "#505f77ff" }} // gray-700
  ></div>

  {/* Content */}
  <div className="flex items-center gap-2 relative z-10">
    <img src="/favicon.ico" alt="logo" className="w-6 h-6 rounded-[16px]" />
    <h1 className="text-2xl font-bold text-white">AGSS</h1>
  </div>
</div>

</div>

</div>


      {/* Nav Links */}
      <ul className="flex gap-4">
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
    </nav>
  );
}

export default Navbar;
