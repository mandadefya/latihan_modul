import { BiListUl } from "react-icons/bi"; 
// ListMenu.js
import { RiCustomerService2Line } from "react-icons/ri";
import { BsCartFill } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";

export default function ListMenu() {
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <li>
          <div
            id="menu-1"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 
            font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <MdSpaceDashboard className="mr-4 text-xl" />
            <span>Dashboard</span>
          </div>
        </li>
        <li>
          <div
            id="menu-2"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 
            font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <BsCartFill className="mr-4 text-xl" />
            <span>Orders</span>
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 
            font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
            <RiCustomerService2Line className="mr-4 text-xl" />
            <span>Customer Service</span>
          </div>
        </li>
        <li>
          <div
            id="menu-3"
            className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 
            font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
          >
           <BiListUl className="mr-4 text-xl"/>
            <span>List Order</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
