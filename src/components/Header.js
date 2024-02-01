//import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 ">
      <div className="logo-container">
        <img
          className="w-48 px-3 pt-2"
          alt="logoImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3On1qCvY8W7kSirLlluMS9pC9c78SZeNLw&usqp=CAU"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-3">
          <li className="px-3">Home</li>
          <li className="px-3">Products</li>
          <li className="px-3 ">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
