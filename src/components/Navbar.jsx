import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import useAuth from "../hooks/useAuth";
import logo2 from "../assets/logo2.png"; //Deligtico logo |V|
import About from "../pages/About";

const Navbar = () => {
  const { user, logout } = useAuth(); // from AuthContext |V|
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Dummy cart values set to 0 for now |V|
  const cartCount = 0;
  const cartTotal = 0;

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="bg-amber-50 shadow-md flex justify-between items-center mt-5 p-0">
      {/*  left logo of delightico |V| */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo2} 
          alt="Delightico Logo"
          className="h-14 w-30"
        />
      </Link>
      

      {/* Right menu starting under which 1.cart,2.Profile, and also dropdown menu which contains login and register about and contact|V|*/}
      <div className="flex items-center space-x-6 relative">
        <Link to="/about" className="text-gray-700 hover:text-green-700">
         About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-green-700">
          Contact
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative flex items-center space-x-1">
          <span className="text-green-700 font-medium">
            ₹{cartTotal.toFixed(2)}
          </span>
          <ShoppingCart className="w-6 h-6 text-green-700" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-1">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)} //initiate the dropdown menu|V|
            className="flex items-center"
          >
            <User className="w-6 h-6 text-green-700" />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 border z-50">
              {user ? ( //if login is there then profile, orders and logout option will be there|V|
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </>
              ) : ( //If login is not done then only register and login will be there|V|
                <>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
