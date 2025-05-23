import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { MdError } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;

  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="  space-y-3">
        <li>
          <NavLink id="menu-1" to="/" className={menuClass}>
            <MdDashboard className="mr-4 text-xl" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
            <NavLink id="menu-4" to="/user" className={menuClass}>
              <FaUsers className="mr-4 text-xl" />
              <span>User</span>
            </NavLink>
          </li>
        <li>
          <NavLink id="menu-2" to="/Orders" className={menuClass}>
            <AiOutlineShoppingCart className="mr-4 text-xl" />
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink id="menu-3" to="/Customers" className={menuClass}>
            <BsFillPeopleFill className="mr-4 text-xl" />
            <span>Customer</span>
          </NavLink>
        </li>
        <NavLink id="menu-2" to="/fff" className={menuClass}>
          <MdError className="mr-4 text-xl" />
          <span>OrdersList</span>
        </NavLink>
        <li>
          <NavLink to="/error/400" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 400</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/error/401" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 401</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/error/403" className={menuClass}>
            <MdError className="mr-4 text-xl text-red-500" />
            <span>Error 403</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
