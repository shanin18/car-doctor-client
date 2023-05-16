import { Link, NavLink } from "react-router-dom";
import logo from "/logo.svg";
import { HiBars3BottomRight, HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() =>{})
      .catch((err) => console.log(err));
  };

  return (
    <nav className="navbar justify-between bg-base-100 my-12">
      <Link to="/">
        <img src={logo} className="w-[80px] lg:w-[100px]" alt="logo" />
      </Link>
      <div className="navbar-end md:w-0">
        <div className="dropdown dropdown-bottom dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiBars3BottomRight className="text-xl"></HiBars3BottomRight>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-1"
          >
            <li className="font-semibold text-lg">
              <NavLink
                to="/"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                Home
              </NavLink>
            </li>
            <li className="font-semibold text-lg">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                About
              </NavLink>
            </li>
            <li className="font-semibold text-lg">
              <NavLink
                to="/services"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                Services
              </NavLink>
            </li>
            <li className="font-semibold text-lg">
              <NavLink
                to="/contact"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                Contact
              </NavLink>
            </li>
            {user?.email ? (
              <>
                <li className="font-semibold text-lg">
                  <NavLink
                    to="/bookings"
                    className={({ isActive }) => isActive && "text-[#FF3811]"}
                  >
                    My Bookings
                  </NavLink>
                </li>
                <li className="font-semibold text-lg">
                  <NavLink>Logout</NavLink>
                </li>
              </>
            ) : (
              <li className="font-semibold text-lg">
                <NavLink
                  to="/login"
                  className={({ isActive }) => isActive && "text-[#FF3811]"}
                >
                  Login
                </NavLink>
              </li>
            )}
            <li className="font-semibold">
              <NavLink
                to="/cart"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                <button>
                  <HiOutlineShoppingBag className="text-lg"></HiOutlineShoppingBag>
                </button>
              </NavLink>
            </li>
            <li className="font-semibold">
              <NavLink
                to="/search"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                <button>
                  <HiOutlineSearch className="text-lg"></HiOutlineSearch>
                </button>
              </NavLink>
            </li>
            <li>
              <button className="btn btn-outline btn-sm  text-[#FF3811] capitalize py-0">
                Appointment
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:flex justify-between">
        <ul className="menu menu-horizontal gap-6 px-1">
          <li className="font-semibold text-lg">
            <NavLink
              to="/"
              className={({ isActive }) => isActive && "text-[#FF3811]"}
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) => isActive && "text-[#FF3811]"}
            >
              About
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/services"
              className={({ isActive }) => isActive && "text-[#FF3811]"}
            >
              Services
            </NavLink>
          </li>
          <li className="font-semibold text-lg">
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive && "text-[#FF3811]"}
            >
              Contact
            </NavLink>
          </li>
          {user?.email ? (
            <>
              <li className="font-semibold text-lg">
                <NavLink
                  to="/bookings"
                  className={({ isActive }) => isActive && "text-[#FF3811]"}
                >
                  My Bookings
                </NavLink>
              </li>
              <li className="font-semibold text-lg">
                <Link onClick={handleLogOut}>Logout</Link>
              </li>
            </>
          ) : (
            <li className="font-semibold text-lg">
              <NavLink
                to="/login"
                className={({ isActive }) => isActive && "text-[#FF3811]"}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="hidden lg:flex items-center gap-3">
        <button className="btn btn-ghost">
          <HiOutlineShoppingBag className="text-xl"></HiOutlineShoppingBag>
        </button>
        <button className="btn btn-ghost">
          <HiOutlineSearch className="text-xl"></HiOutlineSearch>
        </button>
        <Link to="">
          <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] capitalize">
            Appointment
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
