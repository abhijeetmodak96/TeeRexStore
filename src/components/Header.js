//import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <a href="/">
          <img
            className="w-48 px-3 pt-2"
            alt="logoImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3On1qCvY8W7kSirLlluMS9pC9c78SZeNLw&usqp=CAU"
          />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-3">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/products">Products</Link>
          </li>
          <li className="px-3 text-green-950">
            <Link to="/cart"> 🛒 {cartItems.length}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
