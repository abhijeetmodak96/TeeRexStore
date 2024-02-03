import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="flex justify-between">
        <div className=" m-4 p-4 ">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
        </div>
        <div className=" m-3 mx-10 p-3 ">
          <button
            className=" mx-1 p-2  hover:bg-slate-900 bg-slate-700 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>

      <div className="w-6/12 m-auto p-14 justify-center text-center">
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </>
  );
};

export default Cart;
